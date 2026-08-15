const ENTRIES = [
  {
    role: 'Backend Developer Intern',
    year: '2023—2024',
    org: 'Tech Startup Inc.',
    desc: 'Developed RESTful APIs using Python and Django, improving data retrieval times by 20%. Assisted in migrating local services to AWS.'
  }
]

export default function Internship() {
  return (
    <section id="internship">
      <div className="eyebrow">Internship</div>
      <div className="card" style={{ padding: '6px 20px' }}>
        {ENTRIES.map(e => (
          <div className="tl-item" key={e.role}>
            <div className="tl-head">
              <h3>{e.role}</h3>
              <span className="tl-year">{e.year}</span>
            </div>
            <div className="tl-org">{e.org}</div>
            <p className="tl-desc">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
