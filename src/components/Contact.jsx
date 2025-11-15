import React, { useRef, useState } from 'react';
import { Navbar } from './Navbar';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccessMsg('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setSuccessMsg('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
      <Navbar />
      <div className='mt-7'>
        <h1 className='text-white font-bold text-3xl mb-2'>Contact Me</h1>
        <hr className='border-2 border-yellow-500 w-12 rounded-4xl' />

        {/* Google Maps */}
        <div className='mt-10'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9755938535945!2d39.227528373885214!3d-6.772824666229989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f3622b455b9%3A0x9326e77d0ec033af!2sMelian%20Software%20Company%20Limited!5e0!3m2!1sen!2stz!4v1763194889413!5m2!1sen!2stz'
            width='600'
            height='450'
            className='w-full rounded-2xl'
            loading='lazy'
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className='mt-10'>
          <h1 className='text-white font-bold text-2xl mb-2'>Contact Form</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className='grid grid-cols-2 gap-3 md:gap-7 my-7'>
              <input
                type='text'
                name='name' // match your template {{name}}
                placeholder='Full Name'
                className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'
                required
              />
              <input
                type='email'
                name='email' // match your template {{email}}
                placeholder='Email Address'
                className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'
                required
              />
            </div>

            <input
              type='text'
              name='subject' // match {{subject}}
              placeholder='Subject'
              className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full'
              required
            />

            <textarea
              name='message' // match {{message}}
              rows={4}
              placeholder='Your Message...'
              className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full mt-4'
              required
            ></textarea>

            {/* Hidden time field for {{time}} */}
            <input
              type='hidden'
              name='time'
              value={new Date().toLocaleString()}
            />

            {successMsg && <p className='text-green-400 mt-3'>{successMsg}</p>}

            <div className='flex justify-end mt-7'>
              <button
                type='submit'
                disabled={loading}
                className='flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer'
              >
                <FaPaperPlane /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


