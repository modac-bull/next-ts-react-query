export {}

import React, { createContext, useState, ReactNode, useContext } from 'react'

type Button = {
  label: string
  action: () => void
}

type ModalContent = {
  title: string
  message: string
}

type ModalContextType = {
  isModalOpen: boolean
  modalContent: ModalContent
  buttons: Button[]
  setModalContent: (content: ModalContent) => void
  setButtons: (buttons: Button[]) => void
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  modalContent: { title: '', message: '' },
  buttons: [],
  setModalContent: () => {},
  setButtons: () => {},
  openModal: () => {},
  closeModal: () => {},
})

type ModalContextProviderProps = {
  children: ReactNode
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ModalContent>({
    title: '',
    message: '',
  })
  const [buttons, setButtons] = useState<Button[]>([])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalContent,
        setModalContent,
        buttons,
        setButtons,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
