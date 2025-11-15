import React from 'react'
import { Navbar } from '../components/Navbar'
import { projects} from './data'
import { FaGithub } from 'react-icons/fa';


export const Portfolio = () => {
  return (
    <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
      <Navbar />
      <div className='mt-7'>
        <h1 className='text-white font-bold text-3xl mb-2'>Portfolio</h1>
        <hr className='border-2 border-yellow-500 w-10' />
        <div className='grid md:grid-cols-3 gap-6 mt-7'>
          {
            projects.map((project,index) => {
              return <div key={index}
               className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transform
               transition-transform hover:scale-105'>
                <img src={project.image} alt={project.image} 
                className='w-full h-40 object-cover px-3 pt-3 rounded-2xl'/>
                <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                  <p className='text-gray-300 mb-4'> {project.description} </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {
                      project.tags.map((tech,idx) => {
                        return <div key={idx} 
                        className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                      })
                    }
                  </div>
                  <div className='flex gap-3'>
                    <a className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg
                      shadow-md hover:bg-blue-600 transition-colors'
                      href={project.demo} target="_blank" rel="noopener noreferrer">Demo
                    </a>

                    <a className='flex gap-2 items-center bg-gray-900 text-white px-6 py-2 
                    rounded-lg shadow-md hover:bg-gray-900 transition-colors'
                      href={project.github} target="_blank" rel="noopener noreferrer">
                       <FaGithub/> Github
                    </a>

                  </div>
                </div>
               </div>

            })
          }
          
        </div>
      </div>

    </div>
  )
}
