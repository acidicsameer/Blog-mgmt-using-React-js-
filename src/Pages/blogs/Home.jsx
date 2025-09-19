import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
 import Layout from '../../Components/layout/layout'
 import Cards from '../Components/cards/Cards'

import axios from 'axios'
import { useState } from 'react'

 const Home = () => {
  const[ blogs,setBlog]=useState([])

   async function fetchBlog(){
  const response= await axios.get("https://687af384abb83744b7ee48c9.mockapi.io/blog")
  setBlog(response.data)

   }
    useEffect(()=>{
     fetchBlog()
   },[])
  return (
    <>
    
   <Layout>
    <div className=' flex justify-around flex-wrap gap-5'>
   
{ 
  
  blogs.length>0 && blogs.map((blog)=>{
return(

<Cards blog={blog} key={blog.id}/>
)
  })}

  
  
   
   
   
   </div>
</Layout>

    
    </>
  )
}

export default Home