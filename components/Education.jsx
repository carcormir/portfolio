
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from '@/components/LiIcon'

const EducationData = [
  {
    title: 'MSc Electrical Engineering, Automation and Robot Technology.',
    university: 'Danmarks Tekniske Universitet',
    universityLink: 'https://www.dtu.dk/english',
    date: '2015 - 2017',
    address: 'Copenhagen, Denmark',
    description: ''
  },
  {
    title: `Bachelor's degree in Industrial Technology Engineering`,
    university: 'Universidad de Sevilla',
    universityLink: 'https://www.etsi.us.es',
    date: '2010 - 2015',
    address: 'Seville, Spain',
    description: ''
  }
]

export function Details ({title, university, universityLink, date, address, description}) {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80%]">
      <LiIcon reference={ref}/>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {title}&nbsp;
        </h3>
        <h4 className="capitalize font-bold text-lg xs:text-lg"> 
          <a 
            href={universityLink}
            target="_blank"
            className="text-purplePastel hover:text-purplePastel/70 transition-all duration-300 ease-in-out"
          >
            {university}
          </a> 
        </h4>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {date} &nbsp; {address}
        </span>
        <p className="font-medium w-full md:text-sm">
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
    <div className="mt-32 md:mt-24">
        <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl sm:text-4xl">Education</h2>
        <div ref={ref} className="w-[75%] mx-auto mb-48 relative lg:w-[95%] md:w-full">
          <motion.div 
              className="absolute left-9 top-0 w-[4px] h-[145%] bg-dark origin-top md:w-[2px] md:left-30px xs:left-[20px]"
              style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
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