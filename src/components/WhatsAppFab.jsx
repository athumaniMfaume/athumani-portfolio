import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsAppFab = () => {
  const phone = '255627781186'
  const message = encodeURIComponent("Hi Athumani, I'd like to talk about a project.")
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat on WhatsApp'
      className='group fixed bottom-6 right-6 z-50 animate-floatY'
    >
      <span className='relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center'>
        {/* pulse rings */}
        <span className='absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-pulseRing'></span>
        <span className='absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40 animate-pulseRing [animation-delay:600ms]'></span>

        {/* main button */}
        <span className='relative inline-flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-[0_10px_30px_rgba(34,197,94,0.45)] ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-110'>
          <FaWhatsapp className='text-3xl md:text-4xl drop-shadow' />
        </span>
      </span>

      {/* tooltip */}
      <span className='pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900/90 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-0 hidden md:block'>
        Chat on WhatsApp
      </span>
    </a>
  )
}
