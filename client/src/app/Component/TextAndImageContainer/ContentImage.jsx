import React from 'react'
import { Link } from "react-router-dom";

const ContentImage = ({img, info, title, button, bg_color, url, title_color, info_color, btn_bg, btn_text}) => {
  return (
    <div>
                    <section className={`relative w-full ${bg_color}`}>
                        <img src={img} alt="about" className="w-full h-35vw md:h-22vw" />
                        <div className={`absolute ${info ? 'top-vw': 'top-3vw'} p-vw left-10vw w-full max-w-[35vw]`}>
                            <h1 className={`${title_color} text-[4.5vw] md:text-[2.5vw] leading-[4.5vw] md:leading-[1vw] font-medium w-full max-w-[30vw]`}>{title}</h1>
                            <p className={` ${info_color} text-vw mt-[1.5vw] font-medium w-full max-w-[30vw]`}>{info}</p>
                            <div className="mt-4vw md:mt-[3vw]">
                           {button && <Link to={url} className={`p-vw ${btn_bg} ${btn_text} text-3vw md:text-vw hover:shadow-md hover:font-semibold font-medium text-center`}>{button}</Link>}
                           </div>
                        </div>
                    </section>
    </div>
  )
}

export default ContentImage