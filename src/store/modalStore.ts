import { ModalType } from '@/components/ui/modals/types'
import { create } from 'zustand'

type ModalState = {
  modals: ModalType[]
  openModal: (modalState: ModalType) => void
  closeModal: (id: string) => void
}

export const modalStore = create<ModalState>(set => ({
  modals: [],
  openModal: modalState => {
    return set(state => ({
      modals: [...state.modals, modalState],
    }))
  },
  closeModal: id =>
    set(state => {
      return {
        modals: state.modals.filter(modal => modal.id !== id),
      }
    }),
}))
