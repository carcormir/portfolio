import { LinkedinIcon, GithubIcon } from "@/components/Icons"
import { motion } from "framer-motion"

const GITHUB_URL = "https://github.com/carcormir"
const LINKEDIN_URL = "https://www.linkedin.com/in/carcormir/"

export default function NavBarSocial ({classNameGit="", classNameLinkedin=""}) {
  
  return (
    <nav className="flex items-center justify-center">
      <motion.a 
        href={GITHUB_URL} 
        target={"_blank"}
        className={`w-12 ml-4 ${classNameGit}`}
        whileHover={{
          translateY: -5,
        }}
        whileTap={{
          scale: 0.9
        }}
        >
        <GithubIcon/>
      </motion.a>
      <motion.a 
        href={LINKEDIN_URL} 
        target={"_blank"}
        className={`w-10 ml-4 ${classNameLinkedin}`}
        whileHover={{
          translateY: -5,
        }}
        whileTap={{
          scale: 0.9
        }}
        >
        <LinkedinIcon/> 
      </motion.a>
    </nav>
  )
}