import React from 'react'
import { getUser } from '../util/util'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Control(props: { item: JSX.Element }) {

  const user = getUser()

  return (
    <>
      {
        user === null 
        ?
        <Navigate to='/'  />
        :
        <>
          {/*<Navbar user={user} />*/}
          {props.item}
        </>
      }
    </>
  )
}

export default Control