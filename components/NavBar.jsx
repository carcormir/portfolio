import Link from "next/link";
import Logo from '@/components/Logo'
import CustomNavLink from '@/components/CustomNavLink'
import CustomMobileNavLink from '@/components/CustomMobileNavLink'
import { motion } from 'framer-motion'
import { useState } from 'react'
import NavBarSocial from "./NavBarSocial";



export default function NavBar () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='w-full px-20 py-4 font-medium flex items-center justify-between bg-light relative'>
      <button onClick={handleClick} className="flex-col justify-center items-center hidden lg:flex">
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5 '}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5 '}`}></span>
      </button>
      <div className="mr-3">
        <Logo />
      </div>
      <div className="w-full flex items-center justify-end lg:hidden">
        <nav>
          <CustomNavLink href='/' title='Home' className='mr-4  font-semibold'/>
          <CustomNavLink href='/about' title='About' className='mx-4 font-semibold'/>
          <CustomNavLink href='/projects' title='Projects' className='ml-4 font-semibold'/>
        </nav>
      </div>

      {
        isOpen && (
          <motion.div className="min-w-[70vw] flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
          bg-dark/90 text-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{scale: 1, opacity: 1, transition: {duration: 0.3}}}
          >
            <nav className="flex flex-col items-center justify-between">
              <CustomMobileNavLink href='/' title='Home' className='font-semibold' toggle={handleClick}/>
              <CustomMobileNavLink href='/about' title='About' className='font-semibold' toggle={handleClick}/>
              <CustomMobileNavLink href='/projects' title='Projects' className='font-semibold' toggle={handleClick}/>
            </nav>

            <NavBarSocial classNameGit={"ml-0 mt-4"} classNameLinkedin={"mt-4"}/>
          </motion.div>
        )
      }
      
    </header>
  )
}