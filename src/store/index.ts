// redux
import { createStore, Reducer } from 'redux'

interface CounterState {
  counter: number
  showCounter: boolean
}

interface IncrementAction {
  type: 'INCREMENT'
}

interface DecrementAction {
  type: 'DECREMENT'
}

interface IncreaseAction {
  type: 'INCREASE'
  amount: number
}

export interface ToggleAction {
  type: 'TOGGLE'
}

type CounterAction =
  | IncrementAction
  | DecrementAction
  | IncreaseAction
  | ToggleAction

const initialState = { counter: 0, showCounter: true }
const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    // 타입 오타를 조심해야 한다.
    case 'INCREMENT':
      // 절대 state를 직접 수정하면 안됨
      // 왜냐면 redux는 state가 변경되었는지를 감지하기 위해
      // 이전 state와 현재 state를 비교하기 때문
      return { counter: state.counter + 1, showCounter: state.showCounter }
    case 'INCREASE':
      return {
        // 상태가 많아질수록 ...state를 사용하는 것이 좋다.
        // 그래도 복잡해진다.
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      }
    case 'TOGGLE':
      return { showCounter: !state.showCounter, counter: state.counter }
    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store
