import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavBarSocial from '@/components/NavBarSocial'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import profilePic from '@/public/images/profile/developer-pic-1.png'

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen '>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text={'Frontend Developer'} className='!text-6xl text-left'/>
              <p className='my-4 text-base font-medium'>
                Hi, I am Carlos. I am very passionate about Frontend development, specially React.js. I am aiming to help you create 
                something special and unique through technology by being dedicated, 
                creative and having a huge determination.
              </p>
              <div className='w-full flex items-center '>
                <div className='flex items-center self-start'>
                  <Link href='/dummy.pdf' target={'_blank'} 
                        className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                      border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark'
                      download={true}
                      >
                    Resume
                  </Link>
                  <Link href='mailto:carcormir@gmail.com' target={'_blank'}
                      className='ml-4 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                      border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark'
                  >
                    Contact
                  </Link>
                </div>
                <NavBarSocial />
              </div>
            </div>
            <div className='w-1/2'>
              <Image src={profilePic} alt='carcormir' className='w-full h-auto' 
                priority
                sizes='(max-width: 768px) 100vw
                (max-width: 1024px) 50vw
                50vw' 
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
