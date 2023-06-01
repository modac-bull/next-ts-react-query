import { modalStore } from '@/store/modalStore'

const ModalContainer = () => {
  const { modals, closeModal } = modalStore()

  return (
    <>
      {modals.map(
        ({
          id,
          component: ModalComponent,
          message,
          onSubmit,
          onClose,
          props,
        }) =>
          ModalComponent && (
            <ModalComponent
              id={id}
              key={id}
              message={message}
              modalClose={() => {
                closeModal(id)
                onClose()
              }}
              modalSubmit={onSubmit}
              {...props}
            />
          ),
      )}
    </>
  )
}

export default ModalContainer