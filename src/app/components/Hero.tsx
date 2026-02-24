import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen snap-start flex flex-col items-center justify-center relative px-6 bg-accent-foreground text-accent overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-5%,rgba(255,255,255,0.1),transparent_40%)] pointer-events-none"
        animate={{
          opacity: [1, 0.3, 1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ fontFamily: "Doto, sans-serif" }}
        >
          <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            Full-Stack
          </span>
          <br />
          <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            Developer
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting beautiful digital experiences with clean code and thoughtful
          design
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="#work"
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
