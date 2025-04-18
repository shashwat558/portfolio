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
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  
  return (
    <div 
      className="retro-computer shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="retro-computer-header">
        <div className="retro-title">
          <span className="title-text">{projectName}</span>
        </div>
        <div className="retro-buttons">
          <button className="retro-button minimize">_</button>
          <button className="retro-button maximize">□</button>
          <button className="retro-button close">×</button>
        </div>
      </div>
      
      <div className="retro-computer-screen">
        <div className="crt-effect">
          <div className="screen-content">
            {showDescription ? (
              <div className="description-view">
                <div className="terminal-text">{description}</div>
                <div className="tech-section">
                  <div className="terminal-label">&gt; TECHNOLOGIES:</div>
                  <div className="tech-list">
                    {techUsed.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  className="view-toggle-btn"
                  onClick={() => setShowDescription(false)}
                >
                  &lt; BACK TO IMAGE
                </button>
              </div>
            ) : (
              <div className="image-view">
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