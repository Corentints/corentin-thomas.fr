import { Dialog, Transition } from '@headlessui/react'
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useState,
} from 'react'
import { XCircleIcon, XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

interface ContactFormProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setEmailSent: Dispatch<SetStateAction<boolean>>
  setEmailError: Dispatch<SetStateAction<boolean>>
}

interface FormState {
  'first-name'?: string
  'last-name'?: string
  email?: string
  message?: string
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function isEmailValid(email: string) {
  const regExp = /\S+@\S+\.\S+/
  return regExp.test(email)
}

export default function ContactForm({
  isOpen,
  setIsOpen,
  setEmailSent,
  setEmailError,
}: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>({})
  const [displayFormErrors, setDisplayFormErrors] = useState(false)
  const [firstNameValid, setFirstNameValid] = useState<boolean>(false)
  const [lastNameValid, setLastNameValid] = useState<boolean>(false)
  const [emailValid, setEmailValid] = useState<boolean>(false)
  const [messageValid, setMessageValid] = useState<boolean>(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const checkTextInput = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    errorSetter: React.Dispatch<React.SetStateAction<boolean>>,
    minLength: number
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    errorSetter(target.value.length > minLength)
  }

  const checkEmailInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    errorSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const target = e.target as HTMLInputElement
    errorSetter(isEmailValid(target.value))
  }

  const isFormValid = () => {
    return firstNameValid && lastNameValid && emailValid && messageValid
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isFormValid()) {
      setDisplayFormErrors(false)
      setIsOpen(false)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formState,
        }),
      })
        .then(() => setEmailSent(true))
        .catch(() => setEmailError(true))
    } else {
      setDisplayFormErrors(true)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute top-3 right-3 pt-4 pr-4">
                  <button
                    type="button"
                    className="text-gray-400 outline-violet-500 hover:text-gray-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="overflow-hidden bg-white py-8 px-4 sm:px-6 lg:px-8">
                  <div className="relative mx-auto max-w-xl">
                    <div className="text-center">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Me contacter
                      </h2>
                    </div>
                    <div className="mt-12">
                      {displayFormErrors && !isFormValid() && (
                        <div className="mb-8 rounded-md bg-red-50 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <XCircleIcon
                                className="h-5 w-5 text-red-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-red-800">
                                Le formulaire n&apos;est pas correctement rempli
                              </h3>
                              <div className="mt-2 text-sm text-red-700">
                                <ul
                                  role="list"
                                  className="list-disc space-y-1 pl-5"
                                >
                                  {!firstNameValid && (
                                    <li>Le prénom doit être renseigné</li>
                                  )}
                                  {!lastNameValid && (
                                    <li>Le nom doit être renseigné</li>
                                  )}
                                  {!emailValid && (
                                    <li>
                                      L&apos;adresse email doit être renseignée
                                      et valide
                                    </li>
                                  )}
                                  {!messageValid && (
                                    <li>
                                      Le message doit être renseigné et dépasser
                                      10 caractères
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <form
                        action="/"
                        method="POST"
                        onSubmit={handleSubmit}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Prénom
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              placeholder="John"
                              className={clsx(
                                'block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500',
                                displayFormErrors &&
                                  !firstNameValid &&
                                  'border-red-500'
                              )}
                              onKeyUp={(e) =>
                                checkTextInput(e, setFirstNameValid, 2)
                              }
                              onChange={handleChange}
                              value={formState['first-name']}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nom
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="given-name"
                              placeholder="Doe"
                              className={clsx(
                                'block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500',
                                displayFormErrors &&
                                  !lastNameValid &&
                                  'border-red-500'
                              )}
                              onKeyUp={(e) =>
                                checkTextInput(e, setLastNameValid, 2)
                              }
                              onChange={handleChange}
                              value={formState['last-name']}
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Adresse email
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              placeholder="john.doe@domain.com"
                              className={clsx(
                                'block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500',
                                displayFormErrors &&
                                  !emailValid &&
                                  'border-red-500'
                              )}
                              onKeyUp={(e) => checkEmailInput(e, setEmailValid)}
                              onChange={handleChange}
                              value={formState['email']}
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Message
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              className={clsx(
                                'block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-violet-500 focus:ring-violet-500',
                                displayFormErrors &&
                                  !messageValid &&
                                  'border-red-500'
                              )}
                              defaultValue={''}
                              onKeyUp={(e) =>
                                checkTextInput(e, setMessageValid, 2)
                              }
                              onChange={handleChange}
                              value={formState['message']}
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            className="mt-4 inline-flex rounded-md border border-transparent bg-gradient-to-r from-violet-600 to-violet-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm outline-violet-500 hover:from-violet-700 hover:to-violet-700"
                          >
                            Envoyer <span className="ml-2">📩</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
