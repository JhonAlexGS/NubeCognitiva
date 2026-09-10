import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../../../components/ui/Button'
import { ICONS } from '../../../components/ui/icons'
import { EASE_EXPO } from '../../../lib/motion'
import { hasContactEndpoint, sendContactMessage } from '../../../lib/sendContactMessage'

/**
 * Sub-componente de «Contacto»: no tiene contenido propio.
 * Recibe en `copy` el contenido de `Contact/form.<idioma>.yaml`, incluidos los
 * mensajes de validación, que se inyectan en el esquema de Zod.
 */

const FIELD_CLASSES =
  'w-full rounded-lg border border-line bg-canvas-elevated px-4 py-3 text-sm text-ink ' +
  'placeholder:text-ink-subtle transition-colors duration-200 ' +
  'hover:border-line-hover focus:border-accent focus:outline-none'

export function ContactForm({ copy }) {
  const [status, setStatus] = useState('idle') // idle | success | error
  const fields = useMemo(() => copy.fields ?? {}, [copy.fields])

  const schema = useMemo(
    () =>
      z.object({
        name: z
          .string({ error: fields.name?.required })
          .trim()
          .min(1, { error: fields.name?.required })
          .min(2, { error: fields.name?.min }),
        email: z
          .string({ error: fields.email?.required })
          .trim()
          .min(1, { error: fields.email?.required })
          .pipe(z.email({ error: fields.email?.invalid })),
        message: z
          .string({ error: fields.message?.required })
          .trim()
          .min(1, { error: fields.message?.required })
          .min(10, { error: fields.message?.min })
          .max(1500, { error: fields.message?.max }),
      }),
    [fields],
  )

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: { name: '', email: '', message: '' },
  })

  // Al cambiar de idioma limpiamos los errores: se volverán a mostrar en el
  // nuevo idioma en la siguiente validación, en vez de quedarse en el anterior.
  useEffect(() => {
    clearErrors()
  }, [schema, clearErrors])

  const onSubmit = async (values) => {
    try {
      await sendContactMessage(values)
      setStatus('success')
      reset()
    } catch (error) {
      // Sólo mostramos el estado de error cuando el envío falla de verdad.
      console.error('[contacto] fallo al enviar el formulario', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: EASE_EXPO }}
        role="status"
        className="nc-card flex flex-col items-start gap-4 p-8"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full border border-line-accent bg-accent/10 text-accent">
          <ICONS.check aria-hidden="true" className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{copy.success?.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{copy.success?.body}</p>
        <Button variant="secondary" onClick={() => setStatus('idle')}>
          {copy.success?.again}
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="nc-card flex flex-col gap-5 p-6 md:p-8"
    >
      <h3 className="text-xl font-semibold tracking-tight text-ink">{copy.title}</h3>

      {/* Nombre */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-ink">
          {fields.name?.label}
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder={fields.name?.placeholder}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={FIELD_CLASSES}
          {...register('name')}
        />
        <FieldError id="contact-name-error" message={errors.name?.message} />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-ink">
          {fields.email?.label}
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder={fields.email?.placeholder}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={FIELD_CLASSES}
          {...register('email')}
        />
        <FieldError id="contact-email-error" message={errors.email?.message} />
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">
          {fields.message?.label}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder={fields.message?.placeholder}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${FIELD_CLASSES} nc-scroll-area resize-y`}
          {...register('message')}
        />
        <FieldError id="contact-message-error" message={errors.message?.message} />
      </div>

      {/* Error de envío (sólo si ocurre) */}
      <AnimatePresence>
        {status === 'error' ? (
          <motion.div
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE_EXPO }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <ICONS.alert aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-ink">{copy.error?.title}</p>
                <p className="text-sm leading-relaxed text-ink-muted">{copy.error?.body}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <ICONS.loader aria-hidden="true" className="h-4 w-4 animate-spin" />
              {copy.submitting}
            </>
          ) : (
            <>
              {status === 'error' ? copy.error?.retry : copy.submit}
              <ICONS.email aria-hidden="true" className="h-4 w-4" />
            </>
          )}
        </Button>

        {!hasContactEndpoint ? (
          <p className="text-xs leading-relaxed text-ink-subtle">{copy.mailtoNotice}</p>
        ) : null}
      </div>
    </form>
  )
}

function FieldError({ id, message }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.p
          id={id}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: EASE_EXPO }}
          className="text-xs text-red-400"
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  )
}
