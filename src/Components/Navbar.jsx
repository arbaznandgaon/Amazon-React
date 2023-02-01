import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

function Navbar({user, signot,seller, ...props }) {
  return (
    <div>
      <div className="h-16 w-screen flex items-center  space-x-1 px-2 pr-4 py-1 bg-[#131921]">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="w-28 flex items-center"
        ></img>

        <div className="  items-center   px-2 ">
          {user? <div>
            <p className="text-white/50 px-2 text-sm font">Delivery to {user.displayName}</p>
          <p className="text-bold text-lg text-white">
            <LocationOnIcon />
            Athani 591-304
          </p>
        
          </div> : <div  className="text-white px-2 text-lg font-semibold pb-3" >Login for delivery </div>}
        </div>

        <div className="flex  h-12">
          {user? <div className="flex">
            <p className="bg-slate-400 p-2 flex rounded-l  text-base">
           <a> All</a>
            <ArrowDropDownIcon />
          </p>
          <input placeholder="" className=" w-[35rem]"></input>
          <button className="bg-yellow-400 w-10 rounded-r px-2">
            <SearchIcon className="h-6" />
          </button>
          <button class="peer flex ml-2 px-2 py-2 border border-[#131921] hover:border-white  text-white ">
              <span>
                {" "}
                <img  className="mr-2 mt-1 h-5  "
                  src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                 
                />
              </span>{" "}
              EN
            </button>
          </div> :<div className="flex">
            <p className="bg-slate-400 p-2 flex rounded-l  text-base">
           <a> All</a>
            <ArrowDropDownIcon />
          </p>
          <input placeholder="" className=" w-[57rem]"></input>
          <button className="bg-yellow-400 w-10 rounded-r px-2">
            <SearchIcon className="h-6" />
          </button>
          <button class="peer flex px-2 py-2 border border-[#131921] hover:border-white  text-white ">
              <span>
                {" "}
                <img  className="mr-2 mt-1 h-5  "
                  src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                 
                />
              </span>{" "}
              EN
            </button>
          </div>}

          <div className="h-12 px-1 flex">
            

        
          </div>
        </div>

        {user? <div className="flex">
          <div className="space-y-0 items-center border border-[#131921]  ">
          <div className="h-12 px-1 flex">
            <div class=" flex flex-col items-center px-2 py-2     text-white ">
              {user? <a > Hello {user.displayName} <a> Account List </a></a> :<a> Account List </a>}
            </div>
            
          </div>
        </div>

        <div className="space-y-0 w-24 items-center border border-[#131921] hover:border-white h-10 ">
          <p className="text-white text-sm">Return</p>
          <p className="text-bold text-xs text-white">& Orders</p>
        </div>

        <div className="space-y-0 items-center border h- border-[#131921]  px-1 flex">
          <ShoppingCartCheckoutOutlinedIcon className="h-14 text-white" />
          <p className="text-bold text-sm text-white">Cart</p>
        </div>
        <button
              className="text-white ml-2 h-8 mt-2 border border-transparent hover:border-white"
              onClick={() => signot()}
            >
              SignOut
            </button>
        </div> : <div></div>}
            <button onClick={()=> seller()} className="text-white border border-transparent hover:border-white pl-2">Sell Product</button>
      </div>
    </div>
  );
}

export default Navbar;
