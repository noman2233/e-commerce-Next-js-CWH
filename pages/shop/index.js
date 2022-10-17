import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = ({data}) => {
const  toastHandler=()=>{
  toast.success('Product has beeen added to cart', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}


return (<>
    <h3 className='font-bold text-xl  text-center my-auto'>All Products</h3>     
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
  <div className='flex align-middle justify-center flex-wrap'>
       {data.map((item,index)=>{
         return(
           <div key={index._id} className=' single_product_container my-5' >
                 <div className="  flex-wrap mb-4 w-[260px] mx-5  p-2  flex  flex-col cursor-pointer shadow-md">
                  <Link href={`/product/${item._id}`}>
            <div  className=" h-48 flex align-middle justify-center rounded overflow-hidden" >
              <Image width={200} height={200} objectFit="contain"  alt="ecommerce" className="w-40 flex align-middle justify-center md:justify-center object-contain z-[-1]" src={item.img[0]} />
            </div>
           </Link>
            <div className="mt-4 ">
             
              <h2 className="text-gray-900 text-center title-font text-lg font-medium">{item.title} </h2>
              <p className="mt-1 text-center">${item.price}</p>
           
              <button onClick={toastHandler} className="flex mx-auto my-3 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Add to cart</button>

            </div>
          </div>

                </div>
              
              )
            })} 
    
</div>
  
        </>
)
}

export default index

export async function getServerSideProps() {
  const res =await fetch("http://localhost:3000/api/getproducts");
  const data=await res.json()

  
  return {
    props: {
      data: data,
    },
  };
}
