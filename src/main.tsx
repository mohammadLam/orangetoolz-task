import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from './redux'
import User from './pages/User'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/user/create' element={<CreateUser />} />
          <Route path='/user/update/:userId' element={<UpdateUser />} />
          <Route path='/user/:userId' element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
