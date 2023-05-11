import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '@/public/images/profile/developer-pic-2.jpg'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumber = ({value}) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 5000,
  })
  const isInVew = useInView(ref, {once: true})

  useEffect(() => {
    if (isInVew) {
      motionValue.set(value)
    }
  }, [isInVew, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if(ref.current && latestValue.toFixed(0) <= value ) {
        ref.current.textContent = latestValue.toFixed(0)
      }
    })
  }, [springValue, value])

  return (
    <span ref={ref} className='inline-block text-7xl font-bold'>
      {value}+
    </span>
  )
}

export default function About() {
  return (
    <>
      <TransitionEffect/>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me"/>
      </Head>
      <main className='flex w-full h-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text={'About Me'} className='mb-16'/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'>
                Hi! I am Carlos, an engineer that loves creating functional, efficient and 
                beautiful websites. With over 4 years of experience as a Software Developer, 
                I am always looking for new challenges and ways to bring ideas to life.
              </p>
              <p className='my-4 font-medium'>
                Being a Frontend Developer involves much more than just writing code. It is 
                about understanding your partner's needs and translating them into a product. 
                To do that you need to be good at solving complex problems and understanding 
                what exactly what you are doing.
              </p>
              <p className='font-medium'>
                I am always very commited to creating efficent websites that help the users 
                enjoy their experience every step of the way.
                I cannot wait to work with you, so do not hesitate to contact me! 
              </p>
            </div>
            <div className='col-span-3 relative h-max  border-2 border-solid border-dark
            bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark'  />
              <Image src={profilePic} className='w-full h-auto' alt='profile-image-corked'/>
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber value={'4'}/>
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber value={'14'}/>
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumber value={'1'}/>
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied partners</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}
