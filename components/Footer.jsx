import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="text-black bg-slate-300 body-font">
  <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div    className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link href="/"    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     
        <span className="ml-3 font-bold text-xl cursor-pointer">E-SHOP</span>
      </Link>
      <p    className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, excepturi.</p>
    </div>
    <div    className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div    className="lg:w-[34%] md:w-1/2 w-full px-4">
        <h2    className="title-font  text-gray-900 font-bold tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav    className="list-none mb-10">
          <li className='my-2'>
            <Link href="/"    className="text-gray-600  hover:text-gray-800">Home</Link>
          </li>
          <li>
            <Link href="/shop"    className="text-gray-600 w-[40px] hover:text-gray-800">All products</Link>
          </li>
        
          
        </nav>
      </div>
   
    </div>
     <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div    className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2    className="title-font  text-gray-900 font-bold tracking-widest text-sm mb-3">INFO</h2>
        <nav    className="list-none mb-10">
          <li className='my-2'>
            <Link href="/about"    className="text-gray-600 hover:text-gray-800">About</Link>
          </li>
          <li>
            <Link href="/terms"    className="text-gray-600 hover:text-gray-800">Terms</Link>
          </li>
          
          
        </nav>
      </div>
   
    </div>
  </div>
  <div    className=" text-center  bg-slate-300">
    <div    className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p    className="text-black-500 text-sm text-center w-[100vw] font-bold">&copy; 2022  E-SHOP || All Right Reserved </p>
      <span    className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer