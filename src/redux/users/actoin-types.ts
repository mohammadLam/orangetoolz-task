import User, { CreateUserPayload } from '../../interface/User'

enum USER_ACTION_TYPE {
  fetchUsers = 'user/fetchUsers',
  getAllUsers = 'user/getAllUsers',
  getUser = 'user/getUser',
  createUser = 'user/createUser',
  updateUser = 'user/updateUser',
  deleteUser = 'user/deleteUser'
}

interface FetchUsers {
  type: USER_ACTION_TYPE.fetchUsers
  payload: User[]
}

interface GetAllUsers {
  type: USER_ACTION_TYPE.getAllUsers
}

interface GetUser {
  type: USER_ACTION_TYPE.getUser
  payload: string
}

interface CreateUser {
  type: USER_ACTION_TYPE.createUser
  payload: User
}

interface UpdateUser {
  type: USER_ACTION_TYPE.updateUser
  payload: User
}

interface DeleteUser {
  type: USER_ACTION_TYPE.deleteUser
  payload: string
}

export type ACTIONS = FetchUsers | GetAllUsers | GetUser | CreateUser | UpdateUser | DeleteUser

export default USER_ACTION_TYPE
