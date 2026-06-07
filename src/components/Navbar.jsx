import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi'
import logo from '../assets/logo.jpg'
import { ResponsiveMenu } from './ResponsiveMenu'

const links = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <>
      <div className='glass rounded-2xl px-4 md:px-6 py-3'>
        {/* Desktop */}
        <nav className='hidden md:flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='h-9 w-9 rounded-lg overflow-hidden ring-2 ring-accent-cyan/40'>
              <img src={logo} alt='logo' className='h-full w-full object-cover' />
            </div>
            <span className='font-extrabold text-white tracking-tight'>
              Athumani<span className='gradient-text'>.dev</span>
            </span>
          </div>
          <ul className='flex items-center gap-1'>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'text-white bg-white/5 border border-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className='absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-accent-gradient'></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Mobile */}
        <div className='flex md:hidden flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img
                src={logo}
                alt='logo'
                className='w-10 h-10 object-cover rounded-full ring-2 ring-accent-cyan/40'
              />
              <span className='font-extrabold text-white text-sm'>
                Athumani<span className='gradient-text'>.dev</span>
              </span>
            </div>
            <HiMenuAlt1
              className='text-accent-cyan w-9 h-9 cursor-pointer'
              onClick={() => setOpen(true)}
            />
          </div>
          <ul className='flex items-center gap-1 overflow-x-auto pb-0.5'>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'text-white bg-white/5 border border-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className='absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-accent-gradient'></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* Rendered outside glass to avoid backdrop-filter stacking context */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  )
}
