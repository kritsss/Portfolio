"use client";
import React from 'react'
import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";

import Link from '../../node_modules/next/link';

import {motion} from "framer-motion";

function SocialIcons() {
    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://github.com/kritsss"},
        { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/kritsss/"},
        { name: "Instagram", icon: <FiInstagram />, link: "https://www.instagram.com/_____kritsssss/"},
        { name: "Twitter", icon: <FiTwitter />, link: "https://twitter.com/KritikaSukhram1"},
    ];
  return (
    <motion.div className='social-icons' initial={{opacity:0, y:-25}} animate={{opacity:1, y:0}} 
    transition={{duration:0.3, ease:"easeInOut", delay:1.55}}>
      <ul className='social-icons-list'>
        {
            socialLinks.map(({name, icon, link})=> (
                <li key={name} title={name} className='social-icons-list-item'>
                    <Link href={link} className='social-icons-list-item-link' target='_blank'>{icon}</Link>
                </li>
            ))
        }
      </ul>
    </motion.div>
  )
}

export default SocialIcons
