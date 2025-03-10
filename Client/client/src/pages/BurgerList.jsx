import React from 'react'
import { Burgers } from "../Burger.js"
import star2 from "../assets/Star 2.png"


const Products = () => {


  return (
    <>
    <main>
      <div>
      <div className="bg-black w-full min-h-screen">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto px-5 md:px-10 lg:px-[130px] py-4">
    {Burgers.map((burger) => (
      <div key={burger._id} className="bg-[#2F2F2F] text-white p-4 rounded-lg">
        <img src={burger.image} alt={burger.title} className="w-full h-[200px] object-cover rounded-lg" />

        <div className='flex justify-between items-center mt-2'>
          <h2 className="text-lg">{burger.title}</h2>
          <button>
            <img className='w-[45px] my-3' src={star2} alt="Star Icon" />
          </button>
        </div>

        <div className='flex justify-between items-center mt-2'>
          <p className="text-[#B67B0F]">&#8358;{burger.price}</p>
          <p className='text-[#FBFBFB] text-sm'>{burger.duration}</p>
        </div>

        <button className="bg-[#B67B0F] text-[#FBFBFB] w-full h-10 rounded-2xl mt-3">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>





      </div>
    </main>
    </>
  )
  
}

export default Products