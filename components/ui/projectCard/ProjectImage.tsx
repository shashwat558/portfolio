import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectImageProps {
  projectName: string;
  projectImage: string;
  liveLink: string;
  githubLink: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  projectName,
  projectImage,
  liveLink,
  githubLink,
}) => {
  const imageVariants = {
    initial: { scale: 1.2, y: 0 },
    hover: { 
      scale: 1.15,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    }
  };

  const buttonContainerVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      className="relative aspect-[16/9] overflow-hidden rounded-t-xl"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <motion.div 
        className="absolute inset-0 w-full h-full transform-gpu"
        variants={imageVariants}
      >
        <img 
          src={projectImage}
          alt={projectName}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        variants={overlayVariants}
      >
        <motion.div 
          className="absolute inset-x-4 bottom-6 flex justify-center"
          variants={buttonContainerVariants}
        >
          <div className="flex gap-3">
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium
                bg-white text-gray-900 hover:bg-gray-50
                dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-700
                shadow-lg hover:shadow-xl transform-gpu
                transition-all duration-300
              "
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </motion.a>

            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium
                bg-gray-900 text-white hover:bg-gray-800
                dark:bg-zinc-700 dark:hover:bg-zinc-600
                shadow-lg hover:shadow-xl transform-gpu
                transition-all duration-300
              "
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={14} />
              <span>Code</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectImage;