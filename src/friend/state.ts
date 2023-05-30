import createReducer from '../common/createReducer'

const ADD = 'friend/ADD'
const REMOVE = 'friend/REMOVE'
const EDIT = 'friend/EDIT'

type Friend = {
  id: number
  name: string
}

export const addFriend = friend => ({ type: ADD, friend })
export const removeFriend = friend => ({ type: REMOVE, friend })
export const editFriend = friend => ({ type: EDIT, friend })

const INTIAL_STATE = { friends: [] }

const reducer = createReducer(INTIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter(
      friend => friend.id !== action.friend.id,
    )),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex(
      friend => friend.id === action.friend.id,
    )
    if (index >= 0) {
      state.friends[index] = action.friend
    }
  },
})

export default reducer

// 덕스 패턴
