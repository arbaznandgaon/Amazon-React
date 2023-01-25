// "use client"
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';




function Navbar() {
  return (
    <div className='space-x-4 w-full h-16 bg-gray-900  flex items-center px-4'>
<img className='w-28' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png '/>
<div className='text-white flex flex-col'>
    <a className='ml-7 text-xs'>Hello </a>
   
    <a className='font-semibold'> <LocationOnIcon/> Select your address</a>
</div>
<div className='text-gray-500 bg-white flex h-10 items-center rounded-lg'>
    <a className='bg-gray- text-xs border-r px-2'>Deals <ArrowDropDownIcon/> </a>
    <input className='rounded-sm h- w-[38rem] h-10' />
    <p className='bg-yellow-400 h-10 w-12 rounded-r-lg flex justify-center items-center'>D</p>
</div>
<div>
    <a className='text-white font-semibold flex space-x-1'> 
    <img className='w-10' src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg'/> <p>EN <ArrowDropDownIcon/></p></a>
</div>
<div className='text-white flex flex-col'>
    <a>Hello, sign in</a>
    
    <a className='font-semibold'>Account and Lists  <ArrowDropDownIcon/></a>
</div>
<div className='text-white flex flex-col'>
    <a>Returns</a>
    {/* <a><LocationOnIcon/></a> */} 
    <a className='font-semibold'>& Orders</a>
</div>
<div className='text-white'>
    <button className='flex items-center'><img className='w-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8sw3JgdpvIw4VqADCWJ9Y_e4mVNDPHMt9dPnAj__ri5bRK01qjfBeYi5rTgrsxiSPgs&usqp=CAU'/>  Cart</button>
</div>

    </div>
  )
}

export default Navbar