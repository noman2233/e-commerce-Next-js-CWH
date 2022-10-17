import Link from 'next/link'
import React from 'react'
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Navbar = () => {
  
  return (
    <div className="Navbar h-[70px] my-6 mt-[20px] sticky top-0 bg-white z-999  md:my-6 sm:my-6 lg:my-6 flex align-middle justify-around">
    <div className="logo flex">
      <Link href="/"><a>

        <h1 className="logo w-[100px] flex sm:w-[130px] md:w-[150px] lg:w-[200px]">
    
          <p className="font-bold text-2xl">E-SHOP</p>
        </h1>
      </a>
      </Link>
    </div>
    <ul className="navbarul flex ">
      <Link href="/">
        <li className="cursor-pointer mx-2 lg:mx-4 font-semibold text-sm md:text-base lg:text-lg">
          Home
        </li>
      </Link>
      <Link href="/shop">
        <li className="cursor-pointer mx-2 lg:mx-4 font-semibold text-sm md:text-base lg:text-lg">
          Shop
        </li>
      </Link>
      <Link href="/about">
        <li className="cursor-pointer mx-2 lg:mx-4 font-semibold text-sm md:text-base lg:text-lg">
          About
        </li>
      </Link>
    </ul>
    <div className='flex space-x-3 py-4'>
      <Link href="/login"><button className="flex mx-auto text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-white hover:text-black hover:border-2 hover:font-semibold rounded text-sm">Login</button></Link>


      {/* <Link href="/signup"><button className="flex mx-auto text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-white hover:text-black hover:border-2 hover:font-semibold rounded text-sm">SignUp</button></Link> */}
    </div>
    <div className="shoppig-icon">
      <Badge color="secondary" badgeContent={1}>
        <ShoppingBagOutlinedIcon onClick={() => setOpen(true)} />
      </Badge>
    </div>

   
  </div> 
  )
}

export default Navbar