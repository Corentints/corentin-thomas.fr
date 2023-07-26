import { SVGProps, useId } from 'react'

export function GridPattern(
  props: JSX.IntrinsicAttributes & SVGProps<SVGPatternElement>
) {
  const patternId = useId()

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-violet-500"
    >
      <defs>
        <pattern
          id={patternId}
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
          {...props}
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
