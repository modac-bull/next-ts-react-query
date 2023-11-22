import { createStore, useStore } from '@/utils/createStore'
import React from 'react'

const store = createStore({ count: 0 })

export default function VannilaStorePage() {
  const [state, setState] = useStore(store)

  function handleClick() {
    setState(prev => ({ count: prev.count + 1 }))
    console.log('state : ', state)
  }

  return (
    <>
      <Counter1 />
      <Counter2 />
    </>
  )
}

function Counter1() {
  const [state, setState] = useStore(store)

  function handleClick() {
    setState(prev => ({ count: prev.count + 1 }))
    console.log('state : ', state)
  }

  return (
    <>
      <h3>Counter1 : {state.count}</h3>
      <button onClick={handleClick}>+</button>
    </>
  )
}

function Counter2() {
  const [state, setState] = useStore(store)

  function handleClick() {
    setState(prev => ({ count: prev.count + 1 }))
    console.log('state : ', state)
  }

  return (
    <>
      <h3>Counter2 : {state.count}</h3>
      <button onClick={handleClick}>+</button>
    </>
  )
}
