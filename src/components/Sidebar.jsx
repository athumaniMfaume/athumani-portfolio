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

const technicalSkills = [
  'Laravel & APIs',
  'React / Next.js',
  'Flutter',
  'JavaScript (ES6+) / TypeScript',
  'HTML, CSS, Tailwind',
  'MySQL, PostgreSQL, MongoDB',
  'Python & Django',
  'Java & Spring Boot',
  'Claude (Anthropic) API',
  'OpenAI GPT & Gemini',
  'Prompt Engineering & RAG',
  'Cloud (AWS, Azure)',
  'CI/CD',
  'Payment Integration',
]

const softSkills = [
  'Digital Marketing',
  'Communication',
  'Teamwork',
  'Adaptability',
  'Problem Solving',
  'Time Management',
  'Leadership',
  'Creativity',
]

export const Sidebar = () => {
  return (
    <aside className='hidden lg:block w-[340px] xl:w-[360px] shrink-0'>
      <div className='glass rounded-3xl p-6 sticky top-6 animate-fadeUp'>
        {/* Profile */}
        <div className='flex flex-col items-center text-center'>
          <div className='relative'>
            {/* glow halo */}
            <div className='absolute -inset-3 rounded-full bg-accent-gradient blur-2xl opacity-50 animate-gradientShift bg-[length:200%_200%]'></div>
            {/* gradient ring */}
            <div className='relative rounded-full p-[3px] bg-accent-gradient bg-[length:200%_200%] animate-gradientShift'>
              <img
                src={ath}
                alt='Athumani Mfaume'
                className='h-44 w-44 rounded-full object-cover object-top bg-ink-900 transition duration-500 hover:scale-[1.03]'
              />
            </div>
            {/* online badge */}
            <span className='absolute bottom-1 right-1 inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur px-2 py-0.5 text-[10px] font-semibold text-white border border-white/15'>
              <span className='h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse' />
              Online
            </span>
          </div>
          <h1 className='mt-5 text-2xl font-extrabold text-white tracking-tight'>
            Athumani Mfaume
          </h1>
          <span className='mt-2 inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-semibold text-accent-cyan'>
            Full Stack & AI Developer
          </span>
          <span className='mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan/15 to-accent-violet/15 border border-accent-cyan/30 px-3 py-1 text-xs font-semibold text-white'>
            <span className='h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse' />
            @ Moinfo Tech · since Jan 2026
          </span>
        </div>

        <div className='my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent'></div>

        {/* Contact */}
        <div className='space-y-4'>
          <InfoRow icon={<FaRegEnvelope />} label='EMAIL' value='athumanimfaume1995@gmail.com' />
          <InfoRow icon={<MdOutlinePhoneIphone />} label='PHONE' value='+255 627 781 186' />
          <InfoRow icon={<FaMapMarkerAlt />} label='LOCATION' value='Dar es Salaam, Tanzania' />
        </div>

        <div className='my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent'></div>

        {/* Technical Skills */}
        <div>
          <h3 className='text-sm font-bold text-white/80 uppercase tracking-wider mb-3'>
            Technical Skills
          </h3>
          <div className='flex flex-wrap gap-2'>
            {technicalSkills.map((skill) => (
              <span key={skill} className='chip'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className='mt-6'>
          <h3 className='text-sm font-bold text-white/80 uppercase tracking-wider mb-3'>
            Soft & Marketing Skills
          </h3>
          <div className='flex flex-wrap gap-2'>
            {softSkills.map((skill) => (
              <span key={skill} className='chip'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className='my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent'></div>

        {/* Socials */}
        <div>
          <h3 className='text-sm font-bold text-white/80 uppercase tracking-wider mb-3'>
            Connect With Me
          </h3>
          <div className='flex gap-3'>
            <SocialBtn
              href='https://www.linkedin.com/in/athumani-mfaume-jr-204bb81b0/'
              label='LinkedIn'
            >
              <FaLinkedin />
            </SocialBtn>
            <SocialBtn href='https://wa.me/255627781186' label='WhatsApp'>
              <FaWhatsapp />
            </SocialBtn>
            <SocialBtn href='https://github.com/athumaniMfaume' label='GitHub'>
              <FaGithub />
            </SocialBtn>
          </div>
        </div>
      </div>
    </aside>
  )
}

const InfoRow = ({ icon, label, value }) => (
  <div className='flex items-center gap-3'>
    <div className='h-10 w-10 shrink-0 rounded-xl grid place-items-center bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/10 text-accent-cyan text-lg'>
      {icon}
    </div>
    <div className='min-w-0'>
      <p className='text-[10px] font-bold text-white/60 tracking-widest'>{label}</p>
      <p className='text-sm font-medium text-white truncate'>{value}</p>
    </div>
  </div>
)

const SocialBtn = ({ href, children, label }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={label}
    className='h-11 w-11 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/80 text-xl transition-all hover:text-white hover:border-accent-cyan/60 hover:-translate-y-0.5 hover:shadow-glow'
  >
    {children}
  </a>
)
