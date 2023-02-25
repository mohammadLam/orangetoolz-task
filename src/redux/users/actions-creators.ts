import User from '../../interface/User'
import USER_ACTION, { ACTIONS } from './actoin-types'

export const fetchUsers = (users: User[]): ACTIONS => {
  return {
    type: USER_ACTION.fetchUsers,
    payload: users
  }
}
export const getAllUser = (): ACTIONS => {
  return {
    type: USER_ACTION.getAllUsers
  }
}

export const getUser = (userId: string): ACTIONS => {
  return {
    type: USER_ACTION.getUser,
    payload: userId
  }
}

export const createUser = (payload: User): ACTIONS => {
  return {
    type: USER_ACTION.createUser,
    payload
  }
}

export const deleteUser = (userId: string): ACTIONS => {
  return {
    type: USER_ACTION.deleteUser,
    payload: userId
  }
}

export const updateUser = (user: User): ACTIONS => {
  return {
    type: USER_ACTION.updateUser,
    payload: user
  }
}
