import { useModalStore } from '@/store/useModalStore'

const ModalContainer = () => {
  const { modals, closeModal } = useModalStore()

  return (
    <>
      {modals.map(
        ({ id, Component: ModalComponent, title, contents, props }) =>
          ModalComponent && (
            <ModalComponent
              key={id}
              title={title}
              contents={contents}
              onClose={() => closeModal(id)}
              {...props }
            />
          ),
      )}
    </>
  )
}

export default ModalContainer
