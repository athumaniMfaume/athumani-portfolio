import React from 'react'
import { Navbar } from './Navbar'
import { timeline } from './data'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export const Resume = () => {
  return (
    <div className='space-y-6 animate-fadeUp'>
      <Navbar />

      <section className='glass rounded-3xl p-6 md:p-10'>
        <h1 className='section-title'>Resume</h1>
        <p className='text-white/60 mt-4 max-w-2xl'>
          A timeline of my work experience — from IT support and software development to AI engineering and education.
        </p>

        <div className='mt-10'>
          <VerticalTimeline lineColor=''>
            {timeline.map((t, i) => {
              const contentStyle = {
                background: 'rgba(255,255,255,0.04)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                backdropFilter: 'blur(12px)',
              }
              const arrowStyle = {
                borderRight: '7px solid rgba(255,255,255,0.10)',
              }
              return (
                <VerticalTimelineElement
                  key={i}
                  className='vertical-timeline-element--work'
                  contentStyle={contentStyle}
                  contentArrowStyle={arrowStyle}
                  date={t.date}
                  dateClassName='!text-white/70 !font-semibold'
                  icon={t.icon}
                  iconStyle={t.iconStyle}
                >
                  <h3 className='text-lg md:text-xl font-bold text-white'>
                    {t.title}
                  </h3>
                  {t.subtitle && (
                    <h4 className='text-sm gradient-text font-semibold mb-2'>
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && (
                    <p className='text-white/75 whitespace-pre-line text-sm leading-relaxed'>
                      {t.desc}
                    </p>
                  )}
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </section>
    </div>
  )
}
