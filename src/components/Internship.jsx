const ENTRIES = [
  {
    role: 'Full Stack Development Intern',
    year: 'Jan 2026',
    org: 'Elysian Intelligence Business Solution Pvt. Ltd.',
    desc: 'Completed a hands-on internship focused on full stack development, working through practical assignments with professionalism and a strong learning mindset.',
    doc: 'internship1.pdf'
  },
  {
    role: 'Python Full Stack Development Intern',
    year: 'Jul 2026',
    org: 'Elysian Intelligence Business Solution Pvt. Ltd.',
    desc: 'Completed a second internship at the same organization, this time focused on Python-based full stack development, building on foundational full stack skills.',
    doc: 'internship2.pdf'
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
            {e.doc && (
              <a href={e.doc} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ marginTop: '12px', display: 'inline-block', padding: '8px 14px' }}>
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
