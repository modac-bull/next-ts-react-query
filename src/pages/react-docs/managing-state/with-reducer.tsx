import AddTask from '@/components/common/react-docs/managing-state/with-reducer/AddTask'
import TaskList from '@/components/common/react-docs/managing-state/with-reducer/TaskList'
import React, { useState } from 'react'

let nextId = 3
export type TaskType = {
  id: number
  text: string
  done: boolean
}
const initialTasks: TaskType[] = [
  { id: 0, text: '리듀서 학습하기', done: true },
  { id: 1, text: '리듀서 실습하기', done: false },
  { id: 2, text: '리듀서 코드작성하기', done: false },
]

export default function WithReducerPage() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ])
  }

  function handleChangeTask(task: TaskType) {
    setTasks(
      tasks.map(t => {
        if (t.id === task.id) {
          return task
        } else {
          return t
        }
      }),
    )
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter(t => t.id !== taskId))
  }

  return (
    <>
      <h1>리듀서 이해하기</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}
