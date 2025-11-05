"use client"

import { useState } from "react"

interface Project {
  name: string
  description: string
  tech: string[]
  live: string
  source: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const handleToggle = (projectName: string) => {
    setExpandedProject(expandedProject === projectName ? null : projectName)
  }

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">projects</h2>

      <div className="space-y-2">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.name
          return (
            <div key={project.name} className="border border-border rounded hover:bg-muted/50 transition-colors">
              <button
                onClick={() => handleToggle(project.name)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                aria-expanded={isExpanded}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
                  <span className="font-semibold text-base break-words sm:truncate">{project.name}</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-muted-foreground ml-4 flex-shrink-0 transition-transform duration-300">
                  <span className={`inline-block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    {isExpanded ? "−" : "+"}
                  </span>
                </span>
              </button>

              <div className={`project-content ${isExpanded ? 'expanded' : ''}`}>
                <div className="px-6 pb-4 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.live.startsWith('http') ? project.live : '#'}
                      target={project.live.startsWith('http') ? '_blank' : undefined}
                      rel={project.live.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="underline hover:text-muted-foreground transition"
                    >
                      View Live
                    </a>
                    <a
                      href={project.source.startsWith('http') ? project.source : '#'}
                      target={project.source.startsWith('http') ? '_blank' : undefined}
                      rel={project.source.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="underline hover:text-muted-foreground transition"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

