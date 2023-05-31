import { useState } from 'react'

// Custom Hook 생성
const useDialog = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return { open, handleOpen, handleClose }
}

export default useDialog
