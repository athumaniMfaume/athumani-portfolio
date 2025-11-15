import React from 'react';
import { Navbar } from './Navbar';
import { timeline } from './data';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Resume = () => {
  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7">
      <Navbar />
      <div className="mt-7">
        <h1 className="text-white font-bold text-3xl mb-2">Resume</h1>
        <hr className="border-2 border-yellow-500 w-14 mb-7" />

        <VerticalTimeline>
          {timeline.map((t, i) => {
            const isCurrentJob = i === 0; // highlight current job
            const contentStyle = isCurrentJob
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : { background: 'rgb(55, 65, 81)', color: '#fff' }; // slightly darker for past
            const arrowStyle = isCurrentJob
              ? { borderRight: '7px solid rgb(33, 150, 243)' }
              : { borderRight: '7px solid rgb(55, 65, 81)' };

            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={arrowStyle}
                date={t.date}
                icon={t.icon}
                iconStyle={t.iconStyle}
              >
                <h3 className="vertical-timeline-element-title text-lg font-semibold">
                  {t.title}
                </h3>
                {t.subtitle && (
                  <h4 className="vertical-timeline-element-subtitle text-sm text-gray-200 mb-2">
                    {t.subtitle}
                  </h4>
                )}
                {t.desc && (
                  <p className="text-gray-100 whitespace-pre-line text-sm leading-relaxed">
                    {t.desc}
                  </p>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

