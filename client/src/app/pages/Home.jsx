import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner, home_services, partnerBanner, studentHomes, } from '../Data';
import Category from '../Component/Common/Category';
import Property from '../Component/PropertyDetails/Property';
import LettingProperty from '../Component/PropertyDetails/LettingProperty';
import Layout from '../Layout/Layout';
import RatingsContainer from '../Component/RatingsContainer';
import { useGlobalContext } from '../UserContext/UserContext';
import { useGetAllLettingsQuery } from '../store/storeApi';
import ListInfoContainer2 from '../Component/TextAndImageContainer/ListInfoContainer2';
import Card from '../Component/Cards/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Searchbox from '../Component/Common/Searchbox';
import axios from 'axios';
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {AnimatedSection, Animation} from './Animation';




const Home = () => {
  const {salesProperties,setSearchedLocation, searchedLocation, setSearchedLettingsProperties, setSearchedSalesProperties, showRentSection, setShowRentSection} = useGlobalContext();
  const {data:lettingsProperties} = useGetAllLettingsQuery();

  const [clearInputField, setClearInputField] = useState(false)
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery({ query: '(min-width: 769px)' });

const CustomPrevArrow = (props) => (
  <span {...props} className="text-vw text-black absolute cursor-pointer top-[35vw] md:top-[14vw] -left-[5.5vw] z-50">
  <FontAwesomeIcon icon={faArrowLeft} className='text-5vw md:text-vw text-white rounded-full hover:bg-yellow-400 bg-yellow-500 p-[2.3vw] md:p-[0.7vw] text-center' />
</span>);
const CustomNextArrow = (props) => (
  <span {...props} className="text-vw text-black absolute cursor-pointer top-[35vw] md:top-[14vw] -right-[5.5vw] xl:right-vw ">
  <FontAwesomeIcon icon={faArrowRight} className='text-5vw md:text-vw text-white rounded-full hover:bg-yellow-400 bg-yellow-500 p-[2.3vw] md:p-[0.7vw] text-center' />
</span> );

const settings2 = { prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, slidesToShow: 4, slidesToScroll: 1,
    responsive: [
      {breakpoint: 1248, // Large screens
        settings: { slidesToShow: 4, slidesToScroll: 1, },
      },
    {breakpoint: 1024, // Large screens
      settings: { slidesToShow: 2, slidesToScroll: 1, },
    },
    { breakpoint: 768, // Medium screens
       settings: { slidesToShow: 1, slidesToScroll: 1, },
    },
    {breakpoint: 480, // Small screens
       settings: { slidesToShow: 1, slidesToScroll: 1,},
    },
  ],
};


const handleRentBtunClick = async (e) => {
  if(searchedLocation !== "") {
    setShowRentSection(true);
  
    navigate(`/search-properties`);

  }
}
const handleBuyBtunClick = async () => {
  if(searchedLocation !== "") {

    setClearInputField(true);
    setShowRentSection(false);
    navigate(`/search-properties`);

  }
}

const videoUrl = '/video/leeds.mp4';



  return (
    // <div>
    <Layout>
              <Helmet>
  <meta property="og:title" content="Leading Letting Agency in Leeds | Trusted Property Management & Rentals" />
  <meta property="og:description" content="Discover top-quality property management and rental services in Leeds with our expert letting agency. Trusted by landlords and tenants alike, we ensure seamless lettings and exceptional service. Contact us today!" />
  <meta property="og:image" content="https://danhamz.co.uk/images/Lettings.jpg" />
  <meta property="og:site_name" content="Danhamz" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:type" content="article" />
  {/* <!-- Twitter Card Tags --> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Danhamz" />
  <meta name="twitter:creator" content="@Danhamz" />
  <meta name="twitter:title" content="Leading Letting Agency in Leeds | Trusted Property Management & Rentals" />
  <meta name="twitter:description" content="Discover top-quality property management and rental services in Leeds with our expert letting agency. Trusted by landlords and tenants alike, we ensure seamless lettings and exceptional service. Contact us today!" />
  <meta name="twitter:image" content="https://danhamz.co.uk/images/Lettings.jpg" />
</Helmet>
      <main className="w-full h-full z-10 relative bg_img2">
        <div className={classNames({ 'video-wrapper': isLargeScreen, 'mobile-video-wrapper': !isLargeScreen })}>
          <ReactPlayer url={videoUrl} controls={false} muted loop playing width="100%" height="100%" />
        </div>      
            
        <section className='w-full'>
          <Searchbox 
            handleRentBtunClick={handleRentBtunClick} 
            handleBuyBtunClick={handleBuyBtunClick} 
            clearInputField={clearInputField} 
          />
        </section>
      </main>

      <Animation className='w-full z-50 bg-[#ffff] pt-[5vw] md:pt-0 col-center p-4vw'>
        {banner?.map((item, index) => (
          <div className="w-full p-[1vw] max-w-[80vw] xl:max-w-[70vw] lg:max-w-[70vw] md:max-w-[70vw]" key={index}>
            <h1 className='text-yellow-600 text-center text-[4.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-[2.5vw] font-medium'>
              Welcome to Danhamz
            </h1>
            <h2 className='text-[#152347] text-center mt-[2vw] md:mt-[1vw] text-[3vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-semibold'>
              {item?.title}
            </h2>
          </div>
        ))}
      </Animation>

      <Animation className="col-center pt-[5vw] md:pt-[2vw] w-full p-3vw" delay={0.2}>
        <h1 className='text-yellow-600 text-center text-[4.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-[2.5vw] font-medium'>
          Our Services
        </h1>            
        <div className="grid grid-cols-1 mt-[4vw] md:mt-[1vw] w-full max-w-[80vw] md:max-w-[100%] cursor-pointer">
          <Slider {...settings2}>
            {home_services?.map((item, index) => (
              <Link to='/coming-soon' key={index} className='w-full'>
                <Card 
                  para={item?.para} 
                  img={item?.img} 
                  title={item?.title} 
                  height={item?.height} 
                />
              </Link>                          
            ))}
          </Slider>
        </div>
      </Animation>

      <Animation delay={0.3}>
        <Category />
      </Animation>

      <Animation className='w-full' delay={0.4}>
        {studentHomes?.map((item, index) => (
          <ListInfoContainer2 
            key={index} 
            lists={item?.lists} 
            lists_style={item?.lists_style} 
            lists_color={item?.lists_color} 
            img={item?.img} 
            info={item?.info} 
            icon={item?.icon} 
            title={item?.title} 
            button={item?.button} 
            url={item?.url} 
            bg_color={item?.bg_color} 
            title_color={item?.title_color} 
            info_color={item?.info_color} 
            btn_bg={item?.btn_bg} 
            btn_text={item?.btn_text}  
          />
        ))}
      </Animation>

      <Animation className="flex flex-col justify-center bg-[#f5f5f5] items-center w-full p-3vw" delay={0.5}>
        <h1 className='text-yellow-600 text-[4.5vw] mt-[5vw] md:mt-0 md:text-[2.5vw] font-semibold capitalize'>
          Latest Properties to Let
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 place-items-center place-content-center gap-2 mt-2vw w-full max-w-[90vw] md:max-w-[100%]">
          {lettingsProperties?.slice(0, 4)?.map((item, index) => (
            <Link key={index} to={`/details/${item?._id}`} className='w-full m-[2vw]'>
              <LettingProperty 
                id={item?._id} date={item?.availableDate}
                quantity={item?.bedrooms} 
                sharedHouse={item?.shareHouse}
                weekPrice={item?.pricePerWeek} 
                monthPrice={item?.pricePerMonth} 
                location={item?.propertyName}
                bedRooms={item?.bedrooms}  
                available={item?.availableDate} 
                furnished={item?.furnished} 
                bills={item?.bills}
                img={item?.image1?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image1?.fileName}`} 
              />
            </Link> 
            
          ))}
        </div>
      </Animation>

      <Animation className="w-full" delay={0.6}>
        <RatingsContainer />
      </Animation>

      <AnimatedSection className='col-center bg-white p-3vw' delay={0.7}>
        <h1 className='text-yellow-600 text-[4.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-[2.5vw] font-semibold'>
          Marketing partners
        </h1>
        <div className="flex mt-2vw justify-evenly items-center">
          {partnerBanner?.map((item, index) => (
            <img 
              key={index} 
              loading='lazy' 
              src={item?.img} 
              alt={index} 
              className='w-[12vw] xl:w-8vw lg:w-8vw md:w-8vw object-cover ml-4vw'
            />
          ))}
        </div>
      </AnimatedSection>

      <Animation className="w-full flex-col bg-gray-100 p-2vw flex justify-center items-center" delay={0.8}>
        <h1 className='text-yellow-600 mt-[5vw] md:mt-0 text-[4.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-[2.5vw] text-center capitalize font-semibold'>
          Latest properties for Sale
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2vw w-full max-w-[90vw] md:max-w-[100%]">
          {salesProperties?.slice(0, 4)?.map((item, index) => (
            <Link to={`/sales-details/${item?._id}`} key={index} className='w-full -ml-[0.5vw] md:ml-0 m-[2vw]'>
              <Property 
                tag={item?.tag} 
                icon={item?.icon} 
                quantity={item?.bedrooms} 
                price={item?.price} 
                name={item?.propertyName} 
                icon2={item?.pics?.[0]?.icon} 
                bed_rooms={item?.bedrooms}
                img={item?.image1?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image1?.fileName}`}
              />
            </Link>
          ))}
        </div>
      </Animation>
    </Layout>
    // </div>
  )
}

export default Home