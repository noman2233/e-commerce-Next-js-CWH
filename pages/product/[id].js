import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({data}) => {
  // console.log(data)
  const toasthandler=()=>{
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
    const router = useRouter();
    const { slug } = router.query;
  return (
    
    <section className="text-gray-600 body-font font-abc overflow-hidden">
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex align-middle justify-center flex-wrap">
          <img alt="ecommerce" className="lg:w-1/3 w-[230px]  object-contain lg:h-96 md:h-76   rounded" src={data.product?.img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font font-semibold text-gray-500 my-2 tracking-widest">{data.product?.cat}</h2>
            <h1 className="text-gray-900 text-3xl my-4 title-font font-bold mb-1">{data.product?.title}</h1>

            <p className="leading-relaxed">{data.product?.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

              <div className="flex ml-6 items-center">


              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">$ {data.product?.price}</span>
              <button onClick={toasthandler} className=" cart flex ml-4 text-white bg-indigo-500 border-0  py-2 px-4 focus:outline-none lg:w-32 hover:bg-indigo-600 rounded md:w-4  md:px-6 text-sm" >Add to cart</button>
              <Link href="/cart">
              <button className=" cart flex ml-4 text-white bg-indigo-500 border-0  py-2 px-4 focus:outline-none lg:w-32 hover:bg-indigo-600 rounded md:w-4  md:px-6 text-sm">Order page
              </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>

//               )
// })}

//   </div>

  )
}

export default Slug

export async function getServerSideProps({params}) {
  console.log(params)
  const res =await fetch(`http://localhost:3000/api/product/${params.id}`);
  const data=await res.json()
  
  return {
    props: {
      data: data,
    },
  };
}
