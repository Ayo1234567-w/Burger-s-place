import React from 'react'
import { Combos } from '../Combos'

const Combos = () => {
  return (
    <>
    <main>
        <a
                    onClick={() => setSelectedCategory(Combos)}
                    href="#combos"
                    className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100"
                  >
                    <img
                      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/combos_we0lfx.svg"
                      className="rounded-box w-[120px] h-[120px] object-contain"
                    />
                    <p>Combos</p>
                  </a>
    </main>
    </>
  )
}

export default Combos