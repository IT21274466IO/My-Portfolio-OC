import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-54 h-54 object-contain rounded-lg'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const birthYear = 2000;
  const currentYear = new Date().getFullYear();
  const [age, setAge] = useState(currentYear - birthYear);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(currentYear - birthYear);
    }, 1000); // Update age every second

    return () => {
      clearInterval(interval);
    };
  }, [currentYear, birthYear]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a motivated and dedicated undergraduate student pursuing a BSc in Information Technology at SLIIT campus, Malabe. At {age} years old, I am a male passionate about front-end and back-end development. My primary focus lies in web development, and I possess solid skills in HTML, CSS, JavaScript, and other relevant technologies. I excel at transforming designs into fully functional and responsive websites, ensuring an optimal user experience.
        <br />I am committed to staying updated with the latest industry trends, constantly striving to deliver high-quality solutions that meet client requirements. As a self-motivated individual, I am eager to contribute my technical expertise and thrive in a collaborative team environment. With a strong work ethic and keen attention to detail, I am driven to excel in the field of Information Technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
