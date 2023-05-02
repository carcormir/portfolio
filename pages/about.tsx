import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import NavBar from '@/components/NavBar'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen '>
        <Layout className='pt-0'>
          <div>
            <AnimatedText text={'About Me'} className='!text-6xl text-left'/>
          </div>
        </Layout>
      </main>
    </>
  )
}
