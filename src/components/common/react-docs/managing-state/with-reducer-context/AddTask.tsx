import Button from '@/components/ui/buttons/Button'
import { useTasksDispatch } from '@/context/react-docs/TasksContext'
import { useState } from 'react'

let nextId = 3

export default function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()
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
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          })
        }}
      >
        Add
      </Button>
    </>
  )
}
