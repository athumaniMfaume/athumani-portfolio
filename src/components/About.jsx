import React from 'react'
import { Navbar } from '../components/Navbar'
import athumani from '../assets/athumani.JPG'
import { services, testimonials } from './data'

export const About = () => {
  return (
    <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
      <Navbar />
      <div className='mt-7'>
        <h1 className='text-white font-bold text-3xl mb-2 '>About me</h1>
        <hr className="border-2 border-yellow-500 w-12 rounded-full" />
        <div className='mt-5 md:hidden'>
          <img src={athumani} alt="" className='bg-gray-700 rounded-2xl' />
        </div>
        <p className='mt-4 text-gray-300 text-xl font-semibold'>
           I’m Athumani Mfaume, a Full Stack Web & Mobile Developer skilled in Laravel,
            MERN Stack, Flutter, Python, and Spring Boot. I’ve gained practical experience at
             Boom Soft Tech and Melian Software, building scalable, user-focused systems.
            Passionate about problem-solving, clean code, and creating impactful digital solutions.
        </p>

        <p className="mt-2 text-gray-300 text-xl font-semibold">
            I thrive in collaborative environments, continuously learning and applying modern technologies
            to deliver efficient, elegant, and maintainable solutions. My goal is to create software
            that not only meets business requirements but also enhances the user experience and drives value.
        </p>
        {/* services's section */}
        <h1 className='text-2xl text-white font-bold mt-7'>What I'm Doing</h1>
        <div className='grid md:grid-cols-2 gap-6 mt-7'>
          {
            services.map((item, index) => {
              return <div className='bg-gray-700 border shadow p-5 text-white flex gap-5 items-start
              rounded-xl' key={index}>
                <div className='text-4xl text-yellow-500'>
                  <item.icon />
                </div>
                <div>
                  <h1 className='font-bold text-2xl'> {item.title} </h1>
                  <p className='text-xl text-gray-300'> {item.description} </p>
                </div>
              </div>
            })
          }
        </div>

        {/* testimonials section */}
        <h1 className='text-2xl text-white font-bold mt-7'> Testimonials </h1>
        <div className='flex flex-col md:flex-row gap-14 md:gap-7 mt-14'>
          {
            testimonials.map((item, index) => {
              return <div className='bg-gray-700 border border-white rounded-xl shadow py-4 px-6'
                     key={index}>
                      <div className='flex gap-5'>
                        <img src={item.image} alt={item.image}
                         className='h-20 w-20 bg-gray-800 rounded-2xl -mt-14 border-2
                         shadow-2xl border-gray-600' />
                         <div>
                              <h1 className='text-white font-bold text-xl'> {item.name} </h1>
                             <p>⭐⭐⭐⭐⭐</p>
                         </div>
                      </div>
                      <p className='text-gray-300 text-lg pr-6 mt-2'> {item.testimonial } </p>

                  

              </div>
            } )
          }
        </div>
    
      </div>
    </div>
  )
}
