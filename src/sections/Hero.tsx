"use client";
import Button from '@/components/Button'
import React from 'react'
import Link from '../../node_modules/next/link'

import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='hero'>
        <motion.h1 className="hero-title" initial={{opacity:0, y:-25}} animate={{opacity:1, y:0}} 
                    transition={{duration:0.3, ease:"easeInOut", delay:0.6}}>Hi, I am </motion.h1>

        <motion.h2 className="hero-title-large" initial={{opacity:0, y:-25}} animate={{opacity:1, y:0}} 
                    transition={{duration:0.3, ease:"easeInOut", delay:0.75}}>Kritika Sukhramani</motion.h2>

        <motion.h3 className="hero-title-large hero-title-sub" initial={{opacity:0, y:-25}} animate={{opacity:1, y:0}} 
                    transition={{duration:0.3, ease:"easeInOut", delay:1.05}}>
            Trying to build the future, one line of code at a time.
        </motion.h3>

        <motion.p className="hero-text" initial={{opacity:0, y:-25}} animate={{opacity:1, y:0}} 
                    transition={{duration:0.3, ease:"easeInOut", delay:1.25}}>
            I&apos;m a final year student, pursuing B.Tech. in 
            Computer Science and Engineering from MANIT, Bhopal. 
            Getting ready to make an impact in the world of software!
            
        </motion.p>

        <motion.div className="hero-button" initial={{opacity:0, y:-25}} animate={{opacity:1, y:0}} 
                    transition={{duration:0.3, ease:"easeInOut", delay:1.5}}>
            <Button text='Let&apos;s connect' link='https://www.linkedin.com/in/kritsss/'></Button>
        </motion.div>
    </div>
  )
}

export default Hero
