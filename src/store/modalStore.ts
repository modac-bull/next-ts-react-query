import { create } from 'zustand'

type ModalState = {
  modals: {
    id: string
    component: React.ElementType | null
    props: Record<string, any>
    onSubmit: () => void
    onClose: () => void
    message: string
  }[]
  openModal: (
    id: string,
    component: React.ElementType,
    message: string,
    onSubmit: () => void,
    onClose: () => void,
    props?: Record<string, any>,
  ) => void
  closeModal: (id: string) => void
}

export const modalStore = create<ModalState>(set => ({
  modals: [],
  openModal: (id, component, message, onSubmit, onClose, props = {}) => {
    console.log(id, component, message, props)
    return set(state => ({
      modals: [
        ...state.modals,
        {
          id: id,
          component: component,
          message: message,
          props: props,
          onSubmit: onSubmit,
          onClose: onClose,
        },
      ],
    }))
  },
  closeModal: id =>
    set(state => ({ modals: state.modals.filter(modal => modal.id !== id) })),
}))
