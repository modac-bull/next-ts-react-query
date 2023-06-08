import React, { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'
import useModal from '@/hooks/useModal'

const ModalExPage = () => {
  const { openModal, closeModal, setModalContent, setButtons } =
    useContext(ModalContext)

  const { showAlert } = useModal()

  const showModal = () => {
    setModalContent({
      title: '제목',
      message: '본문 내용',
    })
    setButtons([
      {
        label: '확인',
        action: () => {
          console.log('Confirmed!')
          closeModal()
        },
      },
      {
        label: '취소',
        action: () => {
          console.log('Cancelled!')
          closeModal()
        },
      },
    ])
    openModal()
  }

  const openHandler = () => {
    showAlert({
      message: '메세지',
      size: 'lg',
    })
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={showModal}>Open Modal</button>
      <button onClick={openHandler}>Open Modal</button>
    </div>
  )
}

export default ModalExPage
