import { motion } from "framer-motion";

interface TechTagProps {
  tech: string;
}

const TechTag: React.FC<TechTagProps> = ({ tech }) => {
  return (
    <motion.span
      className="
        inline-flex items-center rounded-full px-3 py-1
        text-sm font-medium
        bg-indigo-50 text-indigo-700
        dark:bg-indigo-400/10 dark:text-indigo-200
        ring-1 ring-inset ring-indigo-200
        dark:ring-indigo-400/30
      "
      whileHover={{ scale: 1.05, boxShadow: "0 0 0 2px rgba(99,102,241,0.4)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      {tech}
    </motion.span>
  );
};

export default TechTag;
