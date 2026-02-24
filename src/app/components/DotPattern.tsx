import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "motion/react";
import { useEffect } from "react";

export function DotPattern() {
  const { scrollY } = useScroll();

  // Scroll transform
  const scrollMoveY: MotionValue<number> = useTransform(
    scrollY,
    [0, 1000],
    [0, -120],
  );

  const smoothScrollY: MotionValue<number> = useSpring(scrollMoveY, {
    stiffness: 40,
    damping: 20,
  });

  // Mouse motion values
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  // Mouse transforms
  const moveX: MotionValue<number> = useTransform(
    mouseX,
    [0, window.innerWidth],
    [-40, 40],
  );

  const moveY: MotionValue<number> = useTransform(
    mouseY,
    [0, window.innerHeight],
    [-40, 40],
  );

  const smoothX: MotionValue<number> = useSpring(moveX, {
    stiffness: 100,
    damping: 30,
  });

  const smoothMouseY: MotionValue<number> = useSpring(moveY, {
    stiffness: 100,
    damping: 30,
  });

  // FIX: explicitly type tuple
  const finalY: MotionValue<number> = useTransform(
    [smoothScrollY, smoothMouseY] as MotionValue<number>[],
    ([scroll, mouse]: number[]) => scroll + mouse,
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%">
        <defs>
          <motion.pattern
            id="dot-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            style={{
              x: smoothX,
              y: finalY,
            }}
          >
            <circle cx="2" cy="2" r="1.2" fill="black" />
          </motion.pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
}
