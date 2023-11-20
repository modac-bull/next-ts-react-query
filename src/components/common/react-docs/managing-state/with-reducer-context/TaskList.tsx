import Button from '@/components/ui/buttons/Button'
import {
  TasksContext,
  TasksDispatchContext,
} from '@/context/react-docs/TasksContext'
import { TaskType } from '@/pages/react-docs/managing-state/with-reducer'
import { useContext, useState } from 'react'
import { styled } from 'twin.macro'

type TaskProps = {
  task: TaskType
}

export default function TaskList() {
  const tasks = useContext(TasksContext)
  return (
    <ul>
      {tasks?.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useContext(TasksDispatchContext)
  let taskContent
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }}
        />
        <Button
          size="sm"
          type="button"
          variant="primary"
          onClick={() => setIsEditing(false)}
        >
          Save
        </Button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <Button
          size="sm"
          type="button"
          variant="primary"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked,
            },
          })
        }}
      />
      {taskContent}
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id,
          })
        }}
      >
        Delete
      </Button>
    </label>
  )
}
