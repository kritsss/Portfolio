"use client";
import React from 'react'
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';

import {motion} from "framer-motion"

function Projects() {
    const projectsData = [
        {
          image: "/project1.jpg",
          projectName: "Fake News Detection",
          projectLink: "https://github.com/kritsss/Fake-News-Detection",
          projectDescription:
            "The project uses various deep learning mechanisms to differentiate and perform binary classification of news into Real and Fake. Some of the libraries used are : Scikit-learn, Pytorch, transformers etc.",
          projectTech: [
            "Deep Learning",
            "LSTM",
            "BiLSTM",
            "CNN",
            "Transformers",
          ],
          projectExternalLinks: {
            github: "https://github.com/kritsss/Fake-News-Detection",
            externalLink: "https://github.com/kritsss/Fake-News-Detection",
          },
        },
        {
          image: "/project2.jpg",
          projectName: "Discord Clone",
          projectLink: "https://discord-clone-58655.web.app/",
          projectDescription:
            "This is a chat app made with React.js(for frontend) and Redux.js(for backend) that sends real-time messages and is highly scalable. Firebase is used as the database and deployment tool.",
          projectTech: [
            "React.Js",
            "Redux.Js",
            "Firebase",
          ],
          projectExternalLinks: {
            github: "https://github.com/kritsss/Discord-clone",
            externalLink: "https://discord-clone-58655.web.app/",
          },
        },
        {
          image: "/project3.jpg",
          projectName: "Todo List",
          projectLink: "https://todo-list-krits.netlify.app/",
          projectDescription:
            "I made a TODO list with HTML, CSS and Javascript. It has a developed frontend and is handy for keeping the track of your pending tasks.",
          projectTech: [
            "HTML",
            "CSS",
            "Javascript",
          ],
          projectExternalLinks: {
            github: "https://github.com/kritsss/TODO-List",
            externalLink: "https://todo-list-krits.netlify.app/",
          },
        },
      ];



  return (
    <motion.div className='projects' id='work'  initial="hidden"
    whileInView="visible" viewport={{once:true}} transition={{duration:0.6}}
    variants={{ visible:{opacity:1, y:-50}, hidden: {opacity:0, y:0},}}>
      <div className="title">
        <h2>My Projects</h2>
      </div>
      <div className="projects-container">
        {
            projectsData.map (({
                image, projectDescription, projectLink, projectExternalLinks, projectName, projectTech,
            }) => {
                return (
                    <div className="project" key={projectName}>
                        <div className="project-image">
                            <div className="project-image-overlay"></div>
                            <div className="project-image-container">
                                <Image src={image} fill alt={projectName} quality={100} />
                            </div>
                        </div>
                        <div className="project-info">
                            {/* <p className="project-info-overline">Featured Projects</p> */}
                            <h3 className="project-info-title">{projectName}</h3>
                            <div className="project-info-description">
                                <p>{projectDescription}</p>
                            </div>
                            <ul className="project-info-tech-list">
                                {projectTech.map((tech) => (
                                    <li className="project-info-tech-list-item" key={tech}>{tech}</li>
                                ))}
                            </ul>
                            <ul className="project-info-links">
                                <li className="project-info-links-item">
                                    <Link href={projectExternalLinks.github} className='project-info-links-item-link' >
                                    <FiGithub />
                                    </Link>
                                </li>
                                <li className="project-info-links-item">
                                    <Link href={projectExternalLinks.externalLink} className='project-info-links-item-link' >
                                    <FiExternalLink />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            })
        }
      </div>
    </motion.div>
  )
}

export default Projects
