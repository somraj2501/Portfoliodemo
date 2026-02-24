import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use window.innerHeight because the Hero is min-h-screen (100vh)
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-8 bg-white/70 backdrop-blur-md shadow-sm"
          : "py-6 bg-accent"
      } px-6`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.h1
          className={`font-bold font-[Doto,sans-serif] transition-all duration-300 ease-in-out ${
            isScrolled ? "md:text-4xl" : "text-2xl"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          Som Raj
        </motion.h1>

        <div className="hidden md:flex gap-8">
          {["Work", "About", "Skills", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-black transition-colors cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button className="md:hidden" whileTap={{ scale: 0.9 }}>
          <Menu className="w-6 h-6" />
        </motion.button>
      </nav>
    </motion.header>
  );
}
