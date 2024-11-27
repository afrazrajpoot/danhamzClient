import React from 'react'

const Statusbar = ({stage, title}) => {
  return (
    <main className='w-full max-w-[80vw] mt-[2vw] md:mt-0 p-[2.7vw] md:p-[0.7vw] bg-[#152347] rounded-md flex items-center'>
        <p className='text-white text-[1.5vw] md:text-[0.8vw] font-medium cursor-pointer bg-gray-400 rounded-full row-center w-[4.5vw] md:w-[1.5vw] h-[4.5vw] md:h-[1.5vw] '>{stage}</p>
        <h1 className='text-white ml-[2vw] md:ml-[1vw] text-[3vw] md:text-[1vw] font-medium'>{title}</h1>
    </main>
  )
}

export default Statusbar