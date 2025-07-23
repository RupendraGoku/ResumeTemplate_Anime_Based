import React from 'react'

const practice = () => {
  return (
    <>
    <div className="">
       <p className="read-the-docs text-white text-bold text-2xl text-center p-2 bg-amber-400 ">
        Click on the Vite and React logos to learn more
      </p>
      </div>   

      <div className=" flex flex-col justify-center items-center ">
        <div className="h-16 w-16 rounded-full bg-[#FF9933] m-4 "></div>
        <div className=" h-16 w-16 rounded bg-white m-4"></div>
        <div className="h-16 w-16 rounded-2xl bg-[#138808] m-4"></div>
      </div> 
      <div className="grid grid-cols-6 place-items-center  mx-4">
        <div className="h-16 w-16 rounded-full bg-[#FF9933] m-4 "></div>
        <div className=" h-16 w-16 rounded bg-white m-4"></div>
        <div className="h-16 w-16 rounded-2xl bg-[#138808] m-4"></div>
        <div className="h-16 w-16 rounded-full bg-[#FF9933] m-4 "></div>
        <div className=" h-16 w-16 rounded bg-white m-4 place-items-center">
          <div className="h-15 w-15 rounded-full bg-blue-950 mt-0.5 "></div>
        </div>
        <div className="h-16 w-16 rounded-2xl bg-[#138808] m-4"></div>
      </div></>
  )
}

export default practice