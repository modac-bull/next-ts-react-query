import Button from '@/components/ui/buttons/Button'
import { TaskType } from '@/pages/react-docs/managing-state/with-reducer'
import { useState } from 'react'
import { styled } from 'twin.macro'

type TaskListProps = {
  tasks: TaskType[]
  onChangeTask: (task: TaskType) => void
  onDeleteTask: (id: number) => void
}

type TaskProps = {
  task: TaskType
  onChange: (task: TaskType) => void
  onDelete: (id: number) => void
}

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  )
}

function Task({ task, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)
  let taskContent
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value,
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
          onChange({
            ...task,
            done: e.target.checked,
          })
        }}
      />
      {taskContent}
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </label>
  )
}
