import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import AddProduct from './component/AddProduct'
import EditProduct from './component/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
    </Routes>
    </>
  )
}

export default App
