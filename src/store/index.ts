// redux-toolkit 으로 변경
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter', // 식별자 역할
  initialState,
  reducers: {
    increment(state) {
      // 실제로 state를 변경하는 것이 아니라
      // 새로운 state를 리턴하는 것이다.
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  },
})

// type을 자동으로 생성해준다. 왜냐하면 createSlice를 사용했기 때문에
// 뒷단에서 자동으로 type을 생성해준다.

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})
export const counterActions = counterSlice.actions

export default store
