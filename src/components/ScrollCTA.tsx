import { ArrowDownIcon } from '@heroicons/react/solid'

interface ScrollCTAProps {
  href: string
  text: string
}

export function ScrollCTA({ href, text }: ScrollCTAProps) {
  return (
    <a
      href={href}
      className="flex items-center text-base font-medium tracking-tight text-violet-700 hover:text-violet-600"
    >
      {text}
      <span className="animate-wave">
        <ArrowDownIcon className="ml-2 h-6 w-6" />
      </span>
    </a>
  )
}
