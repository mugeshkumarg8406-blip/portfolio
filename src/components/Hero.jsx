import profilePhoto from '../assets/mugeshkumar.jpeg'

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'www.linkedin.com/in/mugesh-kumar-g-824b8632b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-3.7c0-1.5 1-2.3 2.2-2.3 1.2 0 1.8.8 1.8 2.3v3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/mugeshkumarg8406-blip',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.71 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" /></svg>
    )
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919345742580',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 0 0-7.79 13.5L3 21l4.65-1.19A9 9 0 1 0 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8.5 8.8c.15-.4.3-.55.6-.55h.5c.25 0 .4.1.5.4.15.4.5 1.3.55 1.4.05.1.08.23 0 .38-.08.15-.12.25-.25.38-.12.13-.26.3-.37.4-.12.12-.25.25-.1.5.15.25.65 1.05 1.4 1.7.95.85 1.75 1.1 2 1.25.25.13.4.1.55-.05.15-.15.6-.7.75-.95.15-.25.3-.2.5-.13.2.08 1.3.6 1.5.72.2.1.35.15.4.25.05.13.05.7-.2 1.35-.25.65-1.4 1.2-1.95 1.28-.5.08-1.1.1-1.8-.1a15.5 15.5 0 0 1-1.6-.6c-2.5-1.1-4.1-3.5-4.25-3.7-.13-.2-1.05-1.4-1.05-2.65 0-1.25.65-1.85.88-2.1z" fill="currentColor" /></svg>
    )
  }
]

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="hero-text">
        <p className="greeting">Hi, I'm</p>
        <h1>MUGESHKUMAR <span>G</span></h1>
        <div className="role">AI &amp; Full Stack Developer</div>
        <div className="hero-actions">
          <a href="/resume.pdf" className="btn btn-solid" download>Resume</a>
          <a href="#projects" className="btn btn-ghost">View Work</a>
        </div>
        <div className="hero-socials">
          {SOCIALS.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="hero-photo">
        <img src={profilePhoto} alt="Mugeshkumar G" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  )
}
