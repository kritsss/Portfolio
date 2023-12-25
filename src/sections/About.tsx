"use client";

import React from 'react'
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'

import {motion} from "framer-motion";

function About() {
  return (
    <motion.div className='about' id='about' initial="hidden"
        whileInView="visible" viewport={{once:true}} transition={{duration:0.6}}
        variants={{ visible:{opacity:1, y:-50}, hidden: {opacity:0, y:0},}}>
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text">
                    Bonjour! My name is Kritika. I am a fresher in the field of 
                    Software Engineering. I am passionate about creating solutions
                    for everything, be it software problems or the real-life ones.
                </p>
                <p className="about-grid-info-text">
                    About my education and qualifications - I am a final year student at {" "}
                    <Link href="https://www.manit.ac.in/" className='link' target='_blank'>
                        Maulana Azad National Institute of Technology, Bhopal &#160;
                    </Link>
                     &#40;MANIT&#41;
                    pursuing B.Tech. in Computer Science and Engineering.
                </p>
                <p className="about-grid-info-text">
                    I have previously worked as an intern with {" "}
                    <Link href="https://www.jpmorgan.com/global" className='link' target='_blank'>
                        JP Morgan Chase and Co.
                    </Link>
                    in the Summer of 2023. I have joined the firm again as a Winter Intern - Analyst 
                    Program for January 2024 to June 2024.
                </p>
                <p className="about-grid-info-text">
                    Here are a few technologies that I've worked with:
                    <ul className="about-grid-info-text-list">
                        <li className="about-grid-info-text-list-item">C/C++</li>
                        <li className="about-grid-info-text-list-item">HTML</li>
                        <li className="about-grid-info-text-list-item">CSS</li>
                        <li className="about-grid-info-text-list-item">JavaScript</li>
                        <li className="about-grid-info-text-list-item">React.js</li>
                        <li className="about-grid-info-text-list-item">Redux.js</li>
                        <li className="about-grid-info-text-list-item">Node.js</li>
                        <li className="about-grid-info-text-list-item">Next.js</li>
                        <li className="about-grid-info-text-list-item">Typescript</li>
                        <li className="about-grid-info-text-list-item">SQL</li>
                        <li className="about-grid-info-text-list-item">Firebase</li>
                    </ul>
                </p>
                <p className="about-grid-info-text">
                    Apart from technical thingies, I love to play Basketball and have been a state 
                    level player in the past. Also, I like to swim, play badminton and volleyball. 
                    All in all, sports are of a great interest to me.
                </p>
            </div>
            <div className="about-grid-photo">
                <div className="overlay"></div>
                <div className="overlay-border"></div>
                <div className="about-grid-photo-container">
                    <Image src="/krits.jpg" alt='profile' fill />
                    
                </div>
            </div>
        </div>
    </motion.div>
  );
}

export default About
