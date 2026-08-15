import ThemeToggle from './ThemeToggle.jsx'

export default function TopBar({ theme, onToggleTheme }) {
  return (
    <div className="topbar">
      <div className="mark"><b>MK</b> / PORTFOLIO</div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div>
  )
}
