import React from 'react';
import aboutBg from '../assets/8251738_2201.jpg';
import { Parallax } from 'react-parallax';

const About = () => {
  return (
    <Parallax bgImage={aboutBg} strength={500}>
    <div name="about" className='w-full h-screen text-black'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>About</p>
            </div>
            <p className='mt-10 text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem debitis esse quis error voluptatem deserunt at ipsa. Ad, odio impedit quod excepturi, dolores ea consequuntur perferendis dolorum necessitatibus libero voluptatibus suscipit voluptates! Quasi inventore molestias corrupti harum earum, quidem repellat officiis nemo voluptas sunt repudiandae vitae. Inventore quam nisi rerum?
            </p>
            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde numquam sed voluptatibus, facere sit nihil vero non aliquam similique optio culpa laboriosam quis est ipsum. Voluptatum quasi facere molestias nemo est consequatur, necessitatibus neque nobis fugiat illum. Facilis iste earum officiis suscipit repellendus rerum, officia temporibus, quos, saepe eveniet perferendis!
            </p>
        </div>
    </div>
    </Parallax>
  )
}

export default About;