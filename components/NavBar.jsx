import Link from "next/link";
import Logo from '@/components/Logo'
import { LinkedinIcon, GithubIcon } from '@/components/Icons'
import { useRouter } from "next/router";
import { motion } from 'framer-motion'

const GITHUB_URL = 'https://github.com/carcormir'
const LINKEDIN_URL = 'https://www.linkedin.com/in/carcormir/'

function CustomLink ({href, title, className=`${className}`}) {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
        w-[1px] inline-block bg-dark h-full
        absolute -left-2 bottom-0 group-hover:h-full trasition-[height] ease duration-300
        ${router.asPath === href ? 'h-full' : 'h-0'}
        `}>
          &nbsp;
      </span>
      <span className={`
        h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 group-hover:w-full trasition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;
      </span>
    </Link>

  )

}

export default function NavBar () {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between bg-blue-300'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4'/>
        <CustomLink href='/about' title='About' className='mx-4'/>
        <CustomLink href='/projects' title='Projects' className='ml-4'/>
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a 
          href={GITHUB_URL} 
          target={'_blank'}
          className='w-6 mx-3'
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
          target={'_blank'}
          className='w-6 ml-3'
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

      <div className="absolute left-[50%] top-5 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}