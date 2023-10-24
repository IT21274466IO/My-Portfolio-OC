import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import axios from 'axios';


const Contact = () => {
  const handleFocus = () => {
    document.documentElement.classList.add('focus-visible');
  };

  const handleBlur = () => {
    document.documentElement.classList.remove('focus-visible');
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data, e) => {
    try {
      setSubmitting(true);
      await axios.post('https://getform.io/f/d1d8da26-72d9-4d0b-87b7-4e6fd2123aa8', data);
      console.log('Form submitted successfully');
      // Additional logic or success message

      // Redirect the user to the thank you page
      window.location.href = 'https://getform.io/thank-you?id=d1d8da26-72d9-4d0b-87b7-4e6fd2123aa8';
      // Reset the form fields
      e.target.reset();
      
      } catch (error) {
        console.error('Form submission error:', error);
        // Additional error handling or error message
      } finally {
        setSubmitting(false);
      }
      console.log(data);
  };

  return (
    <div className='flex w-full min-h-screen justify-center items-center' id='contact' name="contact">
      <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-tertiary w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white-100 overflow-hidden'>
        <div className='flex flex-col space-y-8 justify-between'>
          <div>
            <h1 className='font-bold text-4xl tracking-wide'>Contact Me</h1>
            <p className='pt-2 text-cyan-100 text-sm'>
            Thank you for visiting my website. If you have any questions or inquiries, feel free to get in touch with me by filling this form. I would be happy to assist you.
            </p>
          </div>
          <div className='flex flex-col space-y-6 '>
            <div className='inline-flex space-x-2 items-center myPhoneNumber'>
              <a className='inline-flex space-x-2 items-center ' href="tel:+94710640320">
              <FontAwesomeIcon icon={faPhone} className='text-teal-300 text-xl ' />
              <span>+94710640320</span>
              </a>
            </div>
            <div className='inline-flex space-x-2 items-center myEmailAddress'>
              <a className='inline-flex space-x-2 items-center' href="mailto:imanthaoshadha27@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className='text-teal-300 text-xl' />
              <span>imanthaoshadha27@gmail.com</span>
              </a>
            </div>
            <div className='inline-flex space-x-2 items-center myPyhAddress'>
              <a className='inline-flex space-x-2 items-center' href="https://www.google.com/maps/@7.2572022,80.3545341,20.99z?entry=ttu">
              <FontAwesomeIcon icon={faLocationDot} className='text-teal-300 text-xl' />
              <span>51/4/B/1, Diyatha Uyana, Siddamulla, Piliyandala</span>
              </a>
            </div>
          </div>
          <div className='flex space-x-6 text-3xl'>
            <a href='https://www.facebook.com/imantha.oshadha.3' className='myFBLink'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='https://instagram.com/im_oshadha?igshid=OGQ5ZDc2ODk2ZA==' className='myInstagramLink'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='https://www.linkedin.com/in/imantha-oshadha-037737280' className='myLinkedInLink'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/IT21274466IO' className='myGitHubLink'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='relative'>
          <div className='absolute z-0 w-40 h-40 bg-cyan-900 rounded-full -right-28 -top-28'></div>
          <div className='absolute z-0 w-40 h-40 bg-cyan-900 rounded-full -left-28 -bottom-16'></div>
          <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-96'>
            {submitting ? ( //Render preloader while submitting is true
                <div className='DotLoaderContact'>
                  <PulseLoader loading={true} size={50} color={'#107899'} />
                </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
              <div>
                <label htmlFor='name' className='text-sm'>
                  Your name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Your name'
                  {...register('name', { required: 'Name is required' })}
                  className={`ring-1 mt-2 border bg-white ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${errors.name ? 'ring-red-500' : ''}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
              </div>
              <div>
                <label htmlFor='email' className='text-sm'>
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Your email'
                  {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                  className={`ring-1 mt-2 border bg-white ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${errors.email ? 'ring-red-500' : ''}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor='message' className='text-sm'>
                  Message
                </label>
                <textarea
                  id='message'
                  rows='4'
                  placeholder='Type your message here'
                  {...register('message', { required: 'Message is required' })}
                  className={`ring-1 mt-2 border bg-white ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${errors.message ? 'ring-red-500' : ''}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {errors.message && <span className='text-red-500 text-sm'>{errors.message.message}</span>}
              </div>
              <button type='submit' className='mySendMessageBtn inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                Send Message
              </button>
            </form>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
