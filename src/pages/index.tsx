import type { NextPage } from 'next'
import { Me } from '../components/Me'
import { Seo } from '../components/Seo'
import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import { Notification } from '../components/Notification'
import { Services } from '../components/Services'

const Home: NextPage = () => {
  const [isContactFormOpen, setContactFormModalOpen] = useState(false)
  const [isEmailSent, setEmailSent] = useState(false)
  const [isEmailError, setEmailError] = useState(false)

  return (
    <>
      <Seo />
      <Me setContactFormModalOpen={setContactFormModalOpen} />
      {/* <NavBar /> */}

      <Services />
      {/* <Skills /> */}
      {/* <Hobbies /> */}

      <ContactForm
        isOpen={isContactFormOpen}
        setIsOpen={setContactFormModalOpen}
        setEmailSent={setEmailSent}
        setEmailError={setEmailError}
      />
      <Notification
        show={isEmailSent}
        setShow={setEmailSent}
        title="Email envoyé avec succès."
        description="Merci, votre demande sera traitée rapidement !"
        type="success"
      />
      <Notification
        show={isEmailError}
        setShow={setEmailError}
        title="Erreur serveur."
        description="Votre email n'a pas pu être envoye, réessayez plus tard !"
        type="error"
      />
    </>
  )
}

export default Home
