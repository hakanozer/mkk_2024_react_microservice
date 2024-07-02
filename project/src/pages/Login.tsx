import React, { FormEvent, useState } from 'react'
import { call } from '../util/util'
import { IUser } from '../models/IUser'
import { Car } from '../util/car'
import { login, useLogin } from '../services/loginService'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')
  const [message, setMessage] = useState('')
  
  const navigate =  useNavigate()
  //const { login } = useLogin()
  
  const customerLogin = (evt: FormEvent) => {
    evt.preventDefault()
    if (username == '') {
        setMessage('Username Empty!')
    }else if (password == '') {
        setMessage('Password Empty!')
    }else {
        
        login(username, password).then(res => {
            const dt = res.data
           navigate('/dashboard')
        }).catch(err => {
            console.log(err.message)
            setMessage('username or password fail!')
        })
       
    }
  }

  const register = () => {

  }

  const user:IUser = {
      id: 10,
      name: 'Ali',
      age: 100,
      click: register,
      profile: <button className='btn btn-danger'>Register</button>,
      uid: 0
  }
  //call(user)
  //console.log(user.name.length)
  //console.log(user.status?.valueOf())
  //const bmw = new Car()
  //Car.staticProp = "Veli"
  //Car.createCar()

  return (
    <>
        <div className="row">
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                { message !== '' &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {message}
                    <button onClick={ () => setMessage('')} type="button" className="btn-close"  aria-label="Close"></button>
                </div>
                }
                <form onSubmit={customerLogin}>
                    <div className='mb-3'>
                        <input value={username} onChange={(evt) => setUsername(evt.target.value)} className='form-control' placeholder='Username' />
                    </div>
                    <div className='mb-3'>
                        <input value={password} onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password' />
                    </div>
                    <button className='btn btn-success'>Send</button>
                    { user.profile }
                </form>
                { user.surname &&
                    <div>{user.surname.length}</div>
                }
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}
export const name = "Mehmet"
export default Login