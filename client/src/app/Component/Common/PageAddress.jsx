import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const PageAddress = ({main, category, subCategory, subLink, mainLink}) => {
  return (
    <div>
            {/* link */}
            <nav className="bg-gray-300 w-full p-[2vw] xl:p-vw lg:p-vw md:p-vw">
            <div className="flex items-center ml-10vw">
              <section className="flex items-center">
              <Link to={mainLink} className="flex items-center">
                <p className="text-gray-500 text-[2.2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]">{main}</p>
                <Icon
                  icon="mdi:keyboard-arrow-right"
                  className="text-gray-500 text-[2.2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]"
                />
              </Link>
              <Link to={subLink}><p className="text-gray-900 text-[2.2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw] hover:text-red-600 cursor-pointer ml-0.3vw">{category}</p></Link>
               { subCategory && <Icon icon="mdi:keyboard-arrow-right" className="text-gray-900 text-[2.2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]" />}
                <p className="text-gray-900 text-[2.2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw] ml-0.3vw">{subCategory}</p>
              </section>
            </div>
          </nav>
    </div>
  )
}

export default PageAddress