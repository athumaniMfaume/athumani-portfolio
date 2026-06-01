import React, { useRef, useState } from 'react'
import { Navbar } from './Navbar'
import {
  FaPaperPlane,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const WHATSAPP_NUMBER = '255627781186'

const buildWhatsAppUrl = ({ name, email, subject, message }) => {
  const text =
    `Hello Athumani, my name is *${name || '—'}*.\n\n` +
    `*Subject:* ${subject || '—'}\n` +
    `*Email:* ${email || '—'}\n\n` +
    `${message || ''}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [isError, setIsError] = useState(false)
  const [email, setEmail] = useState('')
  const [waUrl, setWaUrl] = useState('')

  const collectFormData = () => {
    if (!form.current) return {}
    const fd = new FormData(form.current)
    return {
      name: fd.get('name') || '',
      email: fd.get('email') || '',
      subject: fd.get('subject') || '',
      message: fd.get('message') || '',
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMsg('')
    setIsError(false)
    setWaUrl('')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          setSuccessMsg('Message sent successfully! I will get back to you soon.')
          form.current.reset()
          setEmail('')
        },
        () => {
          setLoading(false)
          setIsError(true)
          setSuccessMsg(
            "Couldn't send via email. You can send it directly on WhatsApp instead — your message is ready."
          )
          setWaUrl(buildWhatsAppUrl(collectFormData()))
        }
      )
  }

  const sendViaWhatsApp = (e) => {
    e.preventDefault()
    const data = collectFormData()
    if (!data.name || !data.email || !data.message) {
      setIsError(true)
      setSuccessMsg('Please fill in your name, email and message first.')
      return
    }
    window.open(buildWhatsAppUrl(data), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='space-y-6 animate-fadeUp'>
      <Navbar />

      <section className='glass rounded-3xl p-6 md:p-10'>
        <h1 className='section-title'>Contact Me</h1>
        <p className='text-white/60 mt-4 max-w-2xl'>
          Got a project, idea, or role in mind? Drop me a message — I usually
          reply within 24 hours.
        </p>

        {/* Quick contact cards */}
        <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <QuickCard
            icon={<FaRegEnvelope />}
            label='Email'
            value='athumanimfaume1995@gmail.com'
            href='mailto:athumanimfaume1995@gmail.com'
          />
          <QuickCard
            icon={<MdOutlinePhoneIphone />}
            label='Phone'
            value='+255 627 781 186'
            href='tel:+255627781186'
          />
          <QuickCard
            icon={<FaWhatsapp />}
            label='WhatsApp'
            value='Chat with me'
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
          />
          <QuickCard
            icon={<FaMapMarkerAlt />}
            label='Location'
            value='Dar es Salaam, Tanzania'
            href='#map'
          />
        </div>

        {/* Map - Dar es Salaam, Tanzania */}
        <div id='map' className='mt-10 rounded-2xl overflow-hidden border border-white/10'>
          <iframe
            title='Dar es Salaam, Tanzania'
            src='https://www.google.com/maps?q=Dar+es+Salaam,+Tanzania&z=12&output=embed'
            width='600'
            height='380'
            className='w-full grayscale-[40%] contrast-110'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          ></iframe>
        </div>

        {/* Form */}
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-1'>
            Send a Message
          </h2>
          <p className='text-white/60 text-sm mb-6'>
            Fill out the form — it goes straight to my inbox. Prefer WhatsApp?
            Use the green button after filling in the form.
          </p>

          <form ref={form} onSubmit={sendEmail} className='space-y-4'>
            <div className='grid md:grid-cols-2 gap-4'>
              <Input name='name' placeholder='Full Name' required />
              <Input
                name='email'
                type='email'
                placeholder='Email Address'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Input name='subject' placeholder='Subject' required />
            <Textarea name='message' rows={5} placeholder='Your message...' required />
            {/* hidden fields the EmailJS template can read */}
            <input type='hidden' name='reply_to' value={email} />
            <input type='hidden' name='to_email' value='athumanimfaume1995@gmail.com' />
            <input type='hidden' name='time' value={new Date().toLocaleString()} />

            {successMsg && (
              <div
                className={`text-sm rounded-xl px-4 py-3 border ${
                  isError
                    ? 'text-red-200 bg-red-500/10 border-red-500/30'
                    : 'text-green-200 bg-green-500/10 border-green-500/30'
                }`}
              >
                <p>{successMsg}</p>
                {isError && waUrl && (
                  <a
                    href={waUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-3 inline-flex items-center gap-2 rounded-lg bg-green-500 hover:bg-green-600 px-4 py-2 text-sm font-bold text-white transition'
                  >
                    <FaWhatsapp /> Send on WhatsApp
                  </a>
                )}
              </div>
            )}

            <div className='flex flex-col sm:flex-row justify-end gap-3'>
              <button
                type='button'
                onClick={sendViaWhatsApp}
                className='inline-flex justify-center gap-2 items-center rounded-xl bg-green-500 hover:bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] hover:scale-[1.02] transition'
              >
                <FaWhatsapp className='text-lg' /> Send via WhatsApp
              </button>
              <button
                type='submit'
                disabled={loading}
                className='inline-flex justify-center gap-2 items-center rounded-xl bg-accent-gradient bg-[length:200%_200%] animate-gradientShift px-6 py-3 text-sm font-bold text-ink-950 shadow-glow hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed'
              >
                <FaPaperPlane /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

const QuickCard = ({ icon, label, value, href }) => (
  <a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel='noopener noreferrer'
    className='group rounded-2xl bg-white/5 border border-white/10 p-5 flex items-start gap-3 hover:border-accent-cyan/60 hover:-translate-y-1 transition-all'
  >
    <div className='h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/10 text-accent-cyan text-xl group-hover:scale-110 transition'>
      {icon}
    </div>
    <div className='min-w-0'>
      <p className='text-[10px] font-bold text-white/60 tracking-widest uppercase'>
        {label}
      </p>
      <p className='text-sm font-semibold text-white truncate'>{value}</p>
    </div>
  </a>
)

const Input = (props) => (
  <input
    {...props}
    className='w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-cyan/60 focus:ring-2 focus:ring-accent-cyan/20 transition'
  />
)

const Textarea = (props) => (
  <textarea
    {...props}
    className='w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-cyan/60 focus:ring-2 focus:ring-accent-cyan/20 transition resize-y'
  />
)
