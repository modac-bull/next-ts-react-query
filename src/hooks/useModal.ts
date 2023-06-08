import { AlertModal, ConfirmModal } from '@/components/ui/modals'
import { ModalType } from '@/components/ui/modals/types'
import { modalStore } from '@/store/modalStore'

// import generateUniqueId from '@/utils/generateUniqueId'

import { v4 as uuidv4 } from 'uuid'

// import { AlertModal, ConfirmModal } from '@/components/admin/ui/modals'
// import type { ModalType } from '@/components/admin/ui/modals/types'

function generateUniqueId(prefix: string) {
  const uniqueId = uuidv4()
  return `${prefix}_${uniqueId}`
}

export default function useModal() {
  const { openModal } = modalStore()

  // Alert 모달
  const showAlert = ({
    message,
    size,
    onSubmit,
  }: {
    message: string
    size?: ModalType['size']
    onSubmit?: () => void
  }) => {
    openModal({
      id: generateUniqueId('modal'),
      message,
      size,
      component: AlertModal,
      onSubmit,
    })
  }

  // Confirm 모달
  const showConfirm = ({
    message,
    size,
    onSubmit,
    onClose,
  }: {
    message: string
    size?: ModalType['size']
    onSubmit?: () => void
    onClose?: () => void
  }) => {
    openModal({
      id: generateUniqueId('modal'),
      message,
      size,
      component: ConfirmModal,
      onSubmit,
      onClose,
    })
  }

  // 커스텀 모달
  const showCustomModal = ({
    title,
    message,
    component,
    onSubmit,
    onClose,
    size,
  }: {
    title: string
    message: string
    component: React.ElementType
    size?: ModalType['size']
    onSubmit?: () => void
    onClose?: () => void
  }) => {
    openModal({
      id: generateUniqueId('modal'),
      title,
      message,
      size,
      component,
      onSubmit,
      onClose,
    })
  }

  return {
    showAlert,
    showConfirm,
    showCustomModal,
  }
}
