import Link from "next/link";
import { motion } from "framer-motion"

export default function Logo () {
  const MotionLink = motion(Link)
  return (
    <div className="flex items-center justify-center">
      <MotionLink 
        href='/'
        className="w-22 h-12 p-4 bg-purple-500 text-light  
                    flex items-center justify-center text-l font-bold"
        whileHover={{
          scale:1.2,
          backgroundColor: 'rgb(195, 177, 225)',
          transition: {duration: 0.3 }
                  }}
      >
        corked.dev
      </MotionLink>
    </div>
  )
}