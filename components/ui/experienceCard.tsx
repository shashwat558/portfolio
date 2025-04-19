import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

interface ExperienceCardProps {
  companyName: string;
  role: string;
  description: string;
  timeline: string;
  companyLogo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  role,
  description,
  timeline,
  companyLogo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center border border-yellow-300 bg-[#1a1a1a] text-green-300 rounded-md shadow-[2px_2px_0px_#888] hover:shadow-[3px_3px_0px_#00ffff] transition-shadow duration-300 shrink-0"
    >
      
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex-shrink-0 bg-black flex justify-center items-center border border-green-500 rounded-sm">
        <Image
          src={companyLogo}
          alt={`${companyName} logo`}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      
      <div className="flex flex-col gap-1 sm:gap-2 text-left">
        <h1 className="text-lg sm:text-xl font-bold text-pink-300">{companyName}</h1>
        <h2 className="text-base sm:text-lg font-semibold text-blue-300">Role: {role}</h2>
        <p className="text-sm sm:text-base font-mono text-green-200">{description}</p>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-yellow-300">
          <Calendar className="w-4 h-4" />
          <span>{timeline}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
