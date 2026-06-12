import React, { useMemo, useState } from 'react'
import { Navbar } from './Navbar'
import { projects } from './data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const allTagsFrom = (items) => {
  const set = new Set()
  items.forEach((p) => p.tags.forEach((t) => set.add(t)))
  return ['All', ...Array.from(set).sort()]
}

export const Portfolio = () => {
  const tags = useMemo(() => allTagsFrom(projects), [])
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(active))

  return (
    <div className='space-y-6 animate-fadeUp'>
      <Navbar />

      <section className='glass rounded-3xl p-6 md:p-10'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
          <div>
            <h1 className='section-title'>Portfolio</h1>
            <p className='text-white/60 mt-4 max-w-2xl'>
              A selection of full stack, mobile, AI-integrated and IT support projects I've built and delivered.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className='mt-8 flex flex-wrap gap-2'>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition ${
                active === t
                  ? 'bg-accent-gradient text-ink-950 border-transparent shadow-glow'
                  : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-accent-cyan/60'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className='mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-6'>
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className='group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex flex-col hover:border-accent-cyan/60 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow'
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent' />
              </div>
              <div className='p-5 flex-1 flex flex-col'>
                <h3 className='text-lg font-bold text-white leading-snug'>
                  {project.title}
                </h3>
                <p className='text-white/65 text-sm mt-2 line-clamp-3 flex-1'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1.5 mt-4'>
                  {project.tags.slice(0, 5).map((t, i) => (
                    <span
                      key={i}
                      className='px-2 py-0.5 text-[11px] font-medium rounded-full bg-white/5 border border-white/10 text-white/70'
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className='mt-5 flex gap-2'>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gradient bg-[length:200%_200%] animate-gradientShift px-4 py-2 text-sm font-bold text-ink-950 hover:scale-[1.02] transition'
                    >
                      <FaExternalLinkAlt className='text-xs' /> Live Demo
                    </a>
                  ) : (
                    <span className='flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-white/40 cursor-not-allowed'>
                      Coming Soon
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition'
                      aria-label='GitHub source'
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className='mt-10 text-center text-white/60'>
            No projects match this filter.
          </p>
        )}
      </section>
    </div>
  )
}
