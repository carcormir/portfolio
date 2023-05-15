import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import NavBarSocial from "@/components/NavBarSocial"
import Layout from "@/components/Layout"
import AnimatedText from "@/components/AnimatedText"
import TransitionEffect from "@/components/TransitionEffect"
import profilePic from "@/public/images/profile/developer-pic-1.png"

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text={"Frontend Developer"} className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Hi, I am Carlos. I am very passionate about Frontend development, specially React.js. I am aiming to help you create 
                something special and unique through technology by being dedicated, 
                creative and having a huge determination.
              </p>
              <div className="w-full flex items-center lg:justify-center md:flex-col md:justify-center md:mt-6">
                <div className="flex items-center self-start md:self-center">
                  <Link href="/CV_2023_Carlos_Corchado.pdf"target={"_blank"} 
                        className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                      border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark md:p-2 md:px-4 md:text-base"
                      download={true}
                      >
                    Resume
                  </Link>
                  <Link href="mailto:carcormir@gmail.com"target={"_blank"}
                      className="ml-4 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                      border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark md:p-2 md:px-4 md:text-base"
                  >
                    Contact
                  </Link>
                </div>
                <NavBarSocial classNameGit="md:mt-4"classNameLinkedin="md:mt-4"/>
              </div>
            </div>
            <div className="w-[60%] text-center ml-20 md:w-full md:ml-0 md:mt-20">
              <Image 
                src={profilePic} 
                alt="carcormir"
                className="w-[60%] h-auto inline-block lg:hidden md:inline-block md:w-[60%]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
