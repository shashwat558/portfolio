export default function ThingsICanDo() {
  const items = [
    "I can build scalable full stack apps",
    "I can build beautiful UIs",
    "I can build scalable frontends",
    "I can build AI agents",
    "I can integrate smart contracts",
    "I can code backends",
    "i can swim",
    "i can drown",
  ]

  return (
    <section id="things-i-can-do" className="mb-20">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">things i can do</h2>
      <ul className="space-y-2 text-sm leading-relaxed">
        {items.map((text, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-2 inline-block w-2 h-2 rounded-full bg-foreground/70" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
