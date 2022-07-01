import {GridPattern} from "./GridPattern";
import {SectionHeading} from "./SectionHeading";
import Image from "next/image";

import logo from '../images/logo.jpg'
import {SocialLink} from "./SocialLink";
import {GitHubIcon} from "./Icons/GitHubIcon";
import {LinkedinIcon} from "./Icons/LinkedinIcon";
import {MaltIcon} from "./Icons/MaltIcon";
import {Dispatch, SetStateAction} from "react";

interface MeProps {
    setContactFormModalOpen: Dispatch<SetStateAction<boolean>>
}

export function Me({setContactFormModalOpen}: MeProps) {
    return (
        <section
            id="author"
            aria-labelledby="author-title"
            className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
        >
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
                <GridPattern x="50%" y="100%" />
            </div>
            <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
                <div className="bg-slate-50 pt-px sm:rounded-6xl">
                    <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                        <Image src={logo} layout='fill' alt={'logo'} />
                    </div>
                    <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                        <h1 className="mt-16 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                            <span className="block text-blue-600">Corentin Thomas –</span> Développeur web freelance<span className="text-blue-600">.</span>
                        </h1>
                        <div className="absolute top-56 md:top-[9rem] lg:top-[11rem]">
                            <SectionHeading number="1">
                                Portfolio
                            </SectionHeading>
                        </div>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            Développeur passionné, je vous accompagne sur
                            la création de votre site internet de A à Z.
                          <span className="block">
                            Auto-entrepreneur, j&apos;aime créer des projets
                            et me former continuellement aux nouvelles technologies.
                          </span>
                        </p>
                        <button onClick={() => setContactFormModalOpen(true)}
                           className="mt-8 inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-blue-700 hover:to-indigo-700">
                            Travaillons ensemble <span className="ml-2">👋</span>
                        </button>
                        <div className="mt-8 flex items-center space-x-12">
                            <SocialLink label={'GitHub'} link={'https://github.com/CorentinTS'} textClass={'text-gray-800'} icon={<GitHubIcon />} />
                            <SocialLink label={'Linkedin'} link={'https://github.com/CorentinTS'} textClass={'text-blue-600'} icon={<LinkedinIcon />} />
                            <SocialLink label={'Malt'} link={'https://github.com/CorentinTS'} textClass={'text-red-600/80'} icon={<MaltIcon />} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
