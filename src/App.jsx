import { lazy, Suspense } from 'react'
import { AmbientBackground } from './components/AmbientBackground/AmbientBackground'
import { BackToTop } from './components/BackToTop/BackToTop'
import { SectionErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'

// El hero se carga con la página; el resto se divide en chunks (code splitting)
// para que la primera pintura sea lo más ligera posible.
const About = lazy(() => import('./sections/About/About'))
const Projects = lazy(() => import('./sections/Projects/Projects'))
const Skills = lazy(() => import('./sections/Skills/Skills'))
const Education = lazy(() => import('./sections/Education/Education'))
const Testimonials = lazy(() => import('./sections/Testimonials/Testimonials'))
const Contact = lazy(() => import('./sections/Contact/Contact'))

/** Reserva el alto de la sección mientras llega su chunk (evita saltos). */
function SectionFallback() {
  return <div aria-hidden="true" className="min-h-[60vh]" />
}

function LazySection({ children }) {
  return (
    <SectionErrorBoundary>
      <Suspense fallback={<SectionFallback />}>{children}</Suspense>
    </SectionErrorBoundary>
  )
}

export default function App() {
  return (
    <>
      <AmbientBackground />
      <Navbar />

      <main id="main">
        <SectionErrorBoundary>
          <Hero />
        </SectionErrorBoundary>

        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Education />
        </LazySection>
        <LazySection>
          <Testimonials />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
