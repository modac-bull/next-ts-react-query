import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '@/store/index'
import 'twin.macro'

// store 블러오기
const Counter = () => {
  const dispatch = useDispatch()

  // store 블러오기
  const counter = useSelector((state: any) => {
    return state.counter.counter
  })
  const show = useSelector((state: any) => state.counter.showCounter)

  console.log('show : ', show)

  const toggleCounter = () => {
    dispatch(counterActions.toggle())
  }
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' })
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    // dispatch({ type: 'INCREASE', amount: 5 })
    dispatch(counterActions.increase({ amount: 5 }))
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
