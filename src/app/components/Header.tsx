import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navItems = ["Work", "About", "Skills", "Contact"];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm"
            : "py-6 bg-transparent text-accent"
        } px-6`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            className={`font-bold font-[Doto,sans-serif] transition-all duration-300 ease-in-out text-2xl ${
              isScrolled ? "" : "md:text-4xl"
            }`}
            href="#"
            whileHover={{ scale: 1.05 }}
          >
            Som Raj
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors cursor-pointer ${isScrolled ? "text-neutral-600 hover:text-neutral-950" : "text-neutral-300 hover:text-neutral-50"}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden p-2 text-gray-700 hover:text-black"
            onClick={() => setIsMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white flex flex-col p-6 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-2xl font-bold font-[Doto,sans-serif]">
                Som Raj
              </span>
              <button
                className="p-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-4xl font-bold text-gray-800"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-gray-500 mb-4">Get in touch</p>
              <a
                href="mailto:hello@example.com"
                className="text-xl font-medium border-b-2 border-black pb-1"
              >
                hello@example.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
