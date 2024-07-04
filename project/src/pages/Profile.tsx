import React, { useContext, useEffect } from 'react'
import { TokenContext } from '../util/TokenContext'
import { Helmet } from 'react-helmet'

function Profile() {

  const tokenContext = useContext(TokenContext)
  useEffect(() => {
    tokenContext.setToken("newToken123")
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile Detail" />
      </Helmet>
      <div>Profile</div>
      {tokenContext.token}
    </>
    
  )
}

export default Profile