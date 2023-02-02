import React from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import ProductScreen from './ProductScreen'

function Display({signot,seller,...props}) {
  return (
    <div className=''>
        {/* <Navbar seller={seller} signot={signot}/> */}
        <div  className="bg-[url('https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg')]   bg-cover h-[38rem]"> 
      <div className='bg-gradient-to-t from-white via-transparent to-transparent h-screen'>
      <div  className="w-[94rem] space-y-?  grid grid-cols-9 space-x-2 pt-64 px-2">
      
               <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
          
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
            <ProductCard  
              
              showName 
              showPrice 
              name="Soap"
              price={1099}
              imgURL='https://www.smartpick.co.in/img/pro_land/pearsSoap-background-removed.png'
            />
      </div>

      </div>
        </div>
        
    </div>
  )
}

export default Display