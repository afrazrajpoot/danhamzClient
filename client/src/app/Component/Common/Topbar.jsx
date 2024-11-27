import React from 'react'
import { topbar } from '../../Data'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

const Topbar = () => {
    const nav  = [
        {title: 'Lettings', path: '/lettings'},
        {title: 'Sales', path: '/sales'},
        {title: 'Nightly Lets', path: 'https://www.quick-nests.com'},
    ]
  return (
    <>
    <div className="bg-[#152347] w-full flex justify-center items-center">
        <div className="w-full p-[2.5vw] xl:p-vw lg:p-vw md:p-vw max-w-[80vw]">
            {topbar?.map((item, index) => {
                return <main key={index} className="flex justify-between items-center">
                    <section className=" items-center hidden xl:flex lg:flex md:flex">
                        <Link to={item?.path} className="flex items-center">
                        <span className='text-white text-3vw xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw]'>{item?.icon}</span>
                        <span className='text-white font-semibold text-2vw xl:text-[0.9vw] lg:text-[0.9vw] md:text-[0.9vw] ml-0.5vw'>{item?.phone}</span>
                        </Link>
                    </section>
                    <Link to={'/'} className="flex -ml-2vw xl:hidden lg:hidden md:hidden cursor-pointer items-center">
                        <figure className='w-full  max-w-[25vw]'>
                        <img src="/images/Danhamz_logo.gif" alt="danhamz" className="w-full" />
                        </figure>
                                </Link>
                    <section className="justify-evenly items-center hidden xl:flex lg:flex md:flex">
                        {item?.links?.map((link, index2) => {
                            return <Link to={link?.path} key={index2}>
                            <span className='text-[#ffff] capitalize font-medium hover:text-amber-400 hover:font-semibold ml-vw text-[1.6vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]'>{link?.title}</span>
                            </Link>
                        })}
                    </section>
                </main>
            })}
        </div>
    </div>
        {/* <div className=" block md:hidden bg-white w-full p-2vw">
        <section className="flex justify-evenly items-center w-full max-w-[40vw]">
        {nav?.map((list, index) => {
            return (
                <main className="" key={index}>
                    <div className="flex items-center cursor-pointer">
                        <Link className="" to={list?.path} target={list?.title === 'Nightly Lets' && '_blank'}>
                        <p className="text-[#152347] hover:text-amber-500 font-semibold text-[2.5vw] xl:text-vw lg:text-vw md:text-vw capitalize fomt-medium">{list?.title}</p>
                        </Link>
                    </div>
                </main>
            );
        })}
        </section>
        </div> */}
    </>
  )
}

export default Topbar