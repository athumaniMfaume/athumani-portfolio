import React from 'react'
import athumani from '../assets/athumani.jpg'
import { FaMapMarkerAlt, FaRegEnvelope } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-4 pb-6 pt-6 text-black md:hidden rounded-r-xl shadow-md transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}
    >
      <div className="bg-gray-600 rounded-md p-4 flex-shrink-0">
        <div className="rounded-xl p-3 flex items-center justify-center">
          <img
            src={athumani}
            alt="athumani"
            className="w-[200px] bg-gray-700 rounded-full object-cover shadow-md"
          />
        </div>
        <h1 className="text-white font-bold text-center text-3xl my-2">
          Athumani Mfaume
        </h1>
        <p className="text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7">
          Full Stack Developer
        </p>
        <hr className="border-gray-700 mx-4 border-2" />
      </div>

      <nav className="mt-5 flex-shrink-0">
        <ul className="flex flex-col text-center gap-2 items-center justify-center text-white text-2xl font-semibold">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-500' : 'text-white'} cursor-pointer`
            }
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/resume"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-500' : 'text-white'} cursor-pointer`
            }
          >
            <li>Resume</li>
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-500' : 'text-white'} cursor-pointer`
            }
          >
            <li>Portfolio</li>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-500' : 'text-white'} cursor-pointer`
            }
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>

      {/* Contact info */}
      <div className="mt-7 px-4 space-y-7 flex-shrink-0">
        <div className="flex gap-3 items-start">
          <div className="bg-gray-700 p-2 rounded-md shadow shrink-0">
            <FaRegEnvelope className="text-yellow-500 text-2xl" />
          </div>
          <div className="text-white break-words">
            <h1 className="font-semibold">EMAIL</h1>
            <p className="text-gray-200 break-words">
              athumanimfaume1995@gmail.com
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="bg-gray-700 p-2 rounded-md shadow shrink-0">
            <MdOutlinePhoneIphone className="text-yellow-500 text-2xl" />
          </div>
          <div className="text-white break-words">
            <h1 className="font-semibold">PHONE</h1>
            <p className="text-gray-200">+255 627 781 186</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="bg-gray-700 p-2 rounded-md shadow shrink-0">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
          </div>
          <div className="text-white break-words">
            <h1 className="font-semibold">LOCATION</h1>
            <p className="text-gray-200">Dar es Salaam, Tanzania</p>
          </div>
        </div>
      </div>
    </div>
  )
}
