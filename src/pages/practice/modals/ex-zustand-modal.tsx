import CustomModal from '@/components/ui/modals/zustandModal/CustomModal'
import Modal from '@/components/ui/modals/zustandModal/Modal'
import { useModalStore } from '@/store/useModalStore'

function HomePage() {
  const { openModal } = useModalStore()

  return (
    <div>
      <button onClick={() => openModal(Modal, 'test', 'test')}>
        Open Modal
      </button>
      <button
        onClick={() =>
          openModal(CustomModal, 'test', 'test', 'sdfasdfasdfsd')
        }   
      >
        Open custom Modal
      </button>
    </div>
  )
}

export default HomePage
