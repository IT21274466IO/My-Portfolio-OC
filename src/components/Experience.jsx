import React from 'react';
import htmlImg from '../assets/HTML5.png';
import cssImg from '../assets/CSS3_.png';
import jsImg from '../assets/jsLogo.png';
import phpImg from '../assets/PhpElephant.png';
import reactImg from '../assets/React-icon.png';
import mernStack from '../assets/MERN.webp';
import javaImg from '../assets/java.svg';
import pyImg from '../assets/Python.png';
import kotlinImg from '../assets/Kotlin.png';
import TailwindCSS from '../assets/Tailwind_CSS_Logo.png';
import sqlImg from '../assets/SQL_Academy.png';
import cppImg from '../assets/C++_Logo.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: htmlImg,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: cssImg,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: jsImg,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: phpImg,
      title: 'PHP',
      style: 'shadow-purple-500',
    },
    {
      id: 5,
      src: reactImg,
      title: 'REACT',
      style: 'shadow-blue-600',
    },
    {
      id: 6,
      src: mernStack,
      title: 'MERN Stack',
      style: 'shadow-green-500',
    },
    {
      id: 7,
      src: javaImg,
      title: 'JAVA',
      style: 'shadow-red-500',
    },
    {
      id: 8,
      src: pyImg,
      title: 'Python',
      style: 'shadow-yellow-400',
    },
    {
      id: 9,
      src: kotlinImg,
      title: 'Kotlin',
      style: 'shadow-orange-700',
    },
    {
      id: 10,
      src: TailwindCSS,
      title: 'Tailwind CSS',
      style: 'shadow-teal-500',
    },
    {
      id: 11,
      src: sqlImg,
      title: 'SQL',
      style: 'shadow-emerald-600',
    },
    {
      id: 12,
      src: cppImg,
      title: 'C++',
      style: 'shadow-cyan-800',
    },
  ];
  
  return (
    <div
      className="w-full h-cusH2 md:h-cusH "
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg bg- p-4 mx-auto text-white-100">
        <div>
          {/* <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p> */}
          <p className="py-6 text-2xl">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
