import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TechTag from "../TechTags";

interface RetroProjectCardProps {
  projectName: string;
  description: string;
  techUsed: string[];
  projectImage: string;
  liveLink: string;
  githubLink: string;
}

const RetroProjectCard: React.FC<RetroProjectCardProps> = ({
  projectName,
  description,
  techUsed,
  projectImage,
  liveLink,
  githubLink,
}) => {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      y: -8,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  /* ─────────────────── Component ─────────────────── */
  return (
    <motion.div
      className="w-full max-w-sm h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className="
          relative z-10 flex flex-col p-6 h-full rounded-xl shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border
          bg-[#FFFBEB] border-[#F5EFD3]
          dark:bg-zinc-900 dark:border-zinc-800
          max-h-[30rem] 
        "
      >
        
        <motion.div
          className="relative aspect-[16/9] mb-6 overflow-hidden rounded-lg group"
          whileHover="hover"
        >
          <motion.img
            src={projectImage}
            alt={projectName}
            className="w-full h-full object-cover"
            variants={imageVariants}
          />

          
          <motion.div
            className="
              absolute inset-0 opacity-0
              bg-gradient-to-t from-black/70 via-black/20 to-transparent
              group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            <div className="absolute bottom-4 inset-x-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center gap-4"
              >
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-md
                    bg-white text-gray-900 hover:bg-gray-50
                    dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-700
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>

                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-md
                    bg-gray-900 text-white hover:bg-gray-800
                    dark:bg-zinc-700 dark:hover:bg-zinc-600
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  Code
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        
        <div className="flex flex-col flex-grow">
          <h3 className="mb-3 font-sora text-xl font-semibold text-gray-900 dark:text-gray-100">
            {projectName}
          </h3>

          <p className="mb-4 flex-grow font-inter leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
            {description}
          </p>

          {/* Tech tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {techUsed.map((tech, index) => (
              <TechTag key={index} tech={tech} />
            ))}
          </div>

          {/* Permanent links */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-zinc-800">
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink size={16} />
              View Live
            </motion.a>

            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <Github size={16} />
              Source Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RetroProjectCard;
