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
    case 'INCREMENT':
      return { counter: state.counter + 1, showCounter: state.showCounter }
    case 'INCREASE':
      return {
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
