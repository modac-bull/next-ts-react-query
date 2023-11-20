import Button from '@/components/ui/buttons/Button'
import { TasksDispatchContext } from '@/context/react-docs/TasksContext'
import { useContext, useState } from 'react'

let nextId = 3

export default function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useContext(TasksDispatchContext)
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
