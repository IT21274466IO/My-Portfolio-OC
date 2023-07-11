import React from 'react';
import myImg from '../assets/myImg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { styles } from "../styles";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/resume.pdf'; // Specify the file path in the public folder
    downloadLink.download = 'resume.pdf'; // Specify the file name
    downloadLink.click();
  };

  return (
    <div name="home" className='w-full h-screen'>
      <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>

        <div className='flex flex-col justify-center h-full mt-60 md:mt-0'>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Oshadha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Undergraduate at SLIIT <br />
            BSc (Hons) in Information Technology
          </p>
              <TypeAnimation sequence={[
                  "I'm a Developer",
                  2000,
                  "I'm a Designer",
                  2000,
                  "I'm a Gamer",
                  2000,
                ]}
              speed={50} className='text-[#915EFE] font-bold text-[24px]' wrapper='span' repeat={Infinity}
            />

          <div className='mt-10'>
            <button
              className='downloadCVBtn flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'
              onClick={handleDownloadCV}
            >
              Download CV
              <span className='ml-2'>
                <FontAwesomeIcon icon={faDownload} size={25} className='ml-1' />
              </span>
            </button>
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
  );
};

export default Home;
