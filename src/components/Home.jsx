import React from 'react';
// import myImg from '../assets/myImg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { styles } from "../styles";
import meImg from '../assets/me.jpeg';
// import Imantha from '../assets/ImanthaatScienceday.jpeg';
// import axios from 'axios';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  // const [profilePicture, setProfilePicture] = useState('');

  // useEffect(() => {
  //   // Function to fetch profile picture from Instagram API
  //   const fetchProfilePicture = async () => {
  //     const accessToken = 'EAABrvNuKsIwBO2h8vZAWYuojZAXbpoS7ZBZCclb0h7jPP74ZCUU4jQuddhbo8oqYO9JX54iLjVBSnZCkNmyOh1LZCJZBZCeoQTiI1b0Vr5S2ZARitat0G5PCUMSZCiBFlBJjuMAOPwz9lHLru0ptmfc6dKZA7IW8Ddl3hTbVDLANun906zsNmrw3NksLfszSz7iNaRII0kZBAqQyPKZCejDvDDuHnZAEeCcCeg6roC68IktGT464wdWxppv3cMZBIpG9fgZDZD';
  //     const apiUrl = `https://graph.instagram.com/me/?fields=profile_picture&access_token=${accessToken}`;

  //     try {
  //       const response = await axios.get(apiUrl);
  //       setProfilePicture(response.data.profile_picture);
  //     } catch (error) {
  //       console.error('Error fetching profile picture:', error);
  //     }
  //   };

  //   fetchProfilePicture();
  // }, []);

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

        <div className='mt-28 mb-64 md:mb-0 md:mt-14'>
          {/* <img
            src={myImg}
            alt="My Pic"
            className='w-full mx-auto ml-0 md:w-max lg:w-1/3 xl:w-auto md:ml-8 rounded-2xl'
          /> */}
            <div className="cardMe">
              <div className="lines"></div>
              <div className="imgBx">
                  <img src={meImg} alt="Iam"/>
              </div>
              <div className="content">
                  <div className="details">
                      <h2>Imantha Oshadha<br/><span>Undergraduate</span></h2>
                      <div className="data">
                          <h3>5<br/><span>Projects</span></h3>
                          <h3>4<br/><span>Certificates</span></h3>
                          <h3>20<br/><span>Skills</span></h3>
                      </div>
                      <div className="actionBtn">
                          <a href="tel:+94710640320"><button className=''>Call</button></a>
                          <a href="#contact"><button className=''>Message</button></a>
                      </div>
                  </div>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
