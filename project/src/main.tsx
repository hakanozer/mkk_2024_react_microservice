import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Control from './pages/Control'
import Profile from './pages/Profile'
import Layout from './pages/Layout'

// Routes Object
const routes =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />} >
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={ <Control item={<Dashboard/>}/> }/>
      <Route path='/profile' element={ <Control item={<Profile/>}/> }/>
    </Route>
  </Routes>
</BrowserRouter>

ReactDOM.createRoot(document.getElementById('root')!).render(
  routes
)
