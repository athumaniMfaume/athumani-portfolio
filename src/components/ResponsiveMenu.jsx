import React from 'react'
import ath from '../assets/ath.jpg'
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { HiX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <>
      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[110] flex h-screen w-[82%] max-w-sm flex-col bg-[#080d1a] border-r border-white/10 px-5 pb-6 pt-6 md:hidden rounded-r-3xl shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className='absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-accent-cyan/60 transition'
          aria-label='Close menu'
        >
          <HiX className='w-5 h-5' />
        </button>

        {/* Profile */}
        <div className='flex flex-col items-center text-center'>
          <div className='relative w-36'>
            <div className='absolute -inset-2 rounded-full bg-accent-gradient blur-xl opacity-50 animate-gradientShift bg-[length:200%_200%]'></div>
            <div className='relative rounded-full p-[3px] bg-accent-gradient bg-[length:200%_200%] animate-gradientShift'>
              <img
                src={ath}
                alt='Athumani Mfaume'
                className='h-32 w-32 rounded-full object-cover object-top bg-ink-900'
              />
            </div>
          </div>
          <h1 className='text-white font-extrabold text-2xl mt-3'>
            Athumani Mfaume
          </h1>
          <span className='mt-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-sm font-semibold text-accent-cyan'>
            Full Stack & AI Developer
          </span>
          <span className='mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan/15 to-accent-violet/15 border border-accent-cyan/30 px-3 py-1 text-xs font-semibold text-white'>
            <span className='h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse' />
            @ Moinfo Tech · Jan 2026
          </span>
        </div>

        <div className='my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent' />

        {/* Nav */}
        <nav>
          <ul className='flex flex-col gap-1'>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold transition ${
                    isActive
                      ? 'text-white bg-white/10 border border-white/10'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className='my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent' />

        {/* Contact */}
        <div className='space-y-4'>
          <Row icon={<FaRegEnvelope />} label='EMAIL' value='athumanimfaume1995@gmail.com' />
          <Row icon={<MdOutlinePhoneIphone />} label='PHONE' value='+255 627 781 186' />
          <Row icon={<FaMapMarkerAlt />} label='LOCATION' value='Dar es Salaam, Tanzania' />
        </div>

        <div className='my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent' />

        {/* Socials */}
        <div className='flex gap-3'>
          <Soc href='https://www.linkedin.com/in/athumani-mfaume-jr-204bb81b0/'>
            <FaLinkedin />
          </Soc>
          <Soc href='https://wa.me/255627781186'>
            <FaWhatsapp />
          </Soc>
          <Soc href='https://github.com/athumaniMfaume'>
            <FaGithub />
          </Soc>
        </div>
      </div>
    </>
  )
}

const Row = ({ icon, label, value }) => (
  <div className='flex items-start gap-3'>
    <div className='h-10 w-10 shrink-0 rounded-xl grid place-items-center bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/10 text-accent-cyan text-lg'>
      {icon}
    </div>
    <div className='min-w-0'>
      <p className='text-[10px] font-bold text-white/60 tracking-widest'>{label}</p>
      <p className='text-sm font-medium text-white break-words'>{value}</p>
    </div>
  </div>
)

const Soc = ({ href, children }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='h-11 w-11 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/80 text-xl hover:text-white hover:border-accent-cyan/60 transition'
  >
    {children}
  </a>
)
