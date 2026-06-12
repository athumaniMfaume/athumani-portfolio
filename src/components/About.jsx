import React from 'react'
import { Navbar } from './Navbar'
import ath from '../assets/ath.jpg'
import { services, testimonials } from './data'
import { FaArrowRight, FaDownload, FaQuoteLeft } from 'react-icons/fa'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '10+', label: 'Happy Clients' },
  { value: 'AI', label: 'Powered Workflows' },
]

export const About = () => {
  return (
    <div className='space-y-6 animate-fadeUp'>
      <Navbar />

      {/* Hero */}
      <section className='glass rounded-3xl p-6 md:p-10 overflow-hidden relative'>
        <div className='absolute -top-24 -right-24 w-72 h-72 bg-accent-violet/20 rounded-full blur-3xl' />
        <div className='absolute -bottom-24 -left-24 w-72 h-72 bg-accent-cyan/20 rounded-full blur-3xl' />

        <div className='relative grid md:grid-cols-[1fr_auto] gap-8 items-center'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-accent-cyan'>
              <span className='h-2 w-2 rounded-full bg-green-400 animate-pulse' />
              Available for hire
            </span>
            <h1 className='mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight'>
              Hi, I'm <span className='gradient-text'>Athumani Mfaume</span>
            </h1>
            <p className='mt-2 text-lg md:text-xl text-white/70 font-semibold'>
              Full Stack Web, Mobile & AI Developer · IT Support Specialist
            </p>
            <p className='mt-4 text-white/70 leading-relaxed max-w-2xl'>
              Currently at <span className='text-white font-semibold'>Moinfo Tech</span> (since Jan 2026),
              I build modern web and mobile applications powered by
              <span className='text-white font-semibold'> Claude AI</span>.
              I work across Laravel, MERN, Flutter, Python and Spring Boot, and
              integrate Claude, GPT and Gemini into real products. With a solid
              foundation in <span className='text-white font-semibold'>IT support</span> — hardware,
              networking, and help desk — I bring both the technical depth and
              end-user perspective to everything I build.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href='/contact'
                className='inline-flex items-center gap-2 rounded-xl bg-accent-gradient bg-[length:200%_200%] animate-gradientShift px-5 py-3 text-sm font-bold text-ink-950 shadow-glow hover:scale-[1.02] transition'
              >
                Hire me <FaArrowRight />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Athumani_Mfaume_CV.pdf`}
                download='Athumani_Mfaume_CV.pdf'
                className='group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-pink-500 to-rose-500 bg-[length:200%_200%] animate-gradientShift px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(244,114,182,0.45)] hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(244,114,182,0.6)] transition-all overflow-hidden'
              >
                <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700' />
                <FaDownload className='relative group-hover:-translate-y-0.5 transition-transform' />
                <span className='relative'>Download CV</span>
                <span className='relative ml-1 rounded-md bg-white/25 backdrop-blur px-1.5 py-0.5 text-[10px] font-extrabold tracking-widest'>
                  PDF
                </span>
              </a>

              <a
                href='/portfolio'
                className='inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition'
              >
                View Projects <FaArrowRight />
              </a>
            </div>
          </div>

          <div className='lg:hidden mx-auto relative'>
            <div className='absolute -inset-3 rounded-full bg-accent-gradient blur-2xl opacity-40 animate-gradientShift bg-[length:200%_200%]'></div>
            <div className='relative rounded-full p-[3px] bg-accent-gradient bg-[length:200%_200%] animate-gradientShift'>
              <img
                src={ath}
                alt='Athumani Mfaume'
                className='h-48 w-48 md:h-56 md:w-56 rounded-full object-cover object-top bg-ink-900'
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className='relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-3'>
          {stats.map((s) => (
            <div
              key={s.label}
              className='rounded-2xl bg-white/5 border border-white/10 p-4 text-center'
            >
              <p className='text-2xl md:text-3xl font-extrabold gradient-text'>
                {s.value}
              </p>
              <p className='text-xs md:text-sm text-white/60 mt-1'>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / What I'm doing */}
      <section className='glass rounded-3xl p-6 md:p-10'>
        <h2 className='section-title'>About Me</h2>
        <div className='mt-6 grid md:grid-cols-2 gap-6 text-white/75 leading-relaxed'>
          <p>
            I'm a developer and IT support specialist with hands-on experience
            at <span className='text-white font-semibold'>Boom Software Technology</span> (IT support),{' '}
            <span className='text-white font-semibold'>Melian Software</span>, and currently{' '}
            <span className='text-white font-semibold'>Moinfo Tech</span>, building production web
            and mobile systems from concept to deployment. My IT support background
            — hardware troubleshooting, networking, OS administration, and help desk —
            gives me a practical, user-first perspective that informs every solution I build.
          </p>
          <p>
            At Moinfo Tech I focus on AI-augmented engineering — building web
            and mobile apps powered by
            <span className='text-white font-semibold'> Claude AI</span>, and
            also integrating <span className='text-white font-semibold'>GPT</span>
            and <span className='text-white font-semibold'>Gemini</span> when
            needed. Whether it's a complex software system or a technical support
            challenge, I enjoy turning problems into clean, maintainable solutions.
          </p>
        </div>

        <h3 className='section-title text-xl md:text-2xl mt-12'>What I'm Doing</h3>
        <div className='mt-8 grid sm:grid-cols-2 gap-5'>
          {services.map((item, index) => (
            <div
              key={item.id}
              className='group rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-accent-cyan/60 hover:bg-white/[0.07] transition-all hover:-translate-y-1'
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className='flex gap-4 items-start'>
                <div className='h-14 w-14 shrink-0 grid place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/10 text-accent-cyan text-2xl group-hover:scale-110 transition'>
                  <item.icon />
                </div>
                <div>
                  <h4 className='font-bold text-white text-lg'>{item.title}</h4>
                  <p className='text-white/70 text-sm mt-1'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className='glass rounded-3xl p-6 md:p-10'>
        <h2 className='section-title'>Testimonials</h2>
        <div className='mt-10 grid md:grid-cols-2 gap-6'>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className='relative rounded-2xl bg-white/5 border border-white/10 p-6 pt-10'
            >
              <FaQuoteLeft className='absolute -top-3 left-6 text-3xl text-accent-cyan/70' />
              <p className='text-white/80 italic leading-relaxed'>
                "{item.testimonial}"
              </p>
              <div className='flex items-center gap-4 mt-5'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='h-14 w-14 rounded-full object-cover ring-2 ring-accent-cyan/40'
                />
                <div>
                  <p className='text-white font-bold'>{item.name}</p>
                  <p className='text-white/60 text-sm'>{item.role}</p>
                  <p className='text-amber-400 text-sm mt-0.5'>★★★★★</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
