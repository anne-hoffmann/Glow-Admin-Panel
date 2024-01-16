import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct'
import ListProduct from '../../components/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='md:flex md:gap-10 bg-[#f5f1f2]'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin