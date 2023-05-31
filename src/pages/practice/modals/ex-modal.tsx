import React, { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'

const ModalExPage = () => {
  const { openModal, closeModal, setModalContent, setButtons } =
    useContext(ModalContext)

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

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={showModal}>Open Modal</button>
    </div>
  )
}

export default ModalExPage
