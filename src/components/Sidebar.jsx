import React from 'react'
import athumani from '../assets/athumani.jpg'
import { FaMapMarkerAlt, FaRegEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'

export const Sidebar = () => {
const technicalSkills = [
  "Laravel & APIs",
  "React",
  "Flutter",
  "JavaScript (ES6+)",
  "HTML, CSS, Tailwind",
  "MySQL, PostgreSQL, MongoDB",
  "Python & Django",
  "Java & Spring Boot",
  "AI / ML Basics",
  "Cloud (AWS, Azure)",
  "CI/CD",
  "Payment Integration",
  "IT Support"
];



  const softSkills = [
    "Digital Marketing",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Problem Solving",
    "Time Management",
    "Leadership",
    "Creativity"
  ];

  return (
    <div className='bg-gray-600 h-screen w-[350px] rounded-xl m-7 hidden md:block'>
      <div className='bg-gray-600 rounded-md p-4'>
        
        {/* Profile Image */}
        <div className="rounded-xl p-3 flex items-center justify-center">
          <img 
            src={athumani} 
            alt="athumani" 
            className="w-[200px] bg-gray-700 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Name */}
        <h1 className='text-white font-bold text-center text-3xl my-2'>
          Athumani Mfaume
        </h1>

        {/* Position */}
        <p className='text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7'>
          Full Stack Developer
        </p>

        <hr className="border-2 border-gray-700 mx-4" />

        {/* Contact Info */}
        <div className='mt-7 px-4 space-y-7'>
          {/* Email */}
          <div className='flex gap-3 items-center'>
            <div className='bg-gray-700 p-2 rounded-md shadow'>
              <FaRegEnvelope className='text-yellow-500 text-2xl' />
            </div>
            <div className='text-white'>
              <h1 className='font-semibold'>EMAIL</h1>
              <p className='text-gray-200'>athumanimfaume1995@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className='flex gap-3 items-center'>
            <div className='bg-gray-700 p-2 rounded-md shadow'>
              <MdOutlinePhoneIphone className='text-yellow-500 text-2xl' />
            </div>
            <div className='text-white'>
              <h1 className='font-semibold'>PHONE</h1>
              <p className='text-gray-200'>+255 627 781 186</p>
            </div>
          </div>

          {/* Location */}
          <div className='flex gap-3 items-center'>
            <div className='bg-gray-700 p-2 rounded-md shadow'>
              <FaMapMarkerAlt className='text-yellow-500 text-2xl' />
            </div>
            <div className='text-white'>
              <h1 className='font-semibold'>LOCATION</h1>
              <p className='text-gray-200'>Dar es salaam, Tanzania</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-10 px-4">
          <h1 className="text-white font-bold text-lg mb-4">Technical Skills</h1>
          <ul className="flex flex-wrap gap-2">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="bg-gray-700 text-yellow-500 px-3 py-1 rounded-md text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="mt-6 px-4">
          <h1 className="text-white font-bold text-lg mb-4">Soft & Marketing Skills</h1>
          <ul className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <li key={index} className="bg-gray-700 text-yellow-500 px-3 py-1 rounded-md text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="mt-10 px-4">
          <h1 className="text-white font-bold text-lg mb-4">Connect With Me</h1>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/athumani-mfaume-jr-204bb81b0/" 
              target="_blank"
              className="bg-gray-700 p-3 rounded-lg shadow text-yellow-500 text-2xl hover:bg-gray-500 transition"
            >
              <FaLinkedin />
            </a>

            <a 
              href="https://wa.me/255627781186"
              target="_blank"
              className="bg-gray-700 p-3 rounded-lg shadow text-yellow-500 text-2xl hover:bg-gray-500 transition"
            >
              <FaWhatsapp />
            </a>

            <a 
              href="https://github.com/athumaniMfaume"
              target="_blank"
              className="bg-gray-700 p-3 rounded-lg shadow text-yellow-500 text-2xl hover:bg-gray-500 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}



