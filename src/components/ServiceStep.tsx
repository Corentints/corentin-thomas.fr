import Image, { StaticImageData } from 'next/image'
import {ReactElement} from "react";

interface ServiceStepProps {
  image: string | StaticImageData,
  width: string,
  height: string,
  title: string,
  content: string | ReactElement
}

export function ServiceStep({image, width, height, title, content}: ServiceStepProps) {
  return (
    <>
      <div
        className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
        style={{
          backgroundImage:
            'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
        }}
      >
        <div className="flex overflow-hidden rounded">
          <Image src={image} alt={title} width={width} height={height} />
        </div>
      </div>
      <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{content}</p>
    </>
  )
}