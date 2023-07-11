import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'experience'
        },
        {
            id:4,
            link: 'projects'
        },
        {
            id:5,
            link: 'contact'
        },
    ];

  return (
    <div className='fixed z-50 flex items-center justify-between w-full h-20 px-4 text-white border-b-bb'>        
        <div>
            <h1 className='ml-2 text-5xl font-signature'>Oshadha</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className='menuLinks px-4 font-medium text-zinc-200 capitalize duration-200 cursor-pointer hover:scale-105'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='z-10 pr-4 text-zinc-200 cursor-pointer md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-zinc-200 bg-gradient-to-b from-purple-950 to to-fuchsia-950'>
            {links.map(({id, link}) => (
                    <li key={id} className='menuLinks px-4 py-6 text-4xl capitalize cursor-pointer'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default NavBar;