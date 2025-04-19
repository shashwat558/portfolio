import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './RetroProjectCard.css';

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
  githubLink
}) => {
  // const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  
  return (
    <div 
      className="w-[300px] h-[300px] bg-[#5f5f5f] border-2 border-[var(--border-color)] rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.1)] m-4 overflow-hidden relative transition-transform duration-300 ease-in-out font-['VT323'] hover:translate-y-[-4px] shrink-0"
      
    >
      <div className="flex justify-between items-center bg-[#333333] px-2 py-1 border-b-2 border-[#222222]">
        <div className="text-white text-[16px] overflow-hidden whitespace-nowrap text-ellipsis flex-1">
          <span className="font-['VT323'] tracking-[1px]">{projectName}</span>
        </div>
        <div className="flex gap-1 ">
          <button className="w-4 h-4 text-[10px] flex items-center justify-center bg-[var(--button-color)] border border-[outset] text-black cursor-pointer p-0 minimize">_</button>
          <button className="w-4 h-4 text-[10px] flex items-center justify-center bg-[var(--button-color)] border border-[outset] text-black cursor-pointer p-0 maximize">□</button>
          <button className="w-4 h-4 text-[10px] flex items-center justify-center bg-[var(--button-color)] border border-[outset] text-black cursor-pointer p-0 close">×</button>
        </div>
      </div>
      
      <div className="bg-[var(--terminal-bg)] relative overflow-hidden h-[220px] border-[4px] border-[#444444] ">
        <div className="crt-effect absolute inset-0 overflow-hidden shadow-[inset_var(--screen-glow)]">
          <div className="relative h-full w-full overflow-hidden z-1">
            {showDescription ? (
              <div className="h-full p-3 flex flex-col overflow-y-auto text-[var(--terminal-text)]">
                <div className="font-['VT323'] text-[16px] leading-[1.4] mb-3">{description}</div>
                <div className="mt-2">
                  <div className="font-['VT323'] text-lg text-white mb-1">&gt; TECHNOLOGIES:</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {techUsed.map((tech, index) => (
                      <span key={index} className="bg-[rgba(255,176,0,0.2)] border border-[var(--terminal-text)] text-[var(--terminal-text)] text-[12px] px-1.5 py-0.5 rounded-xs font-['VT323']">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  className="font-['VT323'] bg-transparent border border-[var(--terminal-text)] text-[var(--terminal-text)] px-2 py-1 text-[14px] cursor-pointer mt-auto transition-all duration-200 ease-in-out self-center hover:bg-[#f0ca7a2a]"
                  onClick={() => setShowDescription(false)}
                >
                  &lt; BACK TO IMAGE
                </button>
              </div>
            ) : (
              <div className="h-full flex justify-center items-center">
                <div 
                  className="project-image" 
                  style={{ backgroundImage: `url(${projectImage})` }}
                >
                  <div className="image-overlay">
                    <button 
                      className="view-toggle-btn"
                      onClick={() => setShowDescription(true)}
                    >
                      VIEW DETAILS &gt;
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="retro-computer-footer">
        <div className="command-prompt">
          <span className="prompt-char">&gt;</span>
          <span className="blinking-cursor">_</span>
        </div>
        <div className="retro-actions">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="retro-action-btn"
            title="View on GitHub"
          >
            <Github className="retro-icon" />
            <span>SOURCE</span>
          </a>
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="retro-action-btn"
            title="View Live Project"
          >
            <ExternalLink className="retro-icon" />
            <span>DEMO</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RetroProjectCard;