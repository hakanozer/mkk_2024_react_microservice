import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Control from './pages/Control'
import Profile from './pages/Profile'
import Layout from './pages/Layout'
import ProductDetail from './pages/ProductDetail'

// Routes Object
const routes =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/' element={<Layout />} >
      <Route path='/dashboard' element={ <Control item={<Dashboard/>}/> }/>
      <Route path='/profile' element={ <Control item={<Profile/>}/> }/>
      <Route path='/detail/:pid' element={ <Control item={<ProductDetail/>}/> }/>
    </Route>
  </Routes>
</BrowserRouter>

ReactDOM.createRoot(document.getElementById('root')!).render(
  routes
)
