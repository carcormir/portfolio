import Link from "next/link";
import { motion } from "framer-motion"

export default function Logo () {
  const MotionLink = motion(Link)
  return (
    <div className="flex items-center justify-center">
      <MotionLink 
        href='/'
        className="w-22 h-12 p-4 bg-purplePastel text-white/75  
                    flex items-center justify-center text-l font-bold"
        whileHover={{
          scale:1.1,
          backgroundColor: 'rgb(192, 132, 252)',
          transition: {duration: 0.3 }
                  }}
      >
        corked.dev
      </MotionLink>
    </div>
  )
}