import React from 'react'
import Layout from '../../Components/layout/layout'
import Form from '../Components/Form/Form'
import Cards from '../Components/cards/Cards'
 import { Link } from 'react-router-dom'
const SingleBlog = () => {
  return (

<Layout>
    <div className=' justify-center  flex  '>
    <div> <Cards/></div></div>
<Link to ="/blog/edit" > <div className=' w-full  text-center p-2 m-2 b-4 bg-green-900 space-x-3.5'><button className= " dark:text-black text-black text-base font-normal  leading-7"> Edit Blog
</button> </div></Link>
<div><button className= " w-full  m-2 p-2 text-center b-4 bg-red-900 dark:text-black  text-black text-base font-normal  leading-7">Delete Blog</button></div>
  
   </Layout>
  )
}

export default SingleBlog