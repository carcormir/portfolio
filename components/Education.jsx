
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from '@/components/LiIcon'

const EducationData = [
  {
    title: 'Software Engineer',
    university: 'Google',
    universityLink: 'https://www.google.com',
    date: '2020 - Present',
    address: 'Mountain View, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, odio euismod aliquam aliquam, mauris ligula elementum diam, et aliquam nibh nibh vitae purus. Cras in massa in nunc ultricies ultricies. Sed euismod, odio euismod aliquam aliquam, mauris ligula elementum diam, et aliquam nibh nibh vitae purus. Cras in massa in nunc ultricies ultricies.'
  },
  {
    title: 'Software Engineer',
    university: 'Facebook',
    universityLink: 'https://www.facebook.com',
    date: '2018 - 2020',
    address: 'Menlo Park, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, odio euismod aliquam aliquam, mauris ligula elementum diam, et aliquam nibh nibh vitae purus. Cras in massa in nunc ultricies ultricies. Sed euismod, odio euismod aliquam aliquam, mauris ligula elementum diam, et aliquam nibh nibh vitae purus. Cras in massa in nunc ultricies ultricies.'
  },
  {
    title: 'Software Engineer',
    university: 'Apple',
    universityLink: 'https://www.apple.com',
    date: '2016 - 2018',
    address: 'Cupertino, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, odio euismod aliquam aliquam, mauris ligula elementum diam, et aliquam nibh nibh vitae purus. Cras in massa in nunc ultricies ultricies. Sed euismod, odio euismod aliquam aliquam, mauris ligula elementum diam, et aliquam nibh nibh vitae purus. Cras in massa in nunc ultricies ultricies.'
  },
]

export function Details ({title, university, universityLink, date, address, description}) {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {title}&nbsp; - &nbsp; 
          <a 
            href={universityLink}
            target="_blank"
            className="text-purplePastel hover:text-purplePastel/70 transition-all duration-300 ease-in-out"
          >
            {university}
          </a> 
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {date} &nbsp; {address}
        </span>
        <p className="font-medium w-full">
          {description}
        </p>
      </motion.div>
    </li>
  )
}


export default function Education() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className="mt-32">
        <h2 className="font-bold text-8xl mb-16 w-full text-center">Education</h2>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div 
              className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
              style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {
              EducationData.map((item, index) => {
                return (
                  <Details
                    key={index} 
                    title={item.title}
                    university={item.university}
                    universityLink={item.universityLink}
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