import {React, useState } from 'react'

const Home = () => {
    const [burger, setBurger] = useState(false);
  return (
    <div className='bg-lime-900 h-96 flex flex-col justify-center text-center items-center text-white gap-7'>
        <header>

            <h1 className=' text-[50px]'>HEader</h1>
            <button className=' text-[30px]' onClick={() => setBurger(true)}>burger</button>
            {burger && (
        <div className="relative ">
          <div className=" text-white bg-emerald-900 w-[350px] duration-300 fixed right-0 top-0 flex flex-col items-center justify-center p-[40px] z-20  h-[100vh]">
            <ul className="flex items-center flex-col gap-7">
              <li>Contact</li>
              <li>Nmadir</li>
              <li>Eshmat</li>
              <li>Toshmat</li>
            </ul>
            <div className="flex items-center gap-2">
              

              <button
                onClick={() => setBurger(false)}
                className="absolute text-[20px] top-0 right-1 px-7 py-3 flex items-center justify-center"
              >
                x
              </button>
            </div>
          </div>
        </div>
      )}
        </header>
         
    </div>
  )
}

export default Home