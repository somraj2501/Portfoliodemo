import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with seamless checkout experience',
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MTkwMTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    title: 'Design System',
    description: 'Comprehensive component library for enterprise applications',
    image: 'https://images.unsplash.com/photo-1623932078839-44eb01fbee63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmt8ZW58MXx8fHwxNzcxOTA4OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Figma', 'React', 'Storybook']
  },
  {
    title: 'Portfolio Website',
    description: 'Minimalist portfolio showcasing creative work and projects',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzE5MDg5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Motion', 'CSS']
  }
];

export function Projects() {
  return (
    <section id="work" className="py-20 px-6">
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
            style={{ fontFamily: 'Doto, sans-serif' }}
          >
            Selected Work
          </h2>
          <p className="text-xl text-gray-600">
            A collection of projects I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
