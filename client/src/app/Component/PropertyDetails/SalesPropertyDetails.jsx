import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../Common/PageAddress'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetSalesByIdQuery } from '../../store/storeApi';
import PropertyRoomsInfo from './PropertyRoomsInfo';
import PropertyImagesDetails from './PropertyImagesDetails';
import PinLocation from '../Map/PinLocation';
import Property from './Property';
import { useGlobalContext } from '../../UserContext/UserContext';
import Loader from '../../pages/Reports/Loader';



const SalesPropertyDetails = ( ) => {
        const { id } = useParams();
        // const { data: propertyDetails, isLoading, isError } = useGetSalesByPermaLinkQuery(permaLink);
        const { data: propertyDetails, isLoading, isError } = useGetSalesByIdQuery(id);
        // const id = propertyDetails?._id;
        const {salesProperties} = useGlobalContext();
   
    if (isLoading) {
        return (
           <Loader />
        );
    }
    if (isError) {
        return <div className='text-center text-2vw text-[#152347]'>No property found...</div>;
    }
 
  return (
   
        <Layout>
            <PageAddress main='Home' category='Properties' subCategory={propertyDetails?.info} />
            <article className="flex justify-center p-[1vw] lg:flex-row flex-col items-start w-full bg-gray-200 ">
            <PropertyImagesDetails 
                img1={propertyDetails?.image1?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image1?.fileName}`} 
                img2={propertyDetails?.image2?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image2?.fileName}`} 
                img3={propertyDetails?.image3?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image3?.fileName}`}
                img4={propertyDetails?.image4?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image4?.fileName}`}
                img5={propertyDetails?.image5?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image5?.fileName}`}
                img6={propertyDetails?.image6?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image6?.fileName}`}
                img7={propertyDetails?.image7?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image7?.fileName}`}
                img8={propertyDetails?.image8?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image8?.fileName}`}
                img9={propertyDetails?.image9?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image9?.fileName}`}
                img10={propertyDetails?.image10?.url || `${import.meta.env.VITE_API_URL}/sales/${propertyDetails?.image10?.fileName}`}
                 />
             <div className='p-[2vw] m-auto lg:p-0 lg:mt-0 mt-[1vw]'>
             <PropertyRoomsInfo requestViewing={`/send-mail/${id}`} price={propertyDetails?.price} propertyType={propertyDetails?.propertyType}  propertyName={propertyDetails?.propertyName} available={propertyDetails?.availableDate} furnished={propertyDetails?.furnished} bills={propertyDetails?.bills} bedrooms={propertyDetails?.bedrooms} bathrooms={propertyDetails?.bathrooms} reception={propertyDetails?.reception} />
             </div>
            </article>
            <article className="w-full bg-white p-3vw grid grid-cols-1 place-content-start place-items-start xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
                <section className="w-full xl:max-w-[45vw] p-[3vw] lg:max-w-[45vw] md:max-w-[45vw]">
                    <div className="">
                        <p className='text-[#152347] font-semibold text-[3.5vw] md:text-[1.5vw]'>Feartures</p>
                        <section className="grid grid-cols-2 gap-4 mt-2vw md:mt-vw">
                        <li className="text-3vw md:text-vw text-gray-900">Bedrooms:{propertyDetails?.bedrooms}</li>
                        <li className="text-3vw md:text-vw text-gray-900">Bathrooms:{propertyDetails?.bathrooms}</li>
                        <li className="text-3vw md:text-vw text-gray-900">Reception:{propertyDetails?.reception}</li>
                        <li className="text-3vw md:text-vw text-gray-900">Bills:{propertyDetails?.bills ? 'Included' : 'Not Included'}</li>
                        </section>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-2vw md:mt-vw font-semibold text-[3.5vw] md:text-[1.5vw]'>Council Tax & Deposit</p>
                        <section className="grid grid-cols-2 gap-4 mt-2vw md:mt-vw">
                        <li className="text-3vw md:text-vw text-gray-900">Council Tax:{propertyDetails?.counselTax ? propertyDetails?.counselTax  : 'Not Included'}</li>
                        <li className="text-3vw md:text-vw text-gray-900">Deposit:{propertyDetails?.deposit ? propertyDetails?.deposit  : 'Not Included'}</li>
                        </section>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-2vw md:mt-vw font-semibold text-[3.5vw] md:text-[1.5vw]'>Description</p>
                        <p className="text-[3.5vw] md:text-vw w-full md:max-w-[40vw] text-gray-900">{propertyDetails?.description}</p>
                    </div>
                    
                    <div className="">
                        <p className='text-[#152347] mt-2vw md:mt-vw font-semibold text-[3.5vw] md:text-[1.5vw]'>Virtual Tour</p>
                        <Link target='_blank' to={propertyDetails?.videoLink ? propertyDetails?.videoLink : '#'} className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-700">{propertyDetails?.videoLink ? propertyDetails?.videoLink : 'The virtual tour is not Included'}</Link>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-2vw md:mt-vw font-semibold text-[3.5vw] md:text-[1.5vw]'>EPC Details</p>
                        <Link target='_blank' to={propertyDetails?.epc ? propertyDetails?.epc : '#'} className="text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-700">{propertyDetails?.epc ? propertyDetails?.epc : 'The virtual tour is not Included'}</Link>
                    </div>
                </section>
                <section className="w-full mt-3vw md:mt-2vw ml-2vw">
                    <PinLocation lat={propertyDetails?.lat ? propertyDetails?.lat : -1.567857} lng={propertyDetails?.lng ? propertyDetails?.lng : 53.812431}/>
                </section>
            </article>
            <section className="w-full p-2vw flex flex-col lf:flex-row items-center justify-around">
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
            {/* sales properties */}
            <div className="w-full flex-col bg-gray-100 p-2vw flex justify-center items-center">
            <h1 className='text-yellow-600 text-[4.5vw] xl:text-2vw lg:text-2vw md:text-2vw text-center capitalize font-semibold'>Similar properties for Sale</h1>
            <div className="grid grid-cols-1 p-[4vw] lg:p-0   lg:ml-[1vw]  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 w-full gap-3 mt-2vw">
              {salesProperties?.filter((property)=> property?._id !== id).slice(0, 4)?.map((item, index) => (
                <Link target='_blank' to={`/sales-details/${item?._id}`} className='w-full'>
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.bedrooms} price={item?.price} location={item?.location} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bedrooms} img={item?.image1?.url} />
                </Link>
              ))}
            </div>
          </div>
        </Layout>
    
  )
}

export default SalesPropertyDetails