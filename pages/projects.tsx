import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import Clock from "@/components/Clock"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Head from "next/head"
import Image from "next/image"
import profilePic from "@/public/images/profile/developer-pic-2.jpg"
import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

const AnimatedNumber = ({value}: {value: number}) => {
  const ref = useRef<HTMLSpanElement>(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 4000,
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
    <span ref={ref} className="inline-block text-7xl font-bold">
      {value}+
    </span>
  )
}

export default function About() {
  return (
    <>
      <TransitionEffect/>
      <Head>
        <title>Projects</title>
        <meta name="projects description" content="Projects"/>
      </Head>
      <main className="flex w-full h-full flex-col items-center justify-center">
        <Layout className="pt-16">
            <AnimatedText text={"🛠Projects🛠"} className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"/>
            <main>
              👷🏻‍♂️This section is currently under construction. To check some of the public
              projects I&apos;ve worked on and I&apos;m working on, please visit my 
              <a href="https://github.com/carcormir" target="_blank" className="font-bold hover:underline"> GitHub account</a>.
              <Clock />

            </main>
        </Layout>
      </main>
    </>
  )
}
