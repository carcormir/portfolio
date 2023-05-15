import { motion, useScroll } from "framer-motion"

export default function LiIcon ({reference}) {
  const { scrollYProgress } = useScroll(
    {
      target: reference,
      offset: ["center end", "center center"]
    }
  )
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="md:w-[70px] md:h-[70px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="-50 -50 100 100">
        <rect x="-20" y="-35" width="40" height="40" className="stroke-purplePastel stroke-[4px] md:stroke-[2px] fill-none"/>
        <motion.rect x="-20" y="-35" width="40" height="40"  
          className="stroke-[5px] md:stroke-[2px] fill-light"
          style={{ pathLength: scrollYProgress }}
        />
        <rect x="-10" y="-25" width="20" height="20" className="animate-pulse stroke-1 fill-purplePastel"/>
      </svg>
    </figure>
  )
}