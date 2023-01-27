import React from 'react'
import Navbar from './Navbar'

function Display({signot,seller,...props}) {
  return (
    <div>
        <Navbar seller={seller} signot={signot}/>
        <div  className="bg-[url('https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg')]   bg-cover h-[38rem]"> 
      <div className='bg-gradient-to-t from-white via-transparent to-transparent h-screen'>
s
      </div>
        </div>
        
    </div>
  )
}

export default Display