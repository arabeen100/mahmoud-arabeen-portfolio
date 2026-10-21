import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the URL hash target, or to the top when navigating to a new page. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
