import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { State } from '../redux'

const User: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()

  // if userId not available on params object
  if (!userId) return <Navigate to='/' />

  // get user from store
  const user = useSelector((state: State) =>
    state.usersReducer.find(user => user.id.toString() === userId)
  )

  // if user not available in store
  if (!user) return <Navigate to='/' />

  return (
    <div className='w-[300px] md:w-[648px] lg:w-[996px] mx-auto py-10'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20'>
        Profile of {user.first_name}
      </h1>
      <div className='flex flex-col md:flex-row gap-y-5 gap-x-14'>
        <div>
          <img
            src={user.avatar ? user.avatar : 'https://wallpapercave.com/wp/wp9566386.jpg'}
            className='w-72 h-72 object-cover'
            alt={user.email}
          />
        </div>
        <div>
          <h2 className='text-4xl font-bold'>{`${user.first_name} ${user.last_name}`}</h2>
          <p className='text-lg text-gray-500'>{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default User
