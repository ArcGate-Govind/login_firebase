import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
//import { useCookies } from 'react-cookie';
import '../Component/Login.css'
import auth from '../Firebase'



const Login = () => {
 
const [users, setUsers] = useState({})
const navigate = useNavigate()

 let name ,value;
const checkData = (event) =>{

  name=event.target.name;
  value=event.target.value;
  setUsers({...users ,[name]:value})
}
 const submitForm = (e) =>{
   console.log(users)
  e.preventDefault()
  signInWithEmailAndPassword(auth,users.email,users.password)
  .then(res =>{
    console.log(res)
    alert("Success")
  })
  .catch(error =>{
    alert(error.message)
  })
  navigate('/home')
 }

  
  return (
    <div className="login mb-4">

      <h1>Login</h1>
      <input type="text" name="email" value={users.email}  onChange={checkData} placeholder="Enter your Email"></input>
      <input type="password" name="password" value={users.password}   onChange={checkData} placeholder="Enter your Password" ></input>
      <div className="button" data-testid="submit-form" onClick={submitForm}>Login</div>
      <div>or</div>
      <Link to='/' className="button">Register</Link>



    </div>
  )
}
export default Login 