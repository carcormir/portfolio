import { useRef, useEffect } from "react"
import { useInView, useSpring, useMotionValue } from "framer-motion"
import { SkillsData } from '@/constants/SkillsData'

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
      <div className="text-lg font-medium mt-4 text-dark/75">
        {name}
      </div>
    </div>
  )
}

export default function Skills() { 
  return (
      <>
        <h2 className="font-bold text-8xl mt-32 w-full text-center">Skills</h2>
        <div className="w-full h-screen flex flex-col items-start justify-start">
        {
          SkillsData.map((skill, index) => {
            return (
              <div key={index} className="w-full h-auto flex flex-col items-start justify-start mt-10">
                <div className='inline-block w-full text-7xl font-bold'>
                  <CustomTitle title={skill.type} className="text-3xl font-bold text-dark/75" />
                </div>
                <div className="w-full h-1/2 flex flex-wrap  items-center justify-end gap-5 mt-10">
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

