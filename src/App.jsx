import { lazy, Suspense } from 'react'
import { AmbientBackground } from './components/AmbientBackground/AmbientBackground'
import { BackToTop } from './components/BackToTop/BackToTop'
import { SectionErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { ResumeDownload } from './components/ResumeDownload/ResumeDownload'
import Hero from './sections/Hero/Hero'

// El hero se carga con la página; el resto se divide en chunks (code splitting)
// para que la primera pintura sea lo más ligera posible.
const About = lazy(() => import('./sections/About/About'))
const Experience = lazy(() => import('./sections/Experience/Experience'))
const Projects = lazy(() => import('./sections/Projects/Projects'))
const Lab = lazy(() => import('./sections/Lab/Lab'))
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
          <Experience />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Lab />
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

      {/* Los dos se posicionan solos y se reparten las esquinas: «volver
          arriba» ocupa la inferior derecha en cuanto aparece, y la hoja de vida
          se traslada entonces a la superior derecha. */}
      <ResumeDownload />
      <BackToTop />
    </>
  )
}
