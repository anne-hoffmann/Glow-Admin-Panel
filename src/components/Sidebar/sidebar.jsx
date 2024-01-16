import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../../assets/cart-icon.png'
import ListIcon from '../../assets/list-icon.png'

const Sidebar = () => {
  return (
    <div className='flex flex-col-2 justify-center md:justify-start md:flex-col items-center gap-5 pt-2 md:pt-10 md:w-52 md:h-screen w-full h-1/3 bg-[#d1ccd1] border-b-[1px] md:border-r-[1px] border-[#020200]'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className='flex items-center justify-center cursor-pointer w-40 bg-[#f5f1f2] my-2 p-3 gap-5 rounded-xl font-sans text-sm md:text-base'>
                <img src={CartIcon} className='w-[30px] h-[30px] md:w-[50px] md:h-[50px]' />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className='flex items-center justify-center cursor-pointer w-40 bg-[#f5f1f2] my-5 p-3 gap-5 rounded-xl font-sans text-sm md:text-base'>
                <img src={ListIcon} className='w-[30px] h-[30px] md:w-[50px] md:h-[50px]' />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar