import Link from "next/link";
import Logo from '@/components/Logo'
import { LinkedinIcon, GithubIcon } from '@/components/Icons'
import { useRouter } from "next/router";


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
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4'/>
        <CustomLink href='/about' title='About' className='mx-4'/>
        <CustomLink href='/projects' title='Projects' className='ml-4'/>
      </nav>
      <nav className="flex gap-4">
        <Link href='/' target={'_blank'}><GithubIcon/></Link>
        <Link href='/' target={'_blank'}><LinkedinIcon/> </Link>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}