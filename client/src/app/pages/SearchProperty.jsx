import React from 'react';
import { useSearchParams } from 'react-router-dom'; // Import useSearchParams
import Layout from '../Layout/Layout';
import BuySection from '../Component/BuyAndRent/BuySection';
import PageAddress from '../Component/Common/PageAddress';
import RentProperty from '../Component/BuyAndRent/RentProperty';
import { useGlobalContext } from '../UserContext/UserContext';

const SearchProperty = () => {
  const { showRentSection, setShowRentSection,SearchProperty } = useGlobalContext();
  const [searchParams] = useSearchParams(); // Use the useSearchParams hook

  // Accessing specific query parameters
  const location = searchParams.get('location'); // e.g. ?location=NewYork
  // const propertyType = searchParams.get('propertyType'); // e.g. ?propertyType=apartment
  // console.log(location,'my location')
  
  return (
    <div>
      <Layout>
        <PageAddress main="Home" mainLink="/" category="Property Search" />
        <section className='relative w-full flex items-center bg-[#fff] justify-evenly p-vw'>
          <div className="flex ml-[3vw] w-full max-w-[70vw] items-center">
            <p
              className={`text-[4.5vw] xl:text-[1.1vw] lg:text-[1.1vw] md:text-[1.1vw] text-center font-medium cursor-pointer ${
                showRentSection ? 'text-blue-950 border-b-[2px] border-yellow-600' : 'text-gray-700 hover:text-blue-950'
              }`}
              onClick={() => setShowRentSection(true)}
            >
              Rent
            </p>
            <pSearchProperty
              className={`text-[4.5vw] xl:text-[1.1vw] ml-[2vw] lg:text-[1.1vw] md:text-[1.1vw] text-center font-medium cursor-pointer ${
                !showRentSection ? 'text-blue-950 border-b-[2px] border-yellow-600' : 'text-gray-700 hover:text-blue-950'
              }`}
              onClick={() => setShowRentSection(false)}
            >
              Buy
            </pSearchProperty>
          </div>
        </section>
        <article className='flex flex-col justify-center items-center w-full'>
          {showRentSection ? <RentProperty location={location} /> : <BuySection location={location}  />}
        </article>
      </Layout>
    </div>
  );
};

export default SearchProperty;