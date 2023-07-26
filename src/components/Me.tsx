import { GridPattern } from './GridPattern'
import { SectionHeading } from './SectionHeading'
import Image from 'next/image'

import logo from '../images/logo.png'
import { SocialLink } from './SocialLink'
import { GitHubIcon } from './Icons/GitHubIcon'
import { LinkedinIcon } from './Icons/LinkedinIcon'
import { MaltIcon } from './Icons/MaltIcon'
import { Dispatch, SetStateAction } from 'react'
import { ScrollCTA } from './ScrollCTA'

interface MeProps {
  setContactFormModalOpen: Dispatch<SetStateAction<boolean>>
}

export function Me({ setContactFormModalOpen }: MeProps) {
  return (
    <section className="relative min-h-screen scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
      <div className="rounded-br-6xl absolute inset-0 z-10 hidden min-h-screen w-4/12 bg-violet-600 text-white/20 lg:right-full lg:block">
        <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-6xl bg-slate-50 pt-px lg:shadow">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              src={logo}
              loading={'eager'}
              placeholder={'blur'}
              layout={'fill'}
              alt={'logo'}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <h1 className="font-display mt-16 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-violet-600">Corentin Thomas –</span>{' '}
              Développeur web freelance
              <span className="text-violet-600">.</span>
            </h1>
            <div className="absolute top-56 md:top-[9rem] lg:top-[11rem]">
              <SectionHeading number="0">Portfolio</SectionHeading>
            </div>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Développeur passionné, je vous accompagne sur la création de votre
              site internet de A à Z.
              <span className="block">
                Auto-entrepreneur, j&apos;aime créer des projets et me former
                continuellement aux nouvelles technologies.
              </span>
            </p>
            <button
              onClick={() => setContactFormModalOpen(true)}
              className="mt-8 inline-flex rounded-md border border-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm outline-violet-500 hover:from-violet-700 hover:to-indigo-700"
            >
              Travaillons ensemble <span className="ml-2">👋</span>
            </button>
            <div className="mt-8 grid grid-cols-2 gap-6 xs:flex xs:flex-wrap xs:items-center xs:space-x-12">
              <SocialLink
                label={'GitHub'}
                link={'https://github.com/CorentinTS'}
                textClass={'text-gray-800'}
                icon={<GitHubIcon />}
              />
              <SocialLink
                label={'Linkedin'}
                link={'https://www.linkedin.com/in/corentin-thomas/'}
                textClass={'text-blue-600'}
                icon={<LinkedinIcon />}
              />
              <SocialLink
                label={'Malt'}
                link={'https://www.malt.fr/profile/corentinthomas'}
                textClass={'text-red-600/80'}
                icon={<MaltIcon />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ScrollCTA href={'#services'} text={'En savoir plus'} />
      </div>
    </section>
  )
}
