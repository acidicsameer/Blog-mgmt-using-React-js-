import React from 'react'
import LogSign from './authComponent/LogSign'
import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate()
   const handleRegister = async (data) => {
  try {
    const response = await axios.post("https://68c7da005d8d9f5147334a8e.mockapi.io/user", data);
     if(response.status===201)
     {
        navigate('/login')
     }
     else{
         alert(" registration failed bro ")
     }
     
  } catch (error) {
    console.error("Error during register :", error);
  }
};

  return (
    <>
   
<LogSign onSubmit={handleRegister} 

name='SignUp' 
name2='Sign  up with Google'
 name3= " Already Sign in?"
 name4=" log in "

 />

    </>
  )
}

export default Register