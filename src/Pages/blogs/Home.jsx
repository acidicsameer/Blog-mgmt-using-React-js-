import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
 import Layout from '../../Components/layout/layout'
 import Cards from '../Components/cards/Cards'
const Home = () => {
  return (
    <>
    
   <Layout>
    <div className=' flex justify-around flex-wrap gap-5'>
   <Cards/>
   <Cards/>

   <Cards/> </div>
</Layout>

    
    </>
  )
}

export default Home