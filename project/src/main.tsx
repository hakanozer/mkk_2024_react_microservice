import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Control from './pages/Control'

// Routes Object
const routes =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/dashboard' element={ <Control item={<Dashboard/>}/> }/>
  </Routes>
</BrowserRouter>

ReactDOM.createRoot(document.getElementById('root')!).render(
  routes
)
