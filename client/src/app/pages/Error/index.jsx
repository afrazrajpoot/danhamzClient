import React, { useEffect } from 'react'

const Error = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/'
        }, 2000)
    }, [])
  return (
    <main className='w-full flex flex-col h-screen justify-center items-center'>
     <h1 className='text-8vw text-amber-500 md:text-[4vw] italic font-bold'>404</h1>
    <h1 className='text-[6vw] text-[#152347] md:text-[2vw] italic font-bold'>Page Not Found</h1>
    <p className='text-[3vw] text-[#152347] md:text-[1vw] italic font-medium'>The page you are looking for does not exist.</p>
    </main>
  )
}

export default Error