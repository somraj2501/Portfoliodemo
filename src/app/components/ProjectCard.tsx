import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

export function ProjectCard({ title, description, image, tags, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"
        />
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          query={title}
        />
      </motion.div>

      <motion.h3
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-gray-600 mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
