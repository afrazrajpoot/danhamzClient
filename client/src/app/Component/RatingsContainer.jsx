import React from 'react'
import { ratings } from '../Data'
import Reviews from './Common/Reviews'

const RatingsContainer = () => {
  return (
    <div>
        <div className="slider-container p-2vw bg-gray-100">
            <h1 className='text-center text-yellow-600 text-[4.5vw] xl:text-2vw lg:text-2vw md:text-2vw font-semibold'>Customer Reviews</h1>
            <div className="slider m-vw">
              {ratings?.map((item, index) => (
                <div key={index} className="review-item m-vw">
                  <Reviews ratings={item?.icon} title={item?.title} para={item?.para} name={item?.name} />
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default RatingsContainer