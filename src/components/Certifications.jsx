const CERTS = [
  { title: 'AWS Certified Data Analytics', issued: 'Issued Oct 2022' },
  { title: 'Databricks Certified Associate', issued: 'Issued Mar 2021' }
]

const CertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Certifications() {
  return (
    <section id="certs">
      <div className="eyebrow">Certifications</div>
      <div className="card" style={{ padding: '4px 20px' }}>
        {CERTS.map(c => (
          <div className="cert-item" key={c.title}>
            <div className="cert-icon"><CertIcon /></div>
            <div>
              <h3>{c.title}</h3>
              <span>{c.issued}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
