import { useEffect, useRef, useState } from 'react'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'

const sections = [
  { id: 'services', title: 'Services' },
  { id: 'projects', title: 'Projets' },
  { id: 'skills', title: 'Compétences' },
  { id: 'hobbies', title: "Centres d'intérêt" },
]

export function NavBar() {
  const navBarRef = useRef<HTMLDivElement>()
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    function updateActiveIndex() {
      let newActiveIndex = -1
      const elements = sections.map(({ id }) => document.getElementById(id))
      const bodyRect = document.body.getBoundingClientRect()

      if (navBarRef.current) {
        const offset = bodyRect.top + navBarRef.current.offsetHeight + 1

        if (
          window.scrollY >=
          Math.floor(bodyRect.height) - window.innerHeight
        ) {
          setActiveIndex(sections.length - 1)
          return
        }

        for (let index = 0; index < elements.length; index++) {
          if (
            elements[index] !== null &&
            window.scrollY >=
              elements[index].getBoundingClientRect().top - offset
          ) {
            newActiveIndex = index
          } else {
            break
          }
        }

        setActiveIndex(newActiveIndex)
      }
    }

    updateActiveIndex()

    window.addEventListener('resize', updateActiveIndex)
    window.addEventListener('scroll', updateActiveIndex, { passive: true })

    return () => {
      window.removeEventListener('resize', updateActiveIndex)
      window.removeEventListener('scroll', updateActiveIndex)
    }
  }, [])

  const open = false

  return (
    <div ref={navBarRef} className="sticky top-0 z-50">
      <Popover className="sm:hidden">
        <>
          <div
            className={clsx('relative flex items-center py-3 px-4', {
              'bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur':
                !open,
            })}
          >
            <>
              <span
                aria-hidden="true"
                className="font-mono text-sm text-violet-600"
              >
                {(Math.max(0, activeIndex) + 1).toString().padStart(2, '0')}
              </span>
              <span className="ml-4 text-base font-medium text-slate-900">
                {sections[Math.max(0, activeIndex)].title}
              </span>
            </>
            <Popover.Button
              className={clsx(
                '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                { 'relative z-10': open }
              )}
            >
              <span className="absolute inset-0" />
              <span className="sr-only">Toggle navigation menu</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6 stroke-slate-700"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d={
                    open
                      ? 'M17 7 7 17M7 7l10 10'
                      : 'm15 16-3 3-3-3M15 8l-3-3-3 3'
                  }
                />
              </svg>
            </Popover.Button>
          </div>
          <Popover.Panel className="absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center py-1.5 px-4"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-violet-600"
                >
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="ml-4 text-base font-medium text-slate-900">
                  {section.title}
                </span>
              </a>
            ))}
          </Popover.Panel>
          <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white" />
        </>
      </Popover>
      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol className="-mb-[2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]">
          {sections.map((section, index) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <a
                href={`#${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  {
                    'border-violet-600 bg-violet-50 text-violet-600 before:text-violet-600':
                      index === activeIndex,
                    'border-transparent before:text-slate-500 hover:bg-violet-50/40 hover:before:text-slate-900':
                      index !== activeIndex,
                  }
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
