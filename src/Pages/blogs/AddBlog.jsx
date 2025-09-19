import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Layout from '../../Components/layout/layout'
import Form from '../Components/Form/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cards from '../Components/cards/Cards'
const AddBlog = () => {
const navigate=useNavigate()
   const handleBlog = async (data) => {
  try {
    const response = await axios.post("https://687af384abb83744b7ee48c9.mockapi.io/blog", data);
    console.log(response)
     if(response.status===201);
  {
     navigate('/');
  }
}
  catch( error)
  {
console.log("error ",error)
  }
<Cards 

/>

  }
  return (
  <>
<Layout>

  <Form onSubmit={handleBlog}
    name= 'Add Blogs'
  />
</Layout>
 
  
  </>
  )

   }

export default AddBlog