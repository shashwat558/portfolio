export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">technical skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Frontend</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Next.js & React</li>
            <li>• TypeScript</li>
            <li>• Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Backend</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Node.js & Python</li>
            <li>• PostgreSQL</li>
            <li>• Redis & Caching</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">DevOps</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Docker & Kubernetes</li>
            <li>• CI/CD Pipelines</li>
            <li>• Cloud Infrastructure</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Tools & Platforms</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Git & GitHub</li>
            <li>• AWS & Vercel</li>
            <li>• Linux & Command Line</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

