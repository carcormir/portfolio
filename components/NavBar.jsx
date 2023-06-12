import Link from "next/link";
import Logo from "@/components/Logo"
import CustomNavLink from "@/components/CustomNavLink"
import CustomMobileNavLink from "@/components/CustomMobileNavLink"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import NavBarSocial from "./NavBarSocial";


export default function NavBar () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-20 py-4 font-medium flex items-center justify-between bg-light relative lg:px16 md:px-12 sm:px-8">
      <button onClick={handleClick} className="flex-col justify-center items-center hidden lg:flex z-20">
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1 bg-light/75" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0 bg-light/75" : "opacity-100"}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1 bg-light/75" : "translate-y-0.5"}`}></span>
      </button>
      <div className="mr-3">
        <Logo />
      </div>
      <div className="w-full flex items-center justify-end lg:hidden">
        <nav>
          <CustomNavLink href="/"title="Home"className="mr-4  font-semibold"/>
          <CustomNavLink href="/about"title="About"className="mx-4 font-semibold"/>
          <CustomNavLink href="/projects"title="Projects"className="ml-4 font-semibold"/>
        </nav>
      </div>

      {
        <AnimatePresence>
          {
            isOpen && (
              <motion.div className="min-w-full min-h-screen flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
              bg-dark/90 text-light/75 backdrop-blur-md py-32"
              initial={{opacity: 0, x: "-200%", y: "-50%"}}
              animate={{ opacity: 1, x: "-50%", transition: { duration: 0.1, ease: "easeInOut" } }}
              exit={{ opacity: 0, x: "-200%", transition: { duration: 0.1, ease: "easeInOut" } }}
              >
                <nav className="flex flex-col items-center justify-between">
                  <CustomMobileNavLink href="/" title="Home" className="font-semibold" toggle={handleClick}/>
                  <CustomMobileNavLink href="/about" title="About" className="font-semibold" toggle={handleClick}/>
                  <CustomMobileNavLink href="/projects" title="Projects" className="font-semibold" toggle={handleClick}/>
                </nav>
    
                <NavBarSocial classNameGit={"ml-2 mt-4"} classNameLinkedin={"mt-4 mx-2"}/>
              </motion.div>
            )
          }
        </AnimatePresence>
      }      
    </header>
  )
}