import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'
import ThemeToggle from './ThemeToggle'
import './Header.css'

const links = [
  { label: 'Home', hash: '#home' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
]

export default function Header({ name }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to={{ pathname: '/', hash: '#home' }} className="header__brand" aria-label={`${name} — home`}>
          <BrandMark size={48} />
          <span className="header__name">{name}</span>
        </Link>
        <div className="header__right">
          <nav aria-label="Primary">
            <ul className="header__nav">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link to={{ pathname: '/', hash: link.hash }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <span className="header__progress" aria-hidden="true" />
    </header>
  )
}
