import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../Common/PageAddress'
import LettingProperty from './LettingProperty';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetAllLettingsQuery, useGetLettingsByIdQuery, useGetLettingsByPermaLinkQuery } from '../../store/storeApi';
import PropertyRoomsInfo from './PropertyRoomsInfo';
import PropertyImagesDetails from './PropertyImagesDetails';
import PinLocation from '../Map/PinLocation';
import Chat from '../Chat/Chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import Loader from '../../pages/Reports/Loader';




const LettingsPropertyDetails = ( ) => {
        const { id } = useParams();
        // const { data: propertyDetails, isLoading, isError } = useGetLettingsByPermaLinkQuery(permaLink);
        const { data: propertyDetails, isLoading, isError } = useGetLettingsByIdQuery(id);

        // const id = propertyDetails?._id;
        const {data:lettingsProperties} = useGetAllLettingsQuery();
        const [showSlider, setShowSlider] = useState(false)
        const CustomPrevArrow = (props) => (
         <span {...props} className="text-vw bg-[#484848]  absolute -left-10vw top-[35vw] md:top-[17vw] z-50">
         <FontAwesomeIcon icon={faArrowLeft} className='text-2vw xl:text-vw lg:text-vw md:text-vw text-gray-400  rounded-[0.5vw] hover:bg-[#484848] bg-[#313131] p-[0.7vw] text-center' />
         </span>);
          const CustomNextArrow = (props) => (
          <span {...props} className="text-vw bg-[#484848] absolute cursor-pointer top-[35vw] md:top-[17vw] -right-[10vw]">
          <FontAwesomeIcon icon={faArrowRight} className='text-2vw xl:text-vw lg:text-vw md:text-vw text-gray-400 rounded-[0.5vw] hover:bg-[#484848] bg-[#313131] p-[0.7vw] text-center' />
          </span> );
          const settings = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, };
    
        
    if (isLoading) {
        return (
            <Loader />
        );
    }
    if (isError) {
        return <div className='text-center text-2vw text-[#152347]'>No Property Found....</div>;
    }

    const handleImageError = (e) => {
        e.target.src = '/images/no_preview.jpg';
      }
    
 
  return (
    <div>
       
        <Layout>
            <main className='w-full relative'>
            <PageAddress main='Home' category='Properties' subCategory={propertyDetails?.propertyName} />
            <article className="flex z-10 relative justify-center items-start w-full bg-gray-200 p-2vw">
               
           <article className='flex lg:flex-row flex-col w-full max-w-[90vw] gap-[5vw] lg:gap-[2vw]'>
           <div className=' lg:ml-[1vw]'>
              <PropertyImagesDetails 
                img1={propertyDetails?.image1?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image1?.fileName}`} 
                img2={propertyDetails?.image2?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image2?.fileName}`} 
                img3={propertyDetails?.image3?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image3?.fileName}`}
                img4={propertyDetails?.image4?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image4?.fileName}`}
                img5={propertyDetails?.image5?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image5?.fileName}`}
                img6={propertyDetails?.image6?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image6?.fileName}`}
                img7={propertyDetails?.image7?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image7?.fileName}`}
                img8={propertyDetails?.image8?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image8?.fileName}`}
                img9={propertyDetails?.image9?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image9?.fileName}`}
                img10={propertyDetails?.image10?.url || `${import.meta.env.VITE_API_URL}/lettings/${propertyDetails?.image10?.fileName}`}
                // img1={propertyDetails?.image1?.url} img2={propertyDetails?.image2?.url} img3={propertyDetails?.image3?.url} img4={propertyDetails?.image4?.url} img5={propertyDetails?.image5?.url} img6={propertyDetails?.image6?.url} img7={propertyDetails?.image7?.url} img8={propertyDetails?.image8?.url} img9={propertyDetails?.image9?.url} img10={propertyDetails?.image10?.url} img11={propertyDetails?.image11?.url} img12={propertyDetails?.image12?.url} img13={propertyDetails?.image13?.url} img14={propertyDetails?.image14?.url} img15={propertyDetails?.image15?.url}
                 />
              </div>
              
                <div className="">
              <PropertyRoomsInfo requestViewing={`/send-mail/${id}`} url={`/details/${id}`} id={id} propertyType={propertyDetails?.propertyType} propertyName={propertyDetails?.propertyName} availableDate={propertyDetails?.availableDate} furnished={propertyDetails?.furnished} bills={propertyDetails?.bills} bedrooms={propertyDetails?.bedrooms} bathrooms={propertyDetails?.bathrooms} reception={propertyDetails?.reception} weekPrice={propertyDetails?.pricePerWeek} monthPrice={propertyDetails?.pricePerMonth} />
                </div>
           </article>
            </article>
            <article className="w-full bg-white p-3vw grid grid-cols-1 place-content-start place-items-start xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
                <section className="w-full xl:max-w-[45vw] p-[2vw] lg:p-[0vw] lg:max-w-[45vw] md:max-w-[45vw]">
                    <div className="">
                        <p className='text-[#152347] font-semibold text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>Feartures</p>
                        <section className="grid grid-cols-2 gap-4 mt-vw">
                        <li className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-900">Bedrooms: {propertyDetails?.bedrooms}</li>
                        <li className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-900">Bathrooms: {propertyDetails?.bathrooms}</li>
                        <li className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-900">Reception: {propertyDetails?.reception}</li>
                        <li className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-900">Bills: {propertyDetails?.bills === 'Bills Included' ? 'Included' : 'Not Included'}</li>
                        </section>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-3vw md:mt-vw font-semibold text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>Council Tax Details</p>
                        <section className="grid grid-cols-2 gap-4 mt-3vw md:mt-vw">
                        <p className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-900">Council Tax Details: {propertyDetails?.counselTax ? propertyDetails?.counselTax  :'not included'}</p>
                        </section>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-3vw md:mt-vw font-semibold text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>Deposit Details</p>
                        <section className="grid grid-cols-2 gap-4 mt-3vw md:mt-vw">
                        <p className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-900">Deposit Details: {propertyDetails?.deposit ? propertyDetails?.deposit  : 'not included'}</p>
                        </section>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-3vw md:mt-vw font-semibold text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>Description</p>
                        <p className="text-[3.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full xl:max-w-[40vw] lg:max-w-[40vw] md:max-w-[40vw] text-gray-900">{propertyDetails?.description}</p>
                    </div>
                    
                    <div className="">
                        <p className='text-[#152347] mt-3vw md:mt-vw font-semibold text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>Virtual Tour</p>
                        <Link target='_blank' to={propertyDetails?.videoLink || '#'} className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-700">{propertyDetails?.videoLink ? propertyDetails?.videoLink : 'The virtual tour is not included'}</Link>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-3vw md:mt-vw font-semibold text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>EPC Details</p>
                        <Link target='_blank' to={propertyDetails?.epc || '#'} className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-700">{propertyDetails?.epc ? propertyDetails?.epc : 'The EPC details are not included'}</Link>
                    </div>

                    <div className="mt-5vw md:mt-vw">
                    <Chat />
                    </div>
                </section>
                
                <section className="w-full mt-6vw md:mt-vw">
                    <PinLocation lat={propertyDetails?.lat ? propertyDetails?.lat : -1.567857} lng={propertyDetails?.lng ? propertyDetails?.lng : 53.812431}/>
                </section>
            </article>
            <section className="w-full p-6vw md:p-2vw flex flex-col lg:flex-row items-center justify-around">
                    <div className="w-full xl:max-w-[30vw] lg:max-w-[30vw] md:max-w-[30vw] h-[35vw] xl:h-[15vw] lg:h-[15vw] md:h-[15vw] p-2vw bg-[#152347]">
                        <h1 className='text-[4.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] rounded-[0.5vw] font-semibold text-white w-full md:max-w-[20vw] italic'>Looking to buy a home?</h1>
                        <p className="text-[3.5vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw] text-white w-full md:max-w-[22vw]">We’ll be with you every step of the way.</p>
                        <div className="mt-[4vw] lg:mt-[2vw]">
                        <Link to="/sales" className='mt-2vw bg-yellow-600 hover:bg-yellow-500 text-[3.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] rounded-[0.5vw] p-vw text-center text-white'>Buy now</Link>
                        </div>
                    </div>
                    <div className="w-full mt-[6vw] lg:mt-0 xl:max-w-[30vw] lg:max-w-[30vw] md:max-w-[30vw] h-[35vw] xl:h-[15vw] lg:h-[15vw] md:h-[15vw] p-2vw bg-yellow-600">
                        <h1 className='text-[4.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] rounded-[0.5vw] font-semibold text-white w-full md:max-w-[25vw]  italic'>Want a room in your area?</h1>
                        <p className="text-[3.5vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw] text-white w-full md:max-w-[22vw]">Click to view our area guide.</p>
                        <div className="mt-[4vw] lg:mt-[2vw]">
                        <Link to="/lettings" className='mt-2vw bg-[#152347] text-[3.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] rounded-[0.5vw] hover:bg-[#152347e0] p-vw text-center text-white'>Learn more</Link>
                        </div>
                    </div>
                </section>
           {/* letting properties */}
          <div className="flex flex-col  justify-center bg-gray-200 items-center w-full p-3">
            <h1 className='text-yellow-600 text-[4.5vw] xl:text-[2vw] lg:text-2vw md:text-2vw font-medium capitalize'>Similar Properties to Let</h1>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 ml-[-13vw] p-[4vw] md:grid-cols-4 gap-2 mt-2vw w-full">
              {lettingsProperties?.filter((propertyId => propertyId?._id !== id))?.slice(0, 4)?.map((item, index) => (
               <Link key={index} target='_blank' to={`/details/${item?._id}`} className='w-full ml-[7vw]'>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms} sharedHouse={item?.sharedHouse}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.availableDate} furnished={item?.furnished} bills={item?.bills}
                // img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url}
                img={item?.image1?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image1?.fileName}`}
                 />
                </Link> 
              ))}
            </div>
          </div>
          </main>
        </Layout>
    </div>
  )
}

export default LettingsPropertyDetails