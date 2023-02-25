import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { State } from '../redux'
import SAGA_ACTIONS from '../redux/sagas/action-type'

const UpdateUser: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // if userId not available on params object
  if (!userId) return <Navigate to='/' />

  // get user from store
  const userObj = useSelector((state: State) =>
    state.usersReducer.find(user => user.id.toString() === userId)
  )

  // if user not available in store
  if (!userObj) return <Navigate to='/' />

  const [user, setUser] = useState(userObj)

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({
      type: SAGA_ACTIONS.updateUser,
      payload: user
    })
    navigate('/')
  }

  return (
    <div className='w-[300px] md:w-[648px] lg:w-[996px] mx-auto py-10'>
      <div className='flex justify-between items-center mb-10'>
        <h1 className='text-3xl md:text-4xl font-bold'>Update {user.first_name}</h1>
        <button
          className='flex gap-x-3 bg-orange-500 rounded-full text-white px-4 py-2 items-center'
          onClick={() => navigate('/')}
        >
          <ArrowLeftIcon className='w-5 h-5' /> Back
        </button>
      </div>

      <form className='flex flex-col gap-y-5' onSubmit={onSubmitHandler}>
        <input
          type='text'
          className='border px-3 py-2'
          placeholder='First Name'
          onChange={event => setUser({ ...user, first_name: event.target.value })}
          value={user.first_name}
        />
        <input
          type='text'
          className='border px-3 py-2'
          placeholder='Last Name'
          onChange={event => setUser({ ...user, last_name: event.target.value })}
          value={user.last_name}
        />
        <input
          type='text'
          className='border px-3 py-2'
          placeholder='Email'
          onChange={event => setUser({ ...user, email: event.target.value })}
          value={user.email}
        />
        <button
          className='flex gap-x-3 items-center self-start bg-green-500 px-4 py-2 text-white rounded-full'
          type='submit'
        >
          <ArrowPathIcon className='w-5 h-5' />
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateUser
