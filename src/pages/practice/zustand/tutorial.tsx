import useBearStore from '@/store/useZustandStore'
import React from 'react'

export default function ZustandTutorials() {
  const bearState = useBearStore()
  console.log(bearState)

  const clickHandler = (number: number) => {
    bearState.increase(number)
  }
  return (
    <div>
      ZustandTutorials
      <div>bears : {`${bearState.bears}`}</div>
      <button
        type="button"
        onClick={() => {
          clickHandler(3)
        }}
      >
        3증가
      </button>
      <button
        type="button"
        onClick={() => {
          bearState.reset()
        }}
      >
        초기화
      </button>
    </div>
  )
}
