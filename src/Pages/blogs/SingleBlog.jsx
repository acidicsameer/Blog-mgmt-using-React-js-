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
 <div className="flex space-x-4 mt-4">
  <Link to="/blog/edit">
    <button
      type="button"
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm"
    >
      Edit Blog
    </button>
  </Link>

  <Link to="/blog/delete">
    <button
      type="button"
      onClick={deleteblog}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 shadow-sm"
    >
      Delete Blog
    </button>
  </Link>
</div>

   
   </Layout>
  )
}

export default SingleBlog