import React, { useEffect, useState } from 'react'
import Layout from '../../Components/layout/layout'

import Cards from '../Components/cards/Cards'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const SingleBlog = () => {

   const {id}=useParams()

    const[blog,setBlog]=useState({})
 async function fetchBlog() {
  try {
    const response = await axios.get(`https://687af384abb83744b7ee48c9.mockapi.io/blog/${id}`);
    if (response.status === 200) {
      setBlog(response.data); 
    }
  } catch (error) {
    console.error("Failed to fetch blog:", error);
  }
 }
     useEffect(()=>{
       fetchBlog()
     },[])



    //delete blog 
const navigate=useNavigate();
      async function deleteblog()
  {
 const response =await axios.delete(`https://687af384abb83744b7ee48c9.mockapi.io/blog/${id}`)

 if(response.status==200)
 {
navigate("/")

  }
  else{
    alert('error occured while deleting ')
  }
}
  return (

<Layout>
  
 <Cards key={blog.id} blog={blog}/>
 <div>
 <Link to='/blog/edit'>
  <button type='submit'> Edit blog</button>
  </Link>
   <Link to='/blog/delete'>
  <button type='submit' onClick={deleteblog}> Delete Blog</button>
  </Link>
 </div>
   
   </Layout>
  )
}

export default SingleBlog