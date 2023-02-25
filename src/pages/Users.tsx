import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { State } from '../redux'
import User from '../components/User'
import SAGA_ACTIONS from '../redux/sagas/action-type'

const Users: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const users = useSelector((state: State) => state.usersReducer)

  useEffect(() => {
    dispatch({
      type: SAGA_ACTIONS.fetchUsers
    })
  }, [])

  return (
    <div className='w-[300px] md:w-[648px] lg:w-[996px] mx-auto py-10'>
      <div className='flex justify-between items-center mb-10'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Users</h1>
        <button
          className='text-white bg-orange-500 py-2 px-4 rounded-full'
          onClick={() => navigate('/user/create')}
        >
          Create User
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users
