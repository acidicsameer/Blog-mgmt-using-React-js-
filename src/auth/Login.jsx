import React from 'react'
import LogSign from './authComponent/LogSign'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
 const navigate=useNavigate()
   const handleLogin = async (data) => {
  try {
    const response = await axios.get("https://68c7da005d8d9f5147334a8e.mockapi.io/user", data);
    console.log(data)
     if(response.status===200)
     {
        navigate('/')
     }
   
  } catch (error) {
    console.error("Error during login :", error);
  }
};
  return (
<>

<LogSign onSubmit={handleLogin}
name="Login"
name2="Log in with Google "
name3="Don't have an account?"
name4=" sign up"


/>


</>  )
}

export default Login