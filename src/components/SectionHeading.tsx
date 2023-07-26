import { ReactNode } from 'react'

interface SectionHeadingProps {
  number: string
  children: ReactNode
  id?: string
}

export function SectionHeading({
  number,
  children,
  ...rest
}: SectionHeadingProps) {
  return (
    <h2
      className="inline-flex items-center rounded-full bg-white py-1 px-4 text-violet-600 ring-1 ring-inset ring-violet-600"
      {...rest}
    >
      <span className="font-mono text-sm" aria-hidden="true">
        {number.padStart(2, '0')}
      </span>
      <span className="ml-3 h-3.5 w-px bg-violet-600/20" aria-hidden="true" />
      <span className="ml-3 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  )
}
