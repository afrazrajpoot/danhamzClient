import React from 'react'
import { categories } from '../../Data'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  const CustomPrevArrow = (props) => (
    <span {...props} className="text-vw  text-black absolute cursor-pointer top-[32vw] md:top-[14vw] -left-2vw xl:-left-0.5vw lg:-left-2vw md:-left-2vw z-50">
    <FontAwesomeIcon icon={faArrowLeft} className='text-5vw md:text-vw text-white rounded-full hover:bg-yellow-400 bg-yellow-500 p-[2.3vw] md:p-[0.7vw] text-center' />
  </span>);
  const CustomNextArrow = (props) => (
    <span {...props} className="text-vw text-black absolute cursor-pointer top-[32vw] md:top-[14vw] -right-[1.5vw] xl:right-vw lg:right-vw md:right-vw ">
    <FontAwesomeIcon icon={faArrowRight} className='text-5vw xl:text-vw lg:text-vw md:text-vw text-white rounded-full hover:bg-yellow-400 bg-yellow-500 p-[2.3vw] md:p-[0.7vw] text-center' />
  </span> );

const settings2 = { prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, slidesToShow: 4, slidesToScroll: 1,
responsive: [
  {breakpoint: 1248, // Large screens
    settings: { slidesToShow: 4, slidesToScroll: 1, },
  },
  {breakpoint: 1024, // Large screens
    settings: { slidesToShow: 3, slidesToScroll: 1, },
  },
  { breakpoint: 768, // Medium screens
     settings: { slidesToShow: 1, slidesToScroll: 1, },
  },
  {breakpoint: 480, // Small screens
     settings: { slidesToShow: 1, slidesToScroll: 1,},
  },
],
 };

  return (
    <div className='bg-gray-100'>
      <div className="col-center p-4vw md:p-2vw">
      <h1 className=' text-yellow-600 text-center mt-[5vw] md:mt-[1vw] text-[4.5vw] xl:text-3vw lg:text-3vw md:text-3vw font-medium'>Cities we cover</h1>
        <p className='text-center text-[#152347] text-[3.5vw] mt-[2vw] md:mt-[1vw] md:text-[1.5vw] w-full max-w-[80vw] md:max-w-[70vw]'>Danhamz are nationwide and can help you with your property requirement whenever you may be. We currently have main hubs in the following cities but we're extending our services to a city near you. </p>
      </div>
         <main className='col-center mt-[2vw] md:mt-[1vw] w-full p-3vw'>
          <div className="grid grid-cols-1 gap-2 ml-vw">
          <Slider {...settings2} className=''>
    {categories?.map((category, index) => 
        <section key={index} className='relative rounded-lg bg-white w-full xl:max-w-[20vw] lg:max-w-[20vw] md:max-w-[20vw]'>
            <img src={category.img} loading='lazy' alt={category.title} className='w-full rounded-t-lg h-[70vw] xl:h-[27vw] lg:h-[27vw] md:h-[27vw] object-cover' />
            <div className='mt-[7.5vw] md:mt-[1.5vw] pb-3vw xl:pb-2vw lg:pb-2vw md:pb-3vw col-center'>
                <Link to={category?.url} className='text-[#ffff] bg-yellow-600 p-[1vw] lg:p-[0.7vw] rounded-md font-medium text-[4vw] xl:text-vw lg:text-vw md:text-vw hover:text-gray-200'>{category?.title}</Link>
            </div>
        </section>
    )}
    </Slider>
   </div>
  </main>
    </div>
  )
}

export default Category