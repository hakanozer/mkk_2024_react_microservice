import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { getUser } from '../util/util'

function Layout() {
  const user = getUser()
  return (
    <>
        <Navbar user={user!}/>
        <Outlet />
    </>
  )
}

export default Layout