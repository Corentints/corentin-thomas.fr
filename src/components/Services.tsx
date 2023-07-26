import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { ServiceStep } from './ServiceStep'

const serviceSteps = [
  {
    image: '/images/service-steps/document.svg',
    width: '140%',
    height: '140%',
    title: 'Cahier des charges',
    content:
      "Établissement d'un cahier des charges complet afin de définir votre projet ainsi que ses contraintes techniques.",
  },
  {
    image: '/images/service-steps/calendar.svg',
    width: '150%',
    height: '150%',
    title: 'Organisation des tâches',
    content:
      "Définition des tâches et deadlines à l'aide d'un outil de gestion tel que Trello afin d'avoir une vision globale sur la construction de votre projet.",
  },
  {
    image: '/images/service-steps/programming.svg',
    width: '200%',
    height: '200%',
    title: 'Développement de votre solution',
    content: (
      <>
        Développement de votre application conformément au cahier des charges.{' '}
        <span className="block"> Mise en place d&apos;un suivi régulier</span>
      </>
    ),
  },
  {
    image: '/images/service-steps/deliver.svg',
    width: '200%',
    height: '200%',
    title: 'Livraison et maintenance',
    content: "Livraison de votre projet et maintenance active afin d'adapter l'outil en fonction de son usage.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20"
    >
      <Container>
        <SectionHeading number="1" id="services-title">
          Services
        </SectionHeading>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900 z-[100]">
          Création de sites web et applications mobile
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          De l&apos;établissement du cahier des charges à la mise en ligne de
          votre projet, je vous accompagne de A à Z dans la construction
          d&apos;une solution adaptée à vos besoins.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((serviceStep) => (
            <li key={serviceStep.title} className="[counter-increment:video]">
              <ServiceStep
                image={serviceStep.image}
                width={serviceStep.width}
                height={serviceStep.height}
                title={serviceStep.title}
                content={serviceStep.content}
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
