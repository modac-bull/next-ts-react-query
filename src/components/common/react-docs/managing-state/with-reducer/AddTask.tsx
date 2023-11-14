import Button from '@/components/ui/buttons/Button'
import { useState } from 'react'

type AddTaskProps = {
  onAddTask: (text: string) => void
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState('')
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button
        type="button"
        variant="primary"
        size="sm"
        onClick={() => {
          setText('')
          onAddTask(text)
        }}
      >
        Add
      </Button>
    </>
  )
}
