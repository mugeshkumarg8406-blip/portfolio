export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isLight}
      aria-label="Toggle light and dark theme"
      onClick={onToggle}
    >
      <span className="thumb">
        {isLight ? (
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor" />
          </svg>
        )}
      </span>
    </button>
  )
}
