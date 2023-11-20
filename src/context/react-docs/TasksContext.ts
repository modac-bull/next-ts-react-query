import { TaskType } from '@/pages/react-docs/managing-state/with-reducer'
import { TaskActionType } from '@/reducer/tasksReducer'
import React, { createContext } from 'react'

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
