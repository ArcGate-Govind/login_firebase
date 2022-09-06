import React, { useState } from 'react'
import '../Component/Register.css'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'
import auth from './../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const Register = () => {
    let navigate = useNavigate()

    const [user,setUser] =useState({})
    let name, value;
    const postUser =(event) =>{
        name=event.target.name;
        value=event.target.value;
    setUser({...user, [name]:value})    
    }

    const insertData = async(e) =>{
        e.preventDefault()
        vaildation()
        createUserWithEmailAndPassword(auth,user.email,user.password)
        .then(res => {
         console.log(res)
         alert("User registered Successfull")
        //  setUser({})
         navigate('/login')
        })
        .catch(err => alert(err.message))
    }
 

    const vaildation = () => {
      if (user.password !== user.reEnterpassword) {
          alert('Password not matched')
        }   
    }

  return (
    <div className="register">
    <form>
      <h1>Register</h1>
         <input aria-label="email-input" type="text" name="email" value={user.email} placeholder="Your Email" onChange={postUser}></input>
      <input aria-label="password-input" type="password" name="password" value={user.password} placeholder="Your Password"  onChange={postUser} ></input>
      <input aria-label="repassword-input" type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder="Re-enter Password" onChange={postUser} ></input>
      <button data-testid="submit-form"  className="button" type="submit" onClick={insertData} >Register</button>
      <div>or</div>
      <Link to='/login' className="button">Login</Link>
    
    </form>
    </div>
    
  )
}

export default Register