import React from 'react';
import myImg from '../assets/myImg.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import HomeBg from '../assets/hopeBg.jpg';
import { Parallax } from 'react-parallax';

const Home = () => {
  return (
    <Parallax bgImage={HomeBg} strength={500} className='bg-center bg-cover'>
    <div name="home" className='w-full h-screen mt-20'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full mt-60 md:mt-0'>
                <h2 className='text-4xl font-bold text-black sm:text-7xl'>I'm a Full Stack Developer</h2>
                <p className='max-w-md py-4 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempora ratione accusamus optio earum delectus nam porro, provident at placeat.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={700} className='flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                        <span className='duration-300 group-hover:rotate-90'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
                    </Link>
                </div>

            </div>

            <div className='mt-10 mb-64 md:mb-0 md:mt-0'>
                <img
                    src={myImg}
                    alt="My Pic"
                    className='w-full mx-auto ml-0 md:w-max lg:w-1/3 xl:w-auto md:ml-8 rounded-2xl'
                />
            </div>

        </div>
    </div>
    </Parallax>
  )
};

export default Home;
