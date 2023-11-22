import { createStore, useStore, useStoreSelector } from '@/utils/createStore'
import { create } from 'domain'
import React, { ChangeEvent, useCallback, useEffect } from 'react'

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

      <Counter3 />
      <TextEditor />
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

const storeObject = createStore({ count: 0, text: 'hi' })

function Counter3() {
  const counter = useStoreSelector(
    storeObject,
    useCallback(state => state.count, []),
  )

  function handleClick() {
    storeObject.set(prev => ({ ...prev, count: prev.count + 1 }))
  }

  useEffect(() => {
    console.log('counter rendered')
  }, [])

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={handleClick}>+</button>
    </>
  )
}

const textSelector = (state: ReturnType<typeof storeObject.get>) => state.text

function TextEditor() {
  const text = useStoreSelector(storeObject, textSelector)

  useEffect(() => {
    console.log('Counter Rendered')
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    storeObject.set(prev => ({ ...prev, text: e.target.value }))
  }

  return (
    <>
      <h3>Text</h3>
      <input type="text" value={text} onChange={handleChange} />
    </>
  )
}
