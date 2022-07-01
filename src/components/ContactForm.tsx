import {Dialog, Transition} from '@headlessui/react'
import {Dispatch, Fragment, SetStateAction} from 'react'
import {XIcon} from "@heroicons/react/solid";

interface ContactFormProps {
    isOpened: boolean,
    setIsOpened:  Dispatch<SetStateAction<boolean>>
}

export default function ContactForm({isOpened, setIsOpened}: ContactFormProps) {
    return (
        <Transition appear show={isOpened} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpened(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
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
                            <Dialog.Panel
                                className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="absolute top-3 right-3 pt-4 pr-4">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        onClick={() => setIsOpened(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
                                    <div className="relative max-w-xl mx-auto">
                                        <div className="text-center">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Me
                                                contacter
                                            </h2>
                                        </div>
                                        <div className="mt-12">
                                            <form action="#" method="POST"
                                                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                                <div>
                                                    <label htmlFor="first-name"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Prénom
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="last-name"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Nom
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="given-name"
                                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label htmlFor="email"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Adresse email
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label htmlFor="message"
                                                           className="block text-sm font-medium text-gray-700">
                                                        Message
                                                    </label>
                                                    <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                        defaultValue={''}
                                    />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <button
                                                        type="submit"
                                                        className="mt-4 inline-flex bg-gradient-to-r from-blue-600 to-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-blue-700 hover:to-blue-700"
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