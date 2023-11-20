import AddTask from '@/components/common/react-docs/managing-state/with-reducer-context/AddTask'
import TaskList from '@/components/common/react-docs/managing-state/with-reducer-context/TaskList'
import {
  TasksContext,
  TasksDispatchContext,
} from '@/context/react-docs/TasksContext'
import tasksReducer from '@/reducer/tasksReducer'
import React, { useReducer, useState } from 'react'

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
export default function WithReducerContextPage() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  /* 
  TODO
  Reducer와 context를 결합하는 방법
  1. context를 생성한다.
  2. state와 dispatch 함수를 context에 넣는다.
  3. 트리 안에서 context를 사용한다.
  */

  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <h1>리듀서 이해하기</h1>
          <AddTask />
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  )
}
