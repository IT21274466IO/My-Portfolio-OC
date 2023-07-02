import React from 'react';
import CImg from '../assets/Complete-C-Programming.png';
import CppImg from '../assets/C-Language2.png';
import JavaImg from '../assets/javaP.jpeg';
import PyImg from '../assets/PyImg.png';
import ReactImg from '../assets/react.jpg';
import KotlinImg from '../assets/kotlin.webp';
import portBg from '../assets/portBg.jpg';
import { Parallax } from 'react-parallax';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CImg,
    },
    {
      id: 2,
      src: CppImg,
    },
    {
      id: 3,
      src: JavaImg,
    },
    {
      id: 4,
      src: PyImg,
    },
    {
      id: 5,
      src: ReactImg,
    },
    {
      id: 6,
      src: KotlinImg,
    },
  ];

  return (
    <Parallax bgImage={portBg} strength={500} className='bg-cover'>
    <div name="portfolio" className="w-full mt-20 text-black bg-cover" style={{backgroundSize:"cover"}}>
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img src={src} alt="" className="object-contain duration-200 rounded-md hover:scale-105" />
              <div className="flex items-center justify-center space-x-4">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Portfolio;
