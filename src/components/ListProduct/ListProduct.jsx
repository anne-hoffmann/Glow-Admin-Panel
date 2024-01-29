import React, { useEffect, useState } from 'react'
import CrossIcon from '../../assets/cross-icon.png'

const ListProduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo = async ()=>{
    await fetch('https://glow-server.onrender.com/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const RemoveProduct = async (id)=>{
    await fetch('https://glow-server.onrender.com/removeproduct',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='bg-[#b4c9ce] flex flex-col items-center w-full h-[740px] py-5 px-1 m-3 rounded-xl shadow-lg border-[1px] border-[#020200] overflow-y-auto'>
      <h1 className='font-serif text-4xl py-4'>All Products</h1>
      <div className='grid grid-cols-6 gap-5 w-full px-4 py-4 text-xl font-bold'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='flex flex-col items-center w-full h-[740px] py-5 px-1 m-3 rounded-xl'>
        <hr className='border-1 border-[#020200] bg-[#020200] w-full'/>
        {allproducts.map((product,index)=>{
          return <div key={index} className='grid grid-cols-6 gap-5 w-full px-4 py-6 items-center text-lg'>
              <img src={product.image} className='h-[80px]' />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{RemoveProduct(product.id)}} src={CrossIcon} className='w-[20px] h-[20px] cursor-pointer m-auto' />
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct