import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { home_services,lettings_para1, lettings_para2, lettings_para3, partnerBanner } from '../../Data'
import { Link } from 'react-router-dom'
import LettingProperty from '../../Component/PropertyDetails/LettingProperty'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../../Component/Cards/Card'
import RatingsContainer from '../../Component/RatingsContainer'
import { useGetAllLettingsQuery } from '../../store/storeApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import RentSearchFilter from '../../Component/BuyAndRent/RentSearchFilter'
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import { Helmet } from 'react-helmet'
import { AnimatedSection } from '../Animation'
import { motion } from 'framer-motion';
const Lettings = () => {
  const [showRentSection] = useState(true);
  const { data: lettingsProperties } = useGetAllLettingsQuery();

  const CustomPrevArrow = (props) => (
    <span {...props} className="text-black absolute cursor-pointer top-1/2 -translate-y-1/2 -left-4 z-50">
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className='text-base md:text-lg lg:text-xl text-white rounded-full hover:bg-yellow-500 bg-yellow-600 p-2 md:p-3 text-center transition-colors' 
      />
    </span>
  );

  const CustomNextArrow = (props) => (
    <span {...props} className="text-black absolute cursor-pointer top-1/2 -translate-y-1/2 -right-4">
      <FontAwesomeIcon 
        icon={faArrowRight} 
        className='text-base md:text-lg lg:text-xl text-white rounded-full hover:bg-yellow-500 bg-yellow-600 p-2 md:p-3 text-center transition-colors' 
      />
    </span>
  );

  const settings2 = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Layout>
       <Helmet>
<meta property="og:title" content="Premier Lettings Agency: Expert Services for Property Owners" />
<meta property="og:description" content="Looking for a reliable lettings agency? Our services cater to property owners seeking professional management and tenant placement." />
<meta property="og:image" content="https://danhamz.co.uk/images/Lettings.jpg" />
<meta property="og:site_name" content="Danhamz" />
<meta property="og:url" content={window.location.href} />
<meta property="og:type" content="article" />
{/* <!-- Twitter Card Tags --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@Danhamz" />
<meta name="twitter:creator" content="@Danhamz" />
<meta name="twitter:title" content="Premier Lettings Agency: Expert Services for Property Owners" />
<meta name="twitter:description" content="Looking for a reliable lettings agency? Our services cater to property owners seeking professional management and tenant placement." />
<meta name="twitter:image" content="https://danhamz.co.uk/images/Lettings.jpg" />
</Helmet> 
      <AnimatedSection>
        <PageAddress main="Home" mainLink="/" category="Lettings" />
      </AnimatedSection>

      <AnimatedSection className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="images/lettings1.jpeg" 
          alt="remote" 
          className="w-full h-full object-fill md:object-cover"
        />
      </AnimatedSection>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 p-4 md:p-8 lg:p-12">
        <AnimatedSection direction="left" className="flex flex-col justify-center">
          {showRentSection && <RentSearchFilter />}
        </AnimatedSection>

        <AnimatedSection direction="right" className="w-full h-[300px] md:h-[400px]">
          <img 
            src="images/lettings2.jpeg" 
            alt="remote" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </AnimatedSection>
      </main>

      <AnimatedSection className="w-full bg-white py-8 md:py-12">
        {lettings_para1?.map((item, index) => (
          <ListInfoContainer2 
            key={index} 
            {...item}
          />
        ))}
      </AnimatedSection>

      <AnimatedSection className="flex flex-col justify-center bg-gray-200 items-center w-full p-4 md:p-8">
        <h1 className="text-yellow-600 text-[6vw] md:text-3xl lg:text-4xl font-semibold capitalize mb-8">
          Latest Properties to Let
        </h1>
        <div className="grid grid-cols-1 lg:ml-[2vw] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {lettingsProperties?.slice(0, 8)?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
            >
              <Link to={`/details/${item?._id}`} className="block w-full h-full">
                <LettingProperty
                  id={item?._id}
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
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full bg-white">
        {lettings_para2?.map((item, index) => (
          <ListInfoContainer key={index} {...item} />
        ))}
      </AnimatedSection>

      <AnimatedSection className="flex flex-col items-center bg-white p-4 md:p-8">
        <h1 className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          Marketing partners
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
          {partnerBanner?.map((item, index) => (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              loading="lazy"
              src={item?.img}
              alt={`Partner ${index + 1}`}
              className="w-24 md:w-32 lg:w-40 object-contain"
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full bg-white">
        {lettings_para3?.map((item, index) => (
          <ListInfoContainer2 key={index} {...item} />
        ))}
      </AnimatedSection>

      <AnimatedSection className="bg-gray-200 w-full p-4 md:p-8">
        <h1 className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
          Our Services
        </h1>
        <div className="w-full px-4 md:px-8 lg:px-12">
          <Slider {...settings2}>
            {home_services?.map((item, index) => (
              <div key={index} className="px-2">
                <Link to="/coming-soon" className="block">
                  <Card {...item} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full">
        <RatingsContainer />
      </AnimatedSection>
    </Layout>
  );
};

export default Lettings;