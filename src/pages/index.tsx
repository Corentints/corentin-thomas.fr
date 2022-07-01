import type { NextPage } from 'next'
import {Me} from "../components/Me";
import {Seo} from "../components/Seo";
import {useState} from "react";
import ContactForm from "../components/ContactForm";
import {Notification} from "../components/Notification";

const Home: NextPage = () => {
  const [isContactFormOpen, setContactFormModalOpen] = useState(false)
  const [isEmailSent, setEmailSent] = useState(false)
  const [isEmailError, setEmailError] = useState(false)

  return (
    <>
      <Seo />
      <Me setContactFormModalOpen={setContactFormModalOpen} />
      <ContactForm isOpen={isContactFormOpen} setIsOpen={setContactFormModalOpen} setEmailSent={setEmailSent} setEmailError={setEmailError} />
        {isEmailSent && <Notification title="Email envoyé avec succès." description="Merci, votre demande sera traitée rapidement !" type="success" />}
        {isEmailError && <Notification title="Erreur serveur." description="Votre email n'a pas pu être envoye, réessayez plus tard !" type="error" />}
    </>
  )
}

export default Home
