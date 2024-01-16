import React, { useState } from 'react'
import UploadArea from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
      name:"",
      image:"",
      category:"face",
      new_price:"",
      old_price:""
    })

    const imageHandler = (e)=>{
      setImage(e.target.files[0]);
    }
    const changeHandler = (e)=>{
      setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
      console.log(productDetails);
      let responseData;
      let product = productDetails;

      let formData = new FormData();
      formData.append('product',image);

      await fetch('http://localhost:4000/upload',{
        method: 'POST',
        headers:{
          Accept:'application/json'
        },
        body:formData,
      }).then((resp) => resp.json()).then((data)=>{responseData=data})

      if(responseData.success)
      {
        product.image = responseData.image_url;
        console.log(product);
        await fetch('http://localhost:4000/addproduct',{
          method: 'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(product),
        }).then((resp)=>resp.json()).then((data)=>{
          responseData.success?alert("Product Added"):alert("Failed")
        })
      }
    }

  return (
    <div className='box-border w-fit h-fit md:w-3/6 px-[30px] py-[30px] md:py-[50px] mx-[20px] my-[30px] rounded-md bg-[#ebed94] shadow-lg border-[1px] border-[#020200]'>
      <div className='w-full text-lg'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' className='box-border w-full h-[50px] rounded-lg pl-[15px] my-5' />
      </div>
      <div className='flex gap-5'>
        <div className='w-full text-lg'>
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' className='box-border w-full h-[50px] rounded-lg pl-[15px] my-5' />
        </div>
        <div className='w-full text-lg'>
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' className='box-border w-full h-[50px] rounded-lg pl-[15px] my-5' />
        </div>
      </div>
      <div className='w-full text-lg'>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='pl-[15px] w-[100px] h-[50px] rounded-lg my-5'>
          <option value='face'>Face</option>
          <option value='body'>Body</option>
          <option value='hair'>Hair</option>
        </select>
      </div>
      <div className='w-full text-lg'>
        <label htmlFor='file-input'>
          <img src={image?URL.createObjectURL(image):UploadArea} className='h-[120px] w-[120px] rounded-lg object-contain my-5' />
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
      </div>
      <button onClick={()=>{Add_Product()}} className='w-24 h-12 bg-[#020200] cursor-pointer rounded-2xl text-white hover:scale-110'>ADD</button>
    </div>
  )
}

export default AddProduct;