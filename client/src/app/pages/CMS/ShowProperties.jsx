import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import { Icon } from '@iconify/react';
import { useGetAllDisabledLettingsQuery, useGetAllLettingsQuery, useGetAllSalesQuery } from '../../store/storeApi';
import LettingProperty from '../../Component/PropertyDetails/LettingProperty';
import { Link, useNavigate } from 'react-router-dom';
import Property from '../../Component/PropertyDetails/Property';
import Loader from '../Reports/Loader';

const ShowProperties = () => {
  const [showLettings, setShowLettings] = useState(true);
  const [showDisabledProperties, setShowDisabledProperties] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const { data: lettings, refetch: refetchLettings, isFetching: lettingsLoading } = useGetAllLettingsQuery();
  const { data: sales, refetch: refetchSales, isFetching: salesLoading } = useGetAllSalesQuery();
  const {data: disabledLettings, refetch: refetchDisabledLettings, isFetching: disabledLettingsLoading} = useGetAllDisabledLettingsQuery()
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("userLoginInfo"));
    const admin = token?.admin ? token?.admin : "user";

  const handleLogout = () => {
    localStorage.removeItem("userLoginInfo");
    localStorage.removeItem("tokken");
    navigate('/login');
  };

  useEffect(() => {
    if (showLettings) {
      refetchLettings();
    } else if (showSales){
      refetchSales();
    } else{
      refetchDisabledLettings();
    }
  }, [showLettings, refetchLettings, refetchSales, refetchDisabledLettings, showSales, showDisabledProperties]);

  if (lettingsLoading || salesLoading || disabledLettingsLoading) {
    return (
   <Loader />
    );
  }
  return (
    <div>
        <Layout>
            <main className="w-full relative col-center p-3vw">
              <button onClick={handleLogout} className='text-[1vw] p-[0.5vw] absolute hover:bg-amber-600 bg-amber-500 text-white top-[3vw] right-[2vw] rounded-md '>Logout</button>
                <h1 className="text-center text-2vw italic underline font-semibold cursor-pointer text-[#152347] w-full">Welcome to Danhamz's CMS!</h1>
                <section className="flex w-full items-center">
                    <h2 className="font-semibold text-vw">Select a category</h2>
                    <div className="flex items-center ml-2vw">
                    <p onClick={() => {setShowLettings(true); setShowSales(false); setShowDisabledProperties(false)}} className={`text-vw cursor-pointer mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showLettings ? 'bg-blue-700' : 'bg-gray-500'} p-[0.7vw]`}><Icon icon="pixelarticons:buildings" className='text-vw mr-0.5vw' />Lettings</p>
                    <p onClick={() => {setShowLettings(false); setShowSales(true); setShowDisabledProperties(false)}} className={`text-vw cursor-pointer mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showLettings ? 'bg-gray-500' : 'bg-blue-700'} p-[0.7vw]`}><Icon icon="teenyicons:house-outline" className='text-vw mr-0.5vw' />Sales</p>
                    <p onClick={() => {setShowLettings(false); setShowSales(false); setShowDisabledProperties(true)}} className={`text-vw cursor-pointer mt-2vw w-[15vw]  rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showDisabledProperties ? 'bg-gray-500' : 'bg-yellow-700'} p-[0.7vw]`}><Icon icon="fe:disabled" className='text-vw mr-0.5vw' />Let Properties</p>

                    <Link to={'/add-lettings-property'}>
                    <p className={`text-vw mt-2vw w-[10vw] rounded-md cursor-pointer text-start m-vw flex items-center text-white hover:bg-gray-500 bg-blue-500 p-[0.7vw]`}><Icon icon="pixelarticons:buildings" className='text-vw mr-0.5vw' />Add Lettings</p>
                    </Link>
                    <Link to={'/add-sales-property'}>
                    <p className={`text-vw mt-2vw w-[9vw] rounded-md cursor-pointer text-start m-vw flex items-center text-white hover:bg-gray-500 bg-blue-700 p-[0.7vw]`}><Icon icon="teenyicons:house-outline" className='text-vw mr-0.5vw' />Add Sales</p>
                    </Link>
                    </div>
                </section>
                {showLettings ? 
                <>
                  <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {lettings?.map((item, index) => (
                <Link to={`/edit-lettings-property/${item?._id}`}>
                <LettingProperty key={index} id={item?._id} address={admin && item.location}
                 quantity={item?.bedrooms} sharedHouse={item?.sharedHouse} date={item?.availableDate}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.isPropertyAvailable} furnished={item?.furnished} bills={item?.bills}
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
              ))}
            </div>
            </article>
                </>: showDisabledProperties ? 
                  <>
                  <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {disabledLettings?.map((item, index) => (
                <Link to={`/edit-lettings-property/${item?._id}`}>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms} sharedHouse={item?.sharedHouse}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.availableDate} furnished={item?.furnished} bills={item?.bills}
                 img={item?.image1?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image1?.fileName}`} 
                 img2={item?.image2?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image2?.fileName}`} 
                 img3={item?.image3?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image3?.fileName}`}
                 img4={item?.image4?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image4?.fileName}`}
                 img5={item?.image5?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image5?.fileName}`}
                 img6={item?.image6?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image6?.fileName}`}
                 img7={item?.image7?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image7?.fileName}`}
                 img8={item?.image8?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image8?.fileName}`}
                 img9={item?.image9?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image9?.fileName}`}
                 img10={item?.image10?.url || `${import.meta.env.VITE_API_URL}/lettings/${item?.image10?.fileName}`}                 />
                </Link>
              ))}
            </div>
            </article>
                </> : <>
                <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {sales?.map((item, index) => (
                <Link to={`/edit-sales-property/${item?._id}`}>
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.bedrooms} price={item?.price} name={item?.propertyName} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bedrooms} 
                   img={item?.image1?.url || `${import.meta.env.VITE_API_URL}/sales/${item?.image1?.fileName}`} 
                 />
                 </Link>
              ))}
            </div>
            </article>
                </>}
            </main>
        </Layout>
    </div>
  )
}

export default ShowProperties