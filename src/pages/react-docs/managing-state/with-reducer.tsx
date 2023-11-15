import AddTask from '@/components/common/react-docs/managing-state/with-reducer/AddTask'
import TaskList from '@/components/common/react-docs/managing-state/with-reducer/TaskList'
import tasksReducer from '@/reducer/tasksReducer'
import React, { useReducer, useState } from 'react'

let nextId = 3

const initialTasks: TaskType[] = [
  { id: 0, text: '리듀서 학습하기', done: true },
  { id: 1, text: '리듀서 실습하기', done: false },
  { id: 2, text: '리듀서 코드작성하기', done: false },
]

export type TaskType = {
  id: number
  text: string
  done: boolean
}
export default function WithReducerPage() {
  // const [tasks, setTasks] = useState(initialTasks)
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  /* 
  TODO
  리듀서란? 
  - 액션을 이벤트 핸들러로 전달, 상태 업데이트 로직을 따로 관리한다. -> 
  - 사용자의 의도를 명확히 전달
  - dispatch 함수로 type과 상태 업데이트에 필요한 정보들을 action 객체에 담아 보낸다.
  */
  function handleAddTask(text: string) {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false,
    //   },
    // ])
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  function handleChangeTask(task: TaskType) {
    // setTasks(
    //   tasks.map(t => {
    //     if (t.id === task.id) {
    //       return task
    //     } else {
    //       return t
    //     }
    //   }),
    // )
    dispatch({
      type: 'changed',
      task: task,
    })
  }

  function handleDeleteTask(taskId: number) {
    // setTasks(tasks.filter(t => t.id !== taskId))
    dispatch({
      type: 'deleted',
      id: taskId,
    })
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
