import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../Layout/Layout';
import PageAddress from '../../Component/Common/PageAddress';
import { partnerBanner, sales_para1, sales_para2, sales_para3, sales_para4, sales_para5 } from '../../Data';
import { Link } from 'react-router-dom';
import RatingsContainer from '../../Component/RatingsContainer';
import { useGetAllSalesQuery } from '../../store/storeApi';
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2';
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer';
import BuySearchFilter from '../../Component/BuyAndRent/BuySearchFilter';
import Property from '../../Component/PropertyDetails/Property';
import { Helmet } from 'react-helmet';
import { AnimatedSection } from '../Animation';



const Sales = () => {
  const [showBuyFilter, setShowBuyFilter] = useState(true);
  const { data: salesProperty } = useGetAllSalesQuery();

  return (
    <div className="overflow-x-hidden">
      <Layout>
        <PageAddress main="Home" mainLink="/" category="Sales" />
        
        <div className="w-full relative">
          <AnimatedSection delay={0.2} direction="down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl absolute top-8 md:top-12 italic left-8 text-white z-10">
              Selling your home with danhamz
            </h1>
          </AnimatedSection>
          
          <img 
            src="images/Sales_image.jpg" 
            alt="remote" 
            className="w-full h-[45vh] md:h-[60vh] lg:h-[70vh] object-cover"
          />
          
          <AnimatedSection delay={0.4} direction="up" className="absolute flex flex-col md:flex-row items-center bottom-8 left-8">
            <Link to="/book-valuation">
              <button className="text-base md:text-lg bg-amber-500 w-40 md:w-48 m-2 rounded-lg py-3 text-white hover:bg-amber-600 transition-colors">
                Book valuation
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-base md:text-lg bg-bl w-40 md:w-48 m-2 rounded-lg py-3 text-white hover:font-medium transition-all">
                Contact Us
              </button>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 p-8">
          <AnimatedSection delay={0.2} direction="left" className="flex flex-col justify-center items-start w-full">
            {showBuyFilter && <BuySearchFilter />}
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} direction="right" className="w-full lg:max-w-2xl h-auto">
            <img 
              src="images/sales2.jpg" 
              alt="remote" 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </AnimatedSection>
        </div>

        <div className="flex flex-col justify-center bg-gray-200 items-center w-full p-8">
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="text-yellow-600 text-[4vw] md:text-4xl font-semibold mb-8">
              Latest Properties For Sale
            </h1>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {salesProperty?.slice(0, 8)?.map((item, index) => (
              <AnimatedSection key={index} delay={0.2 * index} direction="up">
                <Link to={`/sales-details/${item?._id}`} className="block w-full">
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
              </AnimatedSection>
            ))}
          </div>
        </div>

        <section className="flex flex-col items-center bg-white p-8">
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="text-yellow-600 text-3xl md:text-4xl font-semibold mb-8">
              Marketing partners
            </h1>
          </AnimatedSection>
          
          <div className="flex flex-wrap justify-center gap-8">
            {partnerBanner?.map((item, index) => (
              <AnimatedSection key={index} delay={0.2 * index} direction="up">
                <img
                  loading="lazy"
                  src={item?.img}
                  alt={`partner-${index}`}
                  className="w-24 md:w-32 lg:w-40 object-contain"
                />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {[sales_para1, sales_para2, sales_para3, sales_para4, sales_para5].map((paraArray, arrayIndex) => (
          <article key={arrayIndex} className="w-full bg-white">
            {paraArray?.map((item, index) => {
              const Container = arrayIndex % 2 === 0 ? ListInfoContainer2 : ListInfoContainer;
              return (
                <AnimatedSection 
                  key={index} 
                  delay={0.2} 
                  direction={arrayIndex % 2 === 0 ? 'left' : 'right'}
                >
                  <Container
                    lists={item?.lists}
                    lists_style={item?.lists_style}
                    lists_color={item?.lists_color}
                    img={item?.img}
                    info={item?.info}
                    icon={item?.icon}
                    title={item?.title}
                    title_color={item?.title_color}
                    info_color={item?.info_color}
                    btn_bg={item?.btn_bg}
                    btn_text={item?.btn_text}
                  />
                </AnimatedSection>
              );
            })}
          </article>
        ))}

        <AnimatedSection delay={0.2} direction="up" className="w-full">
          <RatingsContainer />
        </AnimatedSection>
      </Layout>
    </div>
  );
};

export default Sales;