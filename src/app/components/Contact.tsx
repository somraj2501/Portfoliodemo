import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: '#' }
];

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen snap-start py-20 px-6 bg-lime-300 flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Doto, sans-serif" }}
          >
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>

          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.a
            href="mailto:hello@example.com"
            className="inline-block px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
