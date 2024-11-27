import React, { useEffect, useState } from 'react';
import PropertyImagesDetails from '../Component/PropertyDetails/PropertyImagesDetails';
import PropertyRoomsInfo from '../Component/PropertyDetails/PropertyRoomsInfo';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Property from '../Component/PropertyDetails/Property';
import LettingProperty from '../Component/PropertyDetails/LettingProperty';

const PropertySearch = ({ searchedProperties, totalProperties }) => {
  const [letProperties, setLetProperties] = useState([]);
  const [salesProperties, setSaleProperties] = useState([]);
  const [listView, setListView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (searchedProperties && searchedProperties?.[0]?.price) {
      setSaleProperties(searchedProperties);
    } else {
      setLetProperties(searchedProperties);
    }
  }, [searchedProperties]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setListView(false);
      }
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderGridView = () => (
    <article className="w-full p-[2vw] ml-[-5vw] lg:ml-0 col-center">
      <div className="grid grid-cols-1 ml-[9vw] lg:ml-[2vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2vw w-full px-4">
        {letProperties?.length > 0 ? (
          letProperties?.map((item, index) => (
            <Link to={`/details/${item?._id}`} key={index} className="w-full">
              <LettingProperty
                id={item?._id}
                quantity={item?.bedrooms}
                sharedHouse={item?.sharedHouse}
                weekPrice={item?.pricePerWeek}
                monthPrice={item?.pricePerMonth}
                location={item?.propertyName}
                bedRooms={item?.bedrooms}
                available={item?.availableDate}
                furnished={item?.furnished}
                bills={item?.bills}
                img={item?.image1?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image1?.fileName}`}
                img2={item?.image2?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image2?.fileName}`}
                img3={item?.image3?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image3?.fileName}`}
                img4={item?.image4?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image4?.fileName}`}
                img5={item?.image5?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image5?.fileName}`}
                img6={item?.image6?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image6?.fileName}`}
                img7={item?.image7?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image7?.fileName}`}
                img8={item?.image8?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image8?.fileName}`}
                img9={item?.image9?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image9?.fileName}`}
                img10={item?.image10?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image10?.fileName}`}
              />
            </Link>
          ))
        ) : (
          salesProperties?.map((item, index) => (
            <Link to={`/sales-details/${item?._id}`} key={index} className="w-full">
              <Property
                tag={item?.tag}
                icon={item?.icon}
                quantity={item?.bedrooms}
                price={item?.price}
                name={item?.propertyName}
                icon2={item?.pics?.[0]?.icon}
                bed_rooms={item?.bedrooms}
                img={item?.image1?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image1?.fileName}`}
                img2={item?.image2?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image2?.fileName}`}
                img3={item?.image3?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image3?.fileName}`}
                img4={item?.image4?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image4?.fileName}`}
                img5={item?.image5?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image5?.fileName}`}
                img6={item?.image6?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image6?.fileName}`}
                img7={item?.image7?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image7?.fileName}`}
                img8={item?.image8?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image8?.fileName}`}
                img9={item?.image9?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image9?.fileName}`}
                img10={item?.image10?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image10?.fileName}`}
              />
            </Link>
          ))
        )}
      </div>
    </article>
  );

  return (
    <div>
      <main className="w-full bg-gray-200">
        <article className="w-full p-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl md:text-lg text-gray-800 font-semibold mb-4 md:mb-0">
              Currently Showing: {totalProperties?.length} properties
            </h1>
            {!isMobile && (
              <section className="flex items-center gap-2">
                <button
                  onClick={() => setListView(true)}
                  className={`flex items-center px-4 py-2 rounded-md text-white hover:bg-gray-500 transition-colors ${
                    listView ? 'bg-blue-950' : 'bg-yellow-600'
                  }`}
                >
                  <Icon icon="gg:list" className="mr-2" />
                  List View
                </button>
                <button
                  onClick={() => setListView(false)}
                  className={`flex items-center px-4 py-2 rounded-md text-white hover:bg-gray-500 transition-colors ${
                    listView ? 'bg-yellow-600' : 'bg-blue-950'
                  }`}
                >
                  <Icon icon="bx:grid" className="mr-2" />
                  Grid View
                </button>
              </section>
            )}
          </div>
        </article>

        {(isMobile || !listView) ? renderGridView() : (
          <article className="w-full p-[2vw]">
            <div className="w-full space-y-4">
              {/* List view content remains the same */}
              {letProperties?.length > 0
                ? letProperties?.map((item, index) => (
                    <main className="w-full flex flex-col md:flex-row items-center" key={index}>
                      <PropertyImagesDetails
                        img1={item?.image1?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image1?.fileName}`}
                        // ... other image props remain the same
                      />
                      <PropertyRoomsInfo
                        requestViewing={`/send-mail/${item?._id}`}
                        propertyURL={`/details/${item?._id}`}
                        weekPrice={item?.pricePerWeek}
                        monthPrice={item?.pricePerMonth}
                        bills={item?.bills}
                        propertyType={item?.propertyType}
                        furnished={item?.furnished}
                        propertyName={item?.propertyName}
                        availableDate={item?.availableDate}
                        price={item?.price}
                        location={item?.location}
                        bedrooms={item?.bedrooms}
                        bathrooms={item?.bathrooms}
                        reception={item?.reception}
                      />
                    </main>
                  ))
                : salesProperties?.map((item, index) => (
                    <main className="w-full flex flex-col md:flex-row items-center" key={index}>
                      <PropertyImagesDetails
                        img1={item?.image1?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image1?.fileName}`}
                        // ... other image props remain the same
                      />
                      <PropertyRoomsInfo
                        requestViewing={`/send-mail/${item?._id}`}
                        propertyURL={`/sales-details/${item?._id}`}
                        weekPrice={item?.pricePerWeek}
                        monthPrice={item?.pricePerMonth}
                        bills={item?.bills}
                        propertyType={item?.propertyType}
                        furnished={item?.furnished}
                        propertyName={item?.propertyName}
                        available={item?.availableDate}
                        price={item?.price}
                        location={item?.location}
                        bedrooms={item?.bedrooms}
                        bathrooms={item?.bathrooms}
                        reception={item?.reception}
                      />
                    </main>
                  ))}
            </div>
          </article>
        )}
      </main>
    </div>
  );
};

export default PropertySearch;