import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import IUser from '../interface/User'
import SAGA_ACTIONS from '../redux/sagas/action-type'
interface Props {
  user: IUser
}
const User: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const deleteHandler = (userId: string) => {
    const isWantToDelete = confirm(`Are you wan't to delete ${user.first_name}?`)

    if (isWantToDelete) {
      dispatch({
        type: SAGA_ACTIONS.deleteUser,
        payload: userId
      })
    }
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <div>
        <img
          className='w-[300px] h-[300px] object-cover'
          src={user.avatar ? user.avatar : 'https://wallpapercave.com/wp/wp9566386.jpg'}
          alt={user.email}
        />
      </div>
      <Link to={`/user/${user.id}`}>
        <div>
          <h2 className='text-3xl font-semibold'>{`${user.first_name} ${user.last_name}`}</h2>
          <p>{user.email}</p>
        </div>
      </Link>
      <div className='flex gap-x-2'>
        <button
          className='bg-green-600 text-white px-2 py-1 rounded-full'
          onClick={() => navigate(`/user/update/${user.id}`)}
        >
          Update
        </button>
        <button
          className='bg-red-600 text-white px-2 py-1 rounded-full'
          onClick={() => {
            deleteHandler(user.id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default User
