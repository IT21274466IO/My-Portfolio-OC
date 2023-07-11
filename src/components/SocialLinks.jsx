import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:imanthaoshadha27@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) => (
                // eslint-disable-next-line no-useless-concat
                <li key={id} className={"flex items-center justify-between w-40 px-4 bg-cyan-800 h-14 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}>
                <a href={href} className='flex items-center justify-around w-full text-white' download={download} target='_blank' rel='noreferrer'>
                   {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks;