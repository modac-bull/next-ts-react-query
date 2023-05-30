import { Draft, produce } from 'immer'

// type State = typeof initialState
type Action = { type: string }

export default function createReducer<T>(
  initialState: T,
  handlerMap: { [key: string]: (state: Draft<T>, action: Action) => void },
) {
  return function (state: T = initialState, action: Action) {
    return produce(state, (draft: Draft<T>) => {
      const handler = handlerMap[action.type]
      if (handler) {
        handler(draft, action)
      }
    })
  }
}
