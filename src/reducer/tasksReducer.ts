import { TaskType } from '@/pages/react-docs/managing-state/with-reducer'

export type TaskActionType =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: TaskType }
  | { type: 'deleted'; id: number }

export default function tasksReducer(
  tasks: TaskType[],
  action: TaskActionType,
) {
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
