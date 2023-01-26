import React from 'react'
import Navbar from './Navbar'

function Display({signot,...props}) {
  return (
    <div>
        <Navbar signot={signot}/>
        <div  className="bg-[url('https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg')] bg-cover h-[38rem]"> 

        </div>
    </div>
  )
}

export default Display