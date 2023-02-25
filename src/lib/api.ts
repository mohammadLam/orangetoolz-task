import axios from 'axios'
import User, { CreateUserPayload, UpdateUserPayload } from '../interface/User'

export interface Response {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: Support
}

interface Support {
  url: string
  text: string
}

const Api = {
  async fetchUsers() {
    try {
      const response = await axios.get<Response>('https://reqres.in/api/users?page=1')
      return response.data
    } catch (error) {
      throw error
    }
  },
  async createUser(payload: CreateUserPayload) {
    try {
      const response = await axios.post<User>('https://reqres.in/api/users', payload)
      return response.data
    } catch (error) {
      throw error
    }
  },
  async udpateUser(payload: UpdateUserPayload) {
    try {
      const response = await axios.put<User>(`https://reqres.in/api/users/${payload.id}`, payload)
      return response.data
    } catch (error) {
      throw error
    }
  },
  async deleteUser(payload: string) {
    try {
      const response = await axios.delete<User>(`https://reqres.in/api/users/${payload}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default Api
