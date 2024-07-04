import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

// import pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Control from './pages/Control'
import Profile from './pages/Profile'
import Layout from './pages/Layout'
import ProductDetail from './pages/ProductDetail'
import { Provider } from 'react-redux'
import { store } from './useRedux/Store'
import Search from './pages/Search'
import { TokenProvider } from './util/TokenContext'

// Routes Object
const routes = () =>
<Provider store={store}>
  <TokenProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Layout />} >
        <Route path='/dashboard' element={ <Control item={<Dashboard/>}/> }/>
            {/*<Route element={<TokenProvider><Outlet/></TokenProvider>}>*/}
              <Route path='/profile' element={ <Control item={<Profile/>}/> }/>
              <Route path='/detail/:pid' element={ <Control item={<ProductDetail/>}/> }/>
              <Route path='/search' element={ <Control item={<Search/>}/> }/>
            {/*</Route>*/}
      </Route>
    </Routes>
  </BrowserRouter>
  </TokenProvider>
</Provider>

ReactDOM.createRoot(document.getElementById('root')!).render(
  routes()
)
