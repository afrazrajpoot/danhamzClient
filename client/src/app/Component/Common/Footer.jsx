import React from 'react'
import { footer } from '../../Data'
import { Link } from 'react-router-dom'
import Chat from '../Chat/Chat'

const Footer = () => {
  return (
    <div className='pb-4vw'>
    <footer className="w-full bg-white flex justify-center items-center p-3vw">
      <main className='border-t-[1.7px] w-full md:max-w-[80vw] p-2vw border-[#152347]'>
        <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-[10vw] md:gap-0 items-start w-full">
          {footer?.map((item, index)=> {
            return <section className={`w-40vw md:w-[18vw]`} key={index}>
              <h1 className='text-[#152347] font-semibold text-[3.5vw] xl:text-[1.2vw]  lg:text-[1.2vw]  md:text-[1.2vw] '>{item?.title}</h1>
              <img src={item?.logo} alt="" />
              <div className="">
                {item?.Links?.map((link, index)=> (
                  <main className='' key={index}>
                    <Link to={link?.url} target='_blank' className='flex mt-0.3vw p-[0.5vw] hover:underline items-start'>
                      <span className='text-[3vw] xl:text-[1.3vw]  mt-0.2vw  lg:text-[1.3vw]  md:text-[1.3vw] text-[#152347]'>{link?.icon}</span>
                      <span className={`text-[3vw] xl:text-[1vw] lg:text-[1vw]  md:text-[1vw] font-medium ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
                <h1 className='text-[#152347] font-semibold mt-vw text-[3.2vw] md:text-[1.3vw]'>{item?.find}</h1>
                {item?.social?.map((link, index)=> (
                  <main className='w-full' key={index}>
                    <Link to={link?.url} target='_blank' className='flex w-full p-[0.5vw] mt-0.3vw hover:underline items-center'>
                      <span className='text-[3vw] xl:text-[1vw]  lg:text-[1vw]  md:text-[1vw] font-medium text-[#152347]'>{link?.icon}</span>
                      <span className={`text-[3vw] xl:text-[1vw]  lg:text-[1vw]  md:text-[1vw] font-medium ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
              </div>
            </section>
          })}
        </div>
      </main>
    </footer>
        <div className="w-full flex justify-between items-center p-2vw md:p-vw bg-[#152347]">
          <p className='text-[3vw] xl:text-[1vw]  lg:text-[1vw]  md:text-[1vw] text-white'>© Danhamz Ltd trading 2022 All Rights Reserved</p>
        </div>
        <div className="absolute1">
        </div>
    </div>
  )
}

export default Footer