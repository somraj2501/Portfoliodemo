import { motion } from 'motion/react';
import { Mail, Github, Linkedin, SquareArrowOutUpRight } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', username: 'somraj2501' , href: 'https://github.com/somraj2501', accent: "hover:bg-[#1F883D]" },
  { icon: Linkedin, label: 'LinkedIn', username: 'somraj-' , href: 'https://www.linkedin.com/in/somraj-', accent: "hover:bg-[#0A66C2]" },
  { icon: Mail, label: 'Email', username: 'somraj2501@gmail.com' , href: 'mailto:somraj2501@gmail.com', accent: "hover:bg-[#D44637]" }
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
          transition={{ duration: 0.2 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Doto, sans-serif" }}
          >
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hi!
          </p>

          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`h-14 w-14 bg-white rounded-full flex items-center justify-start px-4 ${social.accent} hover:text-white transition-all duration-300 group hover:w-fit overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 shrink-0" />
                  <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 font-medium">
                    {social.username}
                  </span>
                  <div className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100">
                    <SquareArrowOutUpRight className="inline ml-2 w-4 h-4 shrink-0" />
                  </div>
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
