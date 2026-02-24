import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold"
          style={{ fontFamily: 'Doto, sans-serif' }}
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex gap-8">
          {['Work', 'About', 'Skills', 'Contact'].map((item, index) => (
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

        <motion.button
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </nav>
    </motion.header>
  );
}
