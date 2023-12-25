"use client";
import Button from '@/components/Button'
import React from 'react'
import {motion} from "framer-motion";

function Contact() {
  return (
    <motion.div className='contact' id='contact'  initial="hidden"
    whileInView="visible" viewport={{once:true}} transition={{duration:0.6}}
    variants={{ visible:{opacity:1, y:-50}, hidden: {opacity:0, y:0},}}>
      <h2 className="contact-title">Ladies and Gentlemen, Thoughts?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        If you have a suggestion or a question or you want to say Hi, my 
        Inbox is always open. I will try my best to get back to you! Cheers. 
      </p>
      <div className="contact-cta">
        <Button text='Say Hello!' link='mailto:kritikasukhramani@gmail.com' />
      </div>
    </motion.div>
  )
}

export default Contact
