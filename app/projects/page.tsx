import React from 'react'
import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'
import BestProject from '@/app/ui/home/BestProject'
import Link from "next/link"

const Page = () => {
  return (
    <div className='bg-deepblue'>
      <Header />
      <div className="flex-col text-blanc mt-20 pb-8 px-4 pt-8 2xl:px-12 md:pt-16 2xl:pt-24 md:pb-12">
        <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-8xl font-medium mb-12 md:mb-16">
          Services - Conception de sites Web sur mesure en React/Next.js, avec
          des solutions adaptées. Je transforme vos idées en expériences
          digitales performantes et engageantes.
        </h1>
        <div className="flex flex-col md:flex-row mb-12 md:mb-24">
          <div className="w-full md:w-1/2 mb-8 md:mb-0"></div>
          <div className="w-full md:w-1/2 my-24">
            <p className="text-gris/60 text-sm md:text-base 2xl:text-3xl leading">
              Je transforme vos idées en expériences numériques captivantes,
              performantes et intuitives, conçues pour engager votre audience
              et faire grandir votre activité. Mon approche allie créativité
              et expertise technique afin de garantir un site web à la fois
              esthétique et parfaitement fonctionnel. L&apos;objectif : offrir une
              expérience utilisateur optimale, renforcer votre présence en
              ligne et vous aider à atteindre vos ambitions stratégiques.
              Créons ensemble quelque chose d&apos;exceptionnel !
            </p>

            <div className="flex justify-start mt-6 md:mt-10 space-x-6 md:space-x-12 text-base md:text-lg 2xl:text-3xl">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 mt-4 md:mt-6 text-lg md:text-base py-1 transition-colors"
              >
                <span className="relative z-10 group-hover:text-black 2xl:text-2xl">
                  Mes projets
                </span>
              </Link>
              <Link
                href="/idea"
                className="group relative inline-flex items-center gap-2 mt-4 md:mt-6 text-lg md:text-base py-1 transition-colors ml-12"
              >
                <span className="relative z-10 group-hover:text-black 2xl:text-2xl">
                  Une idée ?
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BestProject />
      <Footer />
    </div>
  )
}

export default Page
