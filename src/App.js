
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import {AuthProvider} from './AuthContext'
import { useEffect, useState } from 'react';
import auth from './Firebase';
import {onAuthStateChanged} from 'firebase/auth'

function App() {
const [currentUser,setCurrentUser] = useState(null)


useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    setCurrentUser(user)
  })
},[])

  return (
    <>
    <Router>
    <AuthProvider value={{currentUser}}>
    <Routes>
      <Route exact path="/" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/home" element={<Home/>} />
    
      </Routes>
      </AuthProvider>
    </Router>
    </>
  );
}

export default App;
