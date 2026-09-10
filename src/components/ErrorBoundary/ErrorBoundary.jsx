import { Component } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { ICONS } from '../ui/icons'

/**
 * Aísla el fallo de una sección para que no tumbe la página completa.
 * Sólo pinta algo cuando ocurre un error real.
 */
class Boundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[sección] error al renderizar', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    const { copy } = this.props

    return (
      <section className="nc-container py-16">
        <div className="nc-card flex flex-col items-start gap-4 p-8">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-accent">
            <ICONS.alert aria-hidden="true" className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-ink">{copy.title}</h2>
          <p className="text-sm leading-relaxed text-ink-muted">{copy.body}</p>
          <Button variant="secondary" onClick={() => this.setState({ hasError: false })}>
            {copy.retry}
          </Button>
        </div>
      </section>
    )
  }
}

export function SectionErrorBoundary({ children }) {
  const { t } = useTranslation()

  return (
    <Boundary
      copy={{
        title: t('errors.sectionTitle'),
        body: t('errors.sectionBody'),
        retry: t('errors.retry'),
      }}
    >
      {children}
    </Boundary>
  )
}
