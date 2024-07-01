import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login'

// Routes Object
const routes =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
  </Routes>
</BrowserRouter>

ReactDOM.createRoot(document.getElementById('root')!).render(
  routes
)
