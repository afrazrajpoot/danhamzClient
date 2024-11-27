import React from 'react'
import { Icon } from '@iconify/react';

const Services = ({title, info}) => {
    const [show, setShow] = React.useState(false)
  return (
    <div>
        <div className="w-full max-w-[50vw] m-[1.6vw] bg-white">
            <div onClick={() => setShow(!show)} className={`flex justify-between ${show ? 'bg-amber-600': 'bg-white'} cursor-pointer items-center p-vw`}>
                <h1 className={` ${!show ? 'text-[#152347]' : 'text-white'} text-[1.1vw] font-medium `}>{title}</h1>
                <div className="flex items-center cursor-pointer" onClick={() => setShow(!show)}>
                    {show? <Icon icon="maki:cross" className='text-[#152347] text-[1.3vw]'/> : <Icon icon="pixelarticons:plus" className='text-[1.3vw] text-[#152347]' />}
                </div>
            </div>
            {show && <p className='p-2vw text-vw text-black'>{info}</p> }
        </div>
    </div>
  )
}

export default Services