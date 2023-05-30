import { createStore, combineReducers } from 'redux'
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from './timeline/state'

import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from './friend/state'

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
})
const store = createStore(reducer)
store.subscribe(() => {
  const state = store.getState()
  console.log(state)
})

store.dispatch(addTimeline({ id: 1, desc: '코딩을 즐거워' }))
