import { v4 as uuidv4 } from 'uuid'
import User from '../../interface/User'
import USER_ACTION, { ACTIONS } from './actoin-types'

const initialState: User[] = []

const usersReducer = (state: User[] = initialState, action: ACTIONS): User[] => {
  switch (action.type) {
    case USER_ACTION.fetchUsers:
      if (state.length === 0) {
        return [...action.payload]
      } else {
        return [...state]
      }

    case USER_ACTION.getAllUsers:
      return [...state]

    case USER_ACTION.createUser:
      return [...state, { ...action.payload, id: uuidv4() }]

    case USER_ACTION.updateUser:
      return state.map(user => {
        // update user
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload
          }
        }

        return user
      })

    case USER_ACTION.deleteUser:
      return state.filter(user => user.id !== action.payload)

    default:
      return state
  }
}

export default usersReducer
