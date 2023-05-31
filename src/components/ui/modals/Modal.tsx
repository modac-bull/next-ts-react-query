import React, { useContext } from 'react'
import 'twin.macro'
import { ModalContext } from '../../../context/ModalContext'

const Modal = () => {
  const { isModalOpen, closeModal, modalContent, buttons } =
    useContext(ModalContext)

  if (!isModalOpen) {
    return null
  }

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div>
      <div
        onClick={onOverlayClick}
        tw="absolute top-0 left-0 w-full h-full  bg-black/40"
      ></div>
      <div tw="bg-white absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] w-[500px] h-[200px] border border-solid border-red-500">
        <div>
          <button onClick={closeModal}>닫기 버튼</button>
        </div>
        <h2>{modalContent.title}</h2>
        <p>{modalContent.message}</p>
        {buttons.map((button, index) => (
          <button key={index} onClick={button.action}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Modal
