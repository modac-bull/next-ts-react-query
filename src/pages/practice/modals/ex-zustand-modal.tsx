import Modal from '@/components/ui/modals/zustandModal/Modal'
import { modalStore } from '@/store/modalStore'
import { useId } from 'react'

function HomePage() {
  const { openModal } = modalStore()

  const submitTest = () => {
    console.log('submit test')
  }

  const cancelTest = () => {
    console.log('cancel test')
  }

  return (
    <div>
      <button
        onClick={() =>
          openModal('id1', Modal, 'message11111', submitTest, cancelTest)
        }
      >
        Open Modal
      </button>
      {/* <button onClick={() => openModal('id2', Modal, 'message')}>
        Open custom Modal
      </button> */}
    </div>
  )
}

export default HomePage
