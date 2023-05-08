import Link from "next/link";
import Logo from '@/components/Logo'
import CustomNavLink from '@/components/CustomNavLink'
import { motion } from 'framer-motion'



export default function NavBar () {
  return (
    <header className='w-full px-20 py-4 font-medium flex items-center justify-between bg-light '>
      <nav className="flex items-center justify-center flex-wrap">
        <div className="mr-3">
          <Logo />
        </div>
      </nav>
      <nav>
        <CustomNavLink href='/' title='Home' className='mr-4  font-semibold'/>
        <CustomNavLink href='/about' title='About' className='mx-4 font-semibold'/>
        <CustomNavLink href='/projects' title='Projects' className='ml-4 font-semibold'/>
      </nav>
      {/* <div className="absolute left-[50%] top-5 translate-x-[-50%]">
          <Logo />
        </div> */}

      
    </header>
  )
}