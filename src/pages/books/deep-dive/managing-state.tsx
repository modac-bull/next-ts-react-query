import React, { useReducer } from 'react'

type Props = {}

type StoreState = {
  count: number
}

type Action = { type: 'add'; payload: number }

function reducer(prevState: StoreState, action: Action) {
  const { type: ActionType } = action
  switch (ActionType) {
    case 'add':
      return {
        count: prevState.count + action.payload,
      }

    default:
      throw new Error('Unexcepta Ction ')
  }
}

export default function MangingState({}: Props) {
  const [state, dispatcher] = useReducer(reducer, { count: 0 })

  const handleClick = () => {
    dispatcher({ type: 'add', payload: 1 })
  }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
