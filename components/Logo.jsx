import Link from "next/link";
import { motion } from "framer-motion"

export default function Logo () {
  const MotionLink = motion(Link)
  return (
    <div className="flex items-center justify-center">
      <MotionLink 
        href='/'
        className="w-12 h-12 p-4 bg-blue-500 text-light  
                    flex items-center justify-center text-2xl font-bold"
        whileHover={{
          scale:1.2,
          backgroundColor: 'rgb(96,165,250)',
          transition: {duration: 0.3 }
                  }}
      >
        CC
      </MotionLink>
    </div>
  )
}