import { motion } from 'motion/react';
import { Code2, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time'
  },
  {
    icon: Palette,
    title: 'Design First',
    description: 'Creating beautiful interfaces with attention to every detail'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and delivering smooth user experiences'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Doto, sans-serif' }}
          >
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            I'm a passionate developer who loves bringing ideas to life through code. 
            With a focus on modern web technologies and user-centered design, I create 
            experiences that are both beautiful and functional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="p-8 bg-white rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
