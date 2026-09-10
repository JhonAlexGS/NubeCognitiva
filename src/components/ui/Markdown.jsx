import ReactMarkdown from 'react-markdown'

/**
 * Renderiza el contenido de los archivos `.md` con el formato del design system.
 * Gracias a esto los `content.*.md` admiten **negritas**, [links](#) y listas.
 */
const COMPONENTS = {
  h1: ({ children }) => (
    <h2 className="nc-heading-gradient text-3xl font-semibold tracking-tight md:text-4xl">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink md:text-2xl">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="mt-6 text-base font-semibold tracking-tight text-ink">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-base leading-relaxed text-ink-muted md:text-lg">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  em: ({ children }) => <em className="text-ink-subtle not-italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer noopener' : undefined}
      className="font-medium text-accent underline decoration-line-accent underline-offset-4 transition-colors duration-200 hover:text-accent-bright hover:decoration-accent"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="grid gap-2.5">{children}</ul>,
  ol: ({ children }) => <ol className="grid list-decimal gap-2.5 pl-5">{children}</ol>,
  li: ({ children }) => (
    <li className="relative pl-6 text-base leading-relaxed text-ink-muted marker:text-accent">
      <span
        aria-hidden="true"
        className="absolute top-[0.6em] left-0 h-1.5 w-1.5 rounded-full bg-accent/70"
      />
      {children}
    </li>
  ),
  code: ({ children }) => (
    <code className="rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-line-accent pl-4 text-ink-subtle italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="nc-divider my-8 border-0" />,
}

export function Markdown({ children, className = '' }) {
  return (
    <div className={`grid gap-4 ${className}`}>
      <ReactMarkdown components={COMPONENTS}>{children}</ReactMarkdown>
    </div>
  )
}
