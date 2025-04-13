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
      className="w-full p-3 flex gap-4 items-start"
    >
      {/* Logo */}
      <div className="w-32 h-32 relative flex-shrink-0 bg-gray-900 flex justify-center items-center rounded-lg">
        <Image
          src={companyLogo}
          alt={`${companyName} logo`}
          width={150}
          height={150}
          className="object-contain rounded-md"
        />
      </div>

      
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">{companyName}</h1>
        <h2 className="text-lg font-medium ">Role: {role}</h2>
        <p className="text-md dark:text-gray-400">{description}</p>
        <div className="flex items-center gap-1 text-sm dark:text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{timeline}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

