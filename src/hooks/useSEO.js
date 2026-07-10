import { useEffect } from 'react'

const SITE_NAME = 'J&G Design Group'
const BASE_TITLE = `${SITE_NAME} | Kitchen, Bathroom & Laundry Renovations Melbourne`

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Sets the page title, meta description and social tags.
 * @param {string} title  Page title (without brand suffix)
 * @param {string} description  Meta description
 */
export default function useSEO(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : BASE_TITLE
    document.title = fullTitle

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
    setMeta('property', 'og:title', fullTitle)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)

    // reflect current path in canonical + og:url
    const url = window.location.origin + window.location.pathname
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
    setMeta('property', 'og:url', url)
  }, [title, description])
}
