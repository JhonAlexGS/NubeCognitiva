import { useMemo, useState } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { LabCarousel } from './LabCarousel/LabCarousel'
import { LabModal } from './LabModal/LabModal'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Lab() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const items = content.items ?? []

  // Índice del proyecto abierto en el diálogo; `null` cuando está cerrado.
  const [abierto, setAbierto] = useState(null)

  if (items.length === 0) return null

  return (
    <Section id="lab">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <Reveal className="mt-12 lg:mt-16">
        <LabCarousel
          items={items}
          proposalLabel={content.proposalLabel}
          detailsLabel={content.detailsLabel}
          levelLabel={content.levelLabel}
          levels={content.levels ?? []}
          onOpen={setAbierto}
        />
      </Reveal>

      <LabModal
        project={
          abierto === null ? null : { ...items[abierto], skillsLabel: content.skillsLabel }
        }
        level={
          abierto === null
            ? null
            : (content.levels ?? []).find((n) => n.id === items[abierto].level)
        }
        levelLabel={content.levelLabel}
        open={abierto !== null}
        onClose={() => setAbierto(null)}
        proposalLabel={content.proposalLabel}
        defaultLinkLabel={content.defaultLinkLabel}
      />
    </Section>
  )
}
