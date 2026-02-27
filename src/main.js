import './style.css'

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar')
const scrollThreshold = 60

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}, { passive: true })

// ===== SMOOTH SCROLL (LENIS) =====
// Initialize Lenis for buttery smooth page scrolling
const lenis = new Lenis({
  autoRaf: true,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

// Mobile menu logic removed since navigation links were removed from the UI

// ===== SCROLL REVEAL =====
// Add .js-ready to body so CSS can hide .reveal elements safely
document.body.classList.add('js-ready')

const revealElements = document.querySelectorAll('.reveal')

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.05,
    rootMargin: '0px 0px -10px 0px',
  }
)

// Observe all elements — IntersectionObserver fires immediately for those in viewport
revealElements.forEach((el) => revealObserver.observe(el))


// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href === '#') return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navH = navbar?.offsetHeight || 0
      lenis.scrollTo(target, { offset: -(navH + 16) })
    }
  })
})
