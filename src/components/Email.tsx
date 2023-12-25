"use client";

import React from 'react'
import Link from '../../node_modules/next/link';
import {motion} from "framer-motion";


function Email() {
  return (
    <motion.div className='email' initial={{opacity:0, y:-25}} animate={{opacity:1, y:0}} 
    transition={{duration:0.3, ease:"easeInOut", delay:1.55}}>
      <Link href="mailto:kritikasukhramani@gmail.com" className='email-link'>kritikasukhramani@gmail.com</Link>
    </motion.div>
  )
}

export default Email
