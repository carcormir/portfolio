
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from '@/components/LiIcon'

const ExperienceData = [
  {
    position: 'Frontend Developer',
    company: 'Seasony',
    companyLink: 'https://www.seasony.io',
    type: 'Freelance',
    date: 'Apr 2023 - Present',
    address: 'Copenhagen, Denmark',
    description: 'Improvements, maintenance and bug fixing of the web application.'
  },
  {
    position: 'Software Developer',
    company: 'Seasony',
    companyLink: 'https://www.seasony.io',
    type: 'Full-time',
    date: 'Jan 2021 - Feb 2023',
    address: 'Copenhagen, Denmark',
    description: `Designed and implemented the behavior tree that the main product uses to perform different complex tasks. This included handling of new tasks, interruptions, recoveries among others. 
    Maintained and improved the simulation environment used for testing the entire pipeline.
    Responsible for the integration between the robotics team and the web application team which lead me to interact with both the Front-End and Back-End of the application. That being said, I really enjoyed the Front-End side specially React.js.`
  },
  {
    position: 'Robotics Software Specialist',
    company: 'Teknologisk Institut',
    companyLink: 'https://dti.dk',
    type: 'Full-time',
    date: 'Nov 2019 - Jan 2021',
    address: 'Copenhagen, Denmark',
    description: `Developed, implemented and integrated robotic software solutions in the food industry with the goal of creating more sustainable and efficient processes. 
    As part of a multidisciplinary team, I was responsible for the development of solid and efficient software solutions, initially based in simulation and later integrated in complex hardware systems.`
  },
  {
    position: 'Software Developer',
    company: 'AKQA',
    companyLink: 'https://akqa.com',
    type: 'Full-time',
    date: 'Aug 2019 - Oct 2019',
    address: 'Copenhagen, Denmark',
    description: `Found new ways of using robotics and machine learning in the marketing industry. Developed different social human-robot interaction demos with the Softbank robotics platform Pepper.
    Created a portfolio and different pilot tests for the company to demonstrate the possibilities and capabilities behind robotics and ML to potential clients.`
  },
  {
    position: 'R&D Software Engineer',
    company: 'Human Brain Project',
    companyLink: 'https://www.humanbrainproject.eu/en',
    type: 'Full-time',
    date: 'Aug 2017 - Nov 2018',
    address: 'Copenhagen, Denmark',
    description: `Found new ways of controlling robots by taking inspiration from nature: Neurorobotics
    Designed and implemented bio-inspired control architectures based on different parts of the Central Nervous System such as the Cerebellum.
    These architectures included artificial neural networks and other machine learning techniques that were integrated and optimized in both simulated and physical robotic platforms for manipulation and locomotion tasks.`
  },
]

export function Details ({position, company, companyLink, type, date, address, description}) {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
      <LiIcon reference={ref}/>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
        </h3>
        <h4 className="capitalize font-bold text-lg"> 
          <a 
            href={companyLink}
            target="_blank"
            className="text-purplePastel hover:text-purplePastel/70 transition-all duration-300 ease-in-out"
          >
            {company}
          </a>
          <span className="font-light text-lg text-dark/75">
            &nbsp; &#x2022; &nbsp;{type}
          </span>
        </h4>
        <span className="capitalize font-light text-dark/75">
          {date} &nbsp; &#124; &nbsp; {address}
        </span>
        <p className="font-medium w-full">
          {description}
        </p>
      </motion.div>
    </li>
  )
}


export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className="mt-32">
        <h2 className="font-bold text-8xl mb-16 w-full text-center">Experience</h2>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div 
              className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
              style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {
              ExperienceData.map((item, index) => {
                return (
                  <Details
                    key={index} 
                    position={item.position}
                    company={item.company}
                    companyLink={item.companyLink}
                    type={item.type}
                    date={item.date}
                    address={item.address}
                    description={item.description}
                  />
                )
              })
            }
          </ul>
        </div>
    </div>
  )
}