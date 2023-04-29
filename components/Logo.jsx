import Link from "next/link";
import { motion } from "framer-motion"

export default function Logo () {
  const MotionLink = motion(Link)
  return (
    <div className="flex items-center justify-center">
      <MotionLink 
        href='/'
        className="w-16 h-16 p-4 bg-dark text-light rounded-full 
                    flex items-center justify-center text-2xl font-bold"
        whileHover={{
          scale:1.2,
          backgroundColor: 'lightgray',
          transition: {duration: 0.5 }
                  }}
      >
        CC
      </MotionLink>
    </div>
  )
}