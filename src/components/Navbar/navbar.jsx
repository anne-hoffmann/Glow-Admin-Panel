import React from 'react'
import navprofile from '../../assets/nav-profile.svg'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#d1ccd1] p-2 md:p-5 border-b-[1px] border-b-[#020200]'>
      <div className='flex justify-start gap-2 md:gap-5'>
        <img src={logo} alt='logo-img' className='w-[35px] h-[35px] md:w-[50px] md:h[50px]' />
        <div>
          <h1 className='font-serif text-xl md:text-5xl'>Glow</h1>
          <p className='font-sans text-xs md:text-base'>Admin Panel</p>
        </div>
      </div>
      <img src={navprofile} alt='nav-profile' className='w-[50px] md:w-[100px]'/>
    </div>
  )
}

export default Navbar