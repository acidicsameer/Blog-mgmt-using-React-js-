import React from 'react'

import Layout from '../../Components/layout/layout'
import Form from '../Components/Form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EditBlog = () => {
const navigate=useNavigate();
   async function handleSubmit(){
    const response = await axios.get("https://687af384abb83744b7ee48c9.mockapi.io/blog");

if(response.status===200)
{
   navigate('/')
}
  }
  return (
    <>
    <Layout>
     

<Form onSubmit={handleSubmit}
  name= 'Edit Blogs' />
    </Layout>
    
    </>
  )
}

export default EditBlog