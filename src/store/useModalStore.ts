import { create } from 'zustand'

type ModalState = {
  modals: {
    id: string
    Component: React.ElementType | null
    props: Record<string, any>
    title: string
    contents: string
  }[]
  openModal: (
    id: string,
    component: React.ElementType,
    title: string,
    contents: string,
    props?: Record<string, any>,
  ) => void
  closeModal: (id: string) => void
}

/**
 * @deprecated
 */
export const useModalStore = create<ModalState>(set => ({
  modals: [],
  openModal: (id, component, title, contents, props = {}) =>
    set(state => ({
      modals: [
        ...state.modals,
        { id, Component: component, title, contents, props },
      ],
    })),
  closeModal: id =>
    set(state => ({ modals: state.modals.filter(modal => modal.id !== id) })),
}))
