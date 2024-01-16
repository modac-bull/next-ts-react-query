import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'twin.macro'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: { counter: number }) => state.counter)
  const show = useSelector(
    (state: { showCounter: boolean }) => state.showCounter,
  )

  const toggleCounter = () => {
    dispatch({ type: 'TOGGLE' })
  }
  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' })
  }
  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', amount: 5 })
  }
  return (
    <main>
      <h1>Redux Counter</h1>

      {show && (
        <div>
          <div className="value">{counter}</div>
          <div tw="flex flex-col">
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </div>
      )}
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  )
}

export default Counter
