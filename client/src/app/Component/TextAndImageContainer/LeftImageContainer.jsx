import React from 'react'
import { Link } from "react-router-dom";

const LeftImageContainer = ({bg_color, title, info, img, title_color, info_color, button, btn_text, btn_bg, url, icon}) => {
  return (
    <div>
          <div className={`flex justify-center items-center w-full ${bg_color} p-2vw`}>
            <section className='w-full'>
                <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 justify-between items-center p-vw w-full">
                  <section className='w-full xl:max-w-[40vw] md:max-w-[40vw]'>
                    {icon && <span className='text-pink-700 text-8vw'>{icon}</span>}
                    <p className={` text-[2.9vw] xl:text-2vw  lg:text-2vw md:text-2vw ${title_color} font-semibold `}>{title}</p>
                    <p className={`${info_color} text-[1.4vw] xl:text-vw  lg:text-vw md:text-vw w-full xl:max-w-[35vw] lg:max-w-[35vw] md:max-w-[35vw]`}>{info}</p>
                    <div className="sm:col-center mt-vw">
                    {button && <Link to={url} className={`p-vw ${btn_bg} ${btn_text} text-vw font-medium text-center`}>{button}</Link>}
                    </div>
                  </section>
                  <section className='w-full'>
                    <img src={img} alt="rmote" className='w-full xl:max-w-[40vw] lg:max-w-[40vw] md:max-w-[40vw] h-[27vw] object-cover' />
                  </section>
                </div>
            </section>
            </div>
    </div>
  )
}

export default LeftImageContainer