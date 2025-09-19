import React from 'react'
import Home from './Pages/blogs/Home'
 import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Register from './auth/Register'
import Login from './auth/Login'
import AddBlog from './Pages/blogs/AddBlog'
import EditBlog from './Pages/blogs/EditBlog'
import SingleBlog from './Pages/blogs/SingleBlog'
import Contact from './Pages/blogs/Contact'
const App = () => {
  return (
<>

<BrowserRouter>
<Routes>
<Route  path='/' element={<Home/>}/>

<Route  path='/register' element={<Register/>}/>
<Route  path='/login' element={<Login/>}/>
<Route  path='/blog/add' element={<AddBlog/>}/>
<Route  path='/blog/edit' element={<EditBlog/>}/>
<Route  path='/blog/:id' element={<SingleBlog/>}/>
<Route  path='/contact' element={<Contact/>}/>
</Routes>


</BrowserRouter>




</>  )
}

export default App