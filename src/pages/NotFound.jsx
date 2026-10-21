import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404</p>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="button button--solid button--sm">
        Back to home
      </Link>
    </section>
  )
}
