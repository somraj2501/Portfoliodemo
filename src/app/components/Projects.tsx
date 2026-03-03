import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: '_indentify',
    description: 'An AI-powered code formatter that uses Google\'s Gemini API to detect, clean, and format messy code snippets instantly — with automatic language detection and snippet history.',
    image: `${import.meta.env.BASE_URL}/images/indentify_screenshot.png`,
    tags: ['React.js', 'Next.js', 'Gemini AI', 'MongoDB', 'Express', 'Tailwind'],
    link: 'https://indentify-app.vercel.app/'
  },
  {
    title: '_indentify',
    description: 'An AI-powered code formatter that uses Google\'s Gemini API to detect, clean, and format messy code snippets instantly — with automatic language detection and snippet history.',
    image: `${import.meta.env.BASE_URL}/images/indentify_screenshot.png`,
    tags: ['React.js', 'Next.js', 'Gemini AI', 'MongoDB', 'Express', 'Tailwind'],
    link: 'https://indentify-app.vercel.app/'
  },
  {
    title: '_indentify',
    description: 'An AI-powered code formatter that uses Google\'s Gemini API to detect, clean, and format messy code snippets instantly — with automatic language detection and snippet history.',
    image: `${import.meta.env.BASE_URL}/images/indentify_screenshot.png`,
    tags: ['React.js', 'Next.js', 'Gemini AI', 'MongoDB', 'Express', 'Tailwind'],
    link: 'https://indentify-app.vercel.app/'
  },
];

export function Projects() {
  return (
    <section
      id="work"
      className="flex items-center min-h-screen snap-start py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Doto, sans-serif" }}
          >
            Selected Work
          </h2>
          <p className="text-xl text-gray-600">
            A collection of projects I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
