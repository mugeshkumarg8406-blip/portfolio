const GROUPS = [
  { label: 'Languages', items: ['PYTHON', 'REACT', 'SQL'] },
  { label: 'DevOps', items: ['GIT'] }
]

export default function TechStack() {
  return (
    <section id="tech">
      <div className="eyebrow">Tech Stack</div>
      {GROUPS.map(g => (
        <div className="stack-group" key={g.label}>
          <div className="stack-label">{g.label}</div>
          <div className="pills">
            {g.items.map(item => (
              <span className="pill" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
