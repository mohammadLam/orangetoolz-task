import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/outline'

import SAGA_ACTIONS from '../redux/sagas/action-type'

const CreateUser: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState<string>()
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' })

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (user.first_name && user.last_name && user.email) {
      dispatch({
        type: SAGA_ACTIONS.createUser,
        payload: user
      })
      navigate('/')
    } else {
      setError('Please fill all value')
    }
  }

  return (
    <div className='w-[300px] md:w-[648px] lg:w-[996px] mx-auto py-10'>
      <div className='flex justify-between items-center mb-10'>
        <h1 className='text-3xl md:text-4xl font-bold'>Create User</h1>
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

        {error && <p className='text-red-500'>{error}</p>}
        <button
          className='flex gap-x-3 items-center self-start bg-green-500 px-4 py-2 text-white rounded-full'
          type='submit'
        >
          <PlusIcon className='w-5 h-5' />
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateUser
