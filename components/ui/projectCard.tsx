'use client';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Badge } from './badge';

const ProjectCard = ({ projectName, description, techUsed, projectImage, liveLink, githubLink }: {
  projectName: string,
  description: string,
  techUsed: string[],
  projectImage: string,
  liveLink: string,
  githubLink: string
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-card w-[380px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-3"
    >
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <Link href={liveLink} className="group">
            <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors p-1 rounded-md">
              {projectName}
            </h2>
          </Link>
          <div className="flex gap-2">
            <Link href={githubLink} target="_blank" className="hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </Link>
            <Link href={liveLink} target="_blank" className="hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {techUsed.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="relative rounded-md overflow-hidden group"
        whileHover="hover"
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={projectImage}
            alt={projectName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          variants={{
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center p-4"
        >
          <p className="text-white text-sm text-center">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
