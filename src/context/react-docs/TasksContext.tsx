import { TaskType } from '@/pages/react-docs/managing-state/with-reducer'
import React, { createContext, useContext, useReducer } from 'react'

const initialTasks: TaskType[] = [
  { id: 0, text: '리듀서 학습하기', done: true },
  { id: 1, text: '리듀서 실습하기', done: false },
  { id: 2, text: '리듀서 코드작성하기', done: false },
]

export type TaskActionType =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: TaskType }
  | { type: 'deleted'; id: number }

/**
 * 현재 tasks 리스트를 제공
 */
export const TasksContext = createContext<TaskType[] | null>(null)
/**
 * action을 dispatch 하는 함수를 제공
 */
export const TasksDispatchContext = createContext<
  React.Dispatch<TaskActionType>
>(null!)

type TaskProviderProps = {
  children: React.ReactNode
}

export function TasksProvider({ children }: TaskProviderProps) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

function tasksReducer(tasks: TaskType[], action: TaskActionType) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action)
    }
  }
}



/* 

요약
- Reducer와 context를 결합해서 컴포넌트가 상위 state를 읽고 수정할 수 있게 할 수 있음.
- State와 dispatch 함수를 하위 컴포넌트들에 제공하는 방법
  1. 두 개의 context를 만듭니다(각각 state와 dispatch 함수를 위한 것).
  2. Reducer를 사용하는 컴포넌트에 두 context를 모두 제공
  3. 하위 컴포넌트들에서 필요한 context를 사용
- 더 나아가 하나의 파일로 합쳐서 컴포넌트들을 정리 가능
  - Context를 제공하는 TasksProvider 같은 컴포넌트를 내보낼 수 있음
  - 바로 사용할 수 있도록 useTasks와 useTasksDispatch 같은 사용자 Hook을 내보낼 수 있음
- context-reducer 조합을 앱에 여러 개 만들 수 있음
*/