import { useRef, useEffect } from "react"
import { useInView, useSpring, useMotionValue } from "framer-motion"
import { SkillsData } from "@/constants/SkillsData"

export function CustomTitle({ title, className }) {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 5000,
  })
  const isInVew = useInView(ref, {once: true})

  useEffect(() => {
    if (isInVew) {
      motionValue.set(100)
    }
  }, [isInVew, title, motionValue])

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      ref.current.style.width = `${latestValue}%`
    })
  }, [springValue, title])

  return (
    <div className={`${className} relative group`}>
      {title}
      <span ref={ref} className="h-[1px] inline-block bg-purplePastel absolute left-0 -bottom-0.5">
        &nbsp;
      </span>
    </div>
  )
}

export function SkillCard({ name, icon }) {
  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center px-5 py-3 shadow-purplePastel shadow-md rounded">
      <div className="w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-lg font-medium mt-4 text-dark/75 md:text-md xs:text-sm">
        {name}
      </div>
    </div>
  )
}

export default function Skills() { 
  return (
      <>
        <h2 className="font-bold text-8xl mt-16 mb-8 w-full text-center md:text-6xl xs:text-4xl md:mt-24 md:mb-4">Skills</h2>
        <div className="w-full h-full flex flex-col items-start justify-start">
        {
          SkillsData.map((skill, index) => {
            return (
              <div key={index} className="w-full h-full flex flex-col items-start justify-start mt-10">
                <div className="inline-block w-full">
                  <CustomTitle title={skill.type} className="text-3xl font-bold text-dark/75 md:text-2xl xs:text-xl" />
                </div>
                <div className="w-full h-auto flex flex-wrap  items-center justify-end gap-5 mt-10 md:justify-center">
                  {
                    skill.list.map((item, index) => {
                      return (<SkillCard key={index} name={item.name} icon={item.icon} />)
                    })
                  } 
                </div>
              </div>
            )
          })
        }
      </div> 
      </>
  )}

