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
import { Provider } from 'react-redux'
import { store } from './useRedux/Store'

// Routes Object
const routes =
<Provider store={store}>
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
</Provider>

ReactDOM.createRoot(document.getElementById('root')!).render(
  routes
)
