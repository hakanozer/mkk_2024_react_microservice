import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ICustomer } from '../models/ICustomer'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../useRedux/Store'
import { allLikes } from '../util/util'
import { LikesAction } from '../useRedux/LikesAction'
import { LikesType } from '../useRedux/LikesType'
import { useCartStore } from '../stores/cartStore'
import { TokenContext } from '../util/TokenContext'

function Navbar( props: {user: ICustomer} ) {

  const tokenContext = useContext(TokenContext)
  const allLikesArr = useSelector((obj: StateType) => obj.LikesReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useCartStore((state) => state.items)
  
  useEffect(() => {
    const arr = allLikes()
    const sendObj: LikesAction = {
      type: LikesType.LIKES_ADD,
      payload: arr
    } 
    dispatch(sendObj)
  }, [])

  const logout = () => {
    localStorage.removeItem('customer')
    navigate('/')
  }

  const [q, setQ] = useState('')
  const searchFnc = (evt: FormEvent) => {
    evt.preventDefault()
    navigate('/search?q='+q)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to='/dashboard' className="nav-link" aria-current="page" >Dashboard</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/profile' className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customer
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" role='button' onClick={logout}>Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">{props.user.firstName} {props.user.lastName} ({allLikesArr.length}) - Cart: ({items.length}) - {tokenContext.token}</a>
            </li>
        </ul>
        <form onSubmit={searchFnc} className="d-flex" role="search">
            <input onChange={(evt) => setQ(evt.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default Navbar