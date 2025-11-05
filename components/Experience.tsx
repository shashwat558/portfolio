interface ExperienceItem {
  period: string
  company: string
  role: string
  description: string
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="mb-20">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">experience</h2>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-muted pl-6">
            <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
            <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
            <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
            <p className="text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

