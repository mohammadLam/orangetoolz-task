export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  avatar?: string
}

export interface CreateUserPayload {
  email: string
  first_name: string
  last_name: string
}

export interface UpdateUserPayload {
  id: string
  email: string
  first_name: string
  last_name: string
}

export default User
