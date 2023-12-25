"use client";
import React, { useEffect, useState } from 'react';
import Link from '../../node_modules/next/link';
import {motion} from "framer-motion";

function Experience() {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
      const transformSelected = () => {
        const underline = document.querySelector<HTMLElement>(".underline");
        underline!.style.top = `${selected * 3.5}rem`;
      };
      transformSelected();
    }, [selected]);


    const experiences = [
        {
          name: "JP Morgan Chase and Co.",
          role: "Upcoming Winter Intern",
          url: "https://www.jpmorgan.com/global",
          start: "January 2024",
          end: "June 2024",
          shortDescription: [
            "I will be joining the reputed firm in the winter of 2024.",
            "Being a part of Corporate Banking sector, I will be making contributions for the same.",
          ],
        },
        {
          name: "JP Morgan Chase and Co.",
          role: "Summer Intern",
          url: "https://www.jpmorgan.com/global",
          start: "May 2023",
          end: "July 2023",
          shortDescription: [
            "Worked on data migration, back-testing, creating APIs and unit-testing.",
            "Reduced the storage costs by 60% by transferring and mapping the data through their respective APIs.",
            "Created unit test cases for checking the correct working of the APIs and acquiring a coverage of about 85%.",
          ],
        },
        {
            name: "IEEE-MSB",
            role: "Technical Head",
            url: "https://ieeenitb.com/",
            start: "July 2023",
            end: "Present",
            shortDescription: [
              "AARAMBH-2023 : Responsible for ensuring smooth functioning of the event.",
              "SAMWAD-2022 : Organizing Head" ,
              "SCEECS-2023 : Organizing Head",
            ],
        },
        {
          name: "IEEE-MSB",
          role: "Technical Secretary-CSE",
          url: "https://ieeenitb.com/",
          start: "July 2022",
          end: "July 2023",
          shortDescription: [
            "AARAMBH-2022 : Taught the underpriveledged students of various villages through fun experiments and video sessions.",
            "SAMWAD-2022 : Organized workshops and guest lectures for college students.",
            "SCEECS-2023 : Checked the authenticity of research papers submitted in our research conference and organized guest lectures.",
          ],
        },
        {
          name: "DoubtNut Technologies",
          role: "Tutor",
          url: "https://www.doubtnut.com/",
          start: "April 2021",
          end: "May 2021",
          shortDescription: [
            "Worked as a Math tutor for students of class 11th and 12th.",
            "Created video solutions for students’ questions.",
            "Organized 8 doubt sessions of about 45 minutes each.",
          ],
        },
        
        
      ];
  return (
    <motion.div className='experience' id='experience' initial="hidden"
    whileInView="visible" viewport={{once:true}} transition={{duration:0.6}}
    variants={{ visible:{opacity:1, y:-50}, hidden: {opacity:0, y:0},}}>
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
            <div className="underline"></div>
            {
                experiences.map((experience, index)=> {
                    return (
                        <li key={experience.name} className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                        onClick={()=> setSelected(index)}>
                            <span>{experience.name}</span>
                        </li>
                    );
                })
            }
        </ul>
        <div className="exp-details">
            <div className="exp-details-position">
                <h3>
                    <span>{experiences[selected].role}</span>
                    <span className='exp-details-position-company'>
                        &nbsp;@&nbsp;
                        <Link className='link' href={experiences[selected].url}>{experiences[selected].name}</Link>
                    </span>
                </h3>
                <p className="exp-details-range">
                    {experiences[selected].start} - {experiences[selected].end}
                </p>
                <ul className="exp-details-list">
                    {
                        experiences[selected].shortDescription.map((description, index)=> (
                        <li key={index} className='exp-details-list-item'> {description} </li>))
                    }
                </ul>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience
