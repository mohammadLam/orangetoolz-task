import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import User, { CreateUserPayload, UpdateUserPayload } from '../interface/User'
import Api, { Response } from '../lib/api'
import reducer from './rootReducer'
import SAGA_ACTIONS from './sagas/action-type'
import { fetchUsers, createUser, updateUser, deleteUser } from './users/actions-creators'
import USER_ACTION_TYPE from './users/actoin-types'

const sagaMiddleware = createSagaMiddleware()

function* sagaFetchUsersAction() {
  const response: Response = yield Api.fetchUsers()
  yield put(fetchUsers(response.data))
}

function* sagaCreateUser(action: {
  type: USER_ACTION_TYPE.createUser
  payload: CreateUserPayload
}) {
  const user: User = yield Api.createUser(action.payload)
  yield put(createUser(user))
}

function* sagaUpdateUser(action: {
  type: USER_ACTION_TYPE.updateUser
  payload: UpdateUserPayload
}) {
  const user: User = yield Api.udpateUser(action.payload)
  yield put(updateUser(user))
}

function* sagaDeleteUser(action: { type: USER_ACTION_TYPE.deleteUser; payload: string }) {
  const user: User = yield Api.deleteUser(action.payload)
  yield put(deleteUser(action.payload))
}

function* rootSaga() {
  yield takeEvery(SAGA_ACTIONS.createUser, sagaCreateUser)
  yield takeEvery(SAGA_ACTIONS.fetchUsers, sagaFetchUsersAction)
  yield takeEvery(SAGA_ACTIONS.updateUser, sagaUpdateUser)
  yield takeEvery(SAGA_ACTIONS.deleteUser, sagaDeleteUser)
}

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
