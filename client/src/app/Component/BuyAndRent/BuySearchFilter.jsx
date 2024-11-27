import React, { useState } from 'react'
import { buyContainer2 } from '../../Data'
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../UserContext/UserContext';
import SearchInput2 from './SearchInput2';
  

const BuySearchFilter = () => {
  const {setSearchedSalesProperties, setShowRentSection, setSearchedRentLocation, searchedRentLocation} = useGlobalContext();
  const [filteredResult, setFilteredResult] = useState({location: searchedRentLocation || "", propertyType: '', features: "", minPrice: null, maxPrice: null, minBedrooms: null, maxBedrooms: null, isAvailableFrom: ""});
  const [clearInputField, setClearInputField] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate()
  const propertiesType = [ 'Detatched', 'Semi Detatched', 'Tarraced', 'Bunglow', 'Flat', 'Stanningley'];
  const features = ['Video Viewing', 'Garden', 'Parking', 'Garage'];

  const { handleSubmit, setValue, control, reset } = useForm({
      defaultValues: {
          minPrice: null, maxPrice: null,
          minBedrooms: null, maxBedrooms: null,
          location: '',
          features: '',
          propertyType: '',
          isAvailableFrom: ''
      },
  });
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setFilteredResult(prevState => ({
      ...prevState,
      [name]: value
    }));
    setValue(name, value);
  }
  

    const onSubmit = async (data, e) => {
      e.preventDefault();
      setSearchedSalesProperties([])
      try {
        let queryString = '';
        if(searchedRentLocation !== "") {
          queryString += `?location=${searchedRentLocation}`;
        }
        if (data?.minPrice !== null) {
          queryString += `&minPrice=${data?.minPrice}`;
        }
        if (data?.maxPrice !== null) {
          queryString += `&maxPrice=${data?.maxPrice}`;
        }
        if (data?.minBedrooms !== null) {
          queryString += `&minBedrooms=${data?.minBedrooms}`;
        }
        if (data?.maxBedrooms !== null) {
          queryString += `&maxBedrooms=${data?.maxBedrooms}`;
        }
        if (data?.location !== '') {
          queryString += `&location=${data?.location}`;
        }
        if (data?.features !== null && data?.features !== undefined && data?.features !== '') {
          queryString += `&features=${data?.features}`;
        } if (data?.propertyType !== null && data?.propertyType !== undefined && data?.propertyType !== '') {
          queryString += `&propertyType=${data?.propertyType}`;
        }
        if (data?.isAvailableFrom !== '') {
          queryString += `&isAvailableFrom=${data?.isAvailableFrom}`;
        }
    
        // Remove the leading '&' if there is a query string
        queryString = queryString ? queryString.slice(1) : '';
    
        // Make the request only if there is a valid query string
       
        if (queryString) {
          const fetchData = await axios.get(`${import.meta.env.VITE_API_URL}/sales/advancedSearch?${queryString}`);
          const result = await fetchData?.data
          setSearchedSalesProperties(result);
          navigate(`/search-properties?${queryString}`);
          setSearchedRentLocation('');
          setShowRentSection(false);
          setClearInputField(true);       
          reset();
        }
      } catch (error) {
        console.log(error);
      }
      setSearchedRentLocation('')
      setClearInputField(true);
      reset({
        minPrice: '',
        minBedrooms: '',
        features: '',
        propertyType: '',
        location: '',
        isAvailableFrom: '',
      });
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' w-full h-full'>
      <section className=' w-full ml-[1vw] flex items-center'>
   <SearchInput2 clearInputField={clearInputField} title={'Buy'} />
   </section>
   <main className="w-full mt-[1vw] xl:max-w-[50vw] lg:max-w-[50vw] md:max-w-[50vw] ml-vw rounded-[1vw] bg-[#152347] opacity-90 p-vw">
      <div className="flex items-center rounded-md relative">
    <div className="rounded-md">
   <section className='bg-white w-full grid grid-cols-3 gap-[1vw] lg:grid-cols-5 lg:gap-0'>
      {buyContainer2?.map((item, index) => (
        <div className="flex items-center w-full cursor-pointer max-w-[35vw] lg:max-w-[20vw] border-[1px]" key={index}>
          <span className='text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] ml-[2.5vw] lg:ml-[0.5vw] md:text-[1.5vw] text-blue-950'>{item?.icon}</span>
          <Controller 
            control={control}
            name={item?.name}
            render={({ field }) => (
              <select {...field} onChange={handleSearch} className='w-full bg-inherit -ml-0.5vw cursor-pointer text-[3.5vw] xl:text-vw lg:text-vw md:text-vw font-medium text-black p-vw focus:outline-none appearance-none'>
                <option value="" className='text-[3.5vw] xl:text-vw lg:text-vw md:text-vw bg-inherit'>{item?.title}</option>
                {item?.options?.map((option, index) => (
                  <option key={index} className='text-[3.5vw] xl:text-vw lg:text-vw md:text-vw' value={option?.value}>{option?.title}</option>
                ))}
              </select>
            )}
          />
        </div>
      ))}
      </section>
    </div>
   </div>
    </main>
   <aside className='w-full flex bg-white ml-vw mt-[2vw] md:mt-0.5vw p-vw'>
      <section className="w-full m-0.5vw">
        <p className='text-[3vw] text-[#152347] font-semibold xl:text-vw lg:text-vw md:text-vw'>Choose the property type</p>
        <div className="mt-0.5vw  w-full">
          <select onChange={handleSearch} name="propertyType" className="w-full bg-inherit -ml-0.5vw cursor-pointer text-[2.5vw] xl:text-vw lg:text-vw md:text-vw font-medium text-black p-[1.5vw] md:p-vw focus:shadow-md focus:outline-none appearance-none border-[0.1vw] border-[#152347] rounded-md ">
            <option value="" className='text-[2.5vw] xl:text-vw lg:text-vw md:text-vw bg-inherit'>Property Type</option>
            {propertiesType?.map((suggestion, index) => (
              <option key={index} className='text-[2.5vw] xl:text-vw lg:text-vw md:text-vw' value={suggestion}>{suggestion}</option>
            ))}
          </select>
        </div>
      </section>
      <section className="w-full mt-0.5vw">
        <p className='text-[3vw] text-[#152347] font-semibold xl:text-vw lg:text-vw md:text-vw'>Choose the features</p>
        <div className="mt-0.5vw w-full">
          <select onChange={handleSearch} name="features" className="w-full bg-inherit -ml-0.5vw cursor-pointer text-[2.5vw] xl:text-vw lg:text-vw md:text-vw font-medium text-black p-[1.5vw] md:p-vw focus:shadow-md focus:outline-none appearance-none border-[0.1vw] border-[#152347] rounded-md ">
            <option value="" className='text-[2.5vw] xl:text-vw lg:text-vw md:text-vw bg-inherit'>Features</option>
            {features?.map((suggestion, index) => (
              <option key={index} className='text-[2.5vw] xl:text-vw lg:text-vw md:text-vw' value={suggestion}>{suggestion}</option>
            ))}
          </select>
        </div>
      </section>
    </aside>
    <div className={`w-full bg-gray-100 ml-2vw ${showFilter ? 'mt-vw' : 'mt-2vw'}`}>
      <button type='submit' className='text-[3vw] bg-amber-400 text-white hover:bg-amber-500 xl:text-vw lg:text-vw md:text-vw p-vw w-fit cursor-pointer'>Search</button>
      <Link to='/search-properties'>
      <button className='text-[3vw] bg-[#152347] text-white hover:bg-[#1c2f5f] xl:text-vw ml-2vw lg:text-vw md:text-vw p-vw w-fit cursor-pointer'>Advance Search</button>
      </Link>
    </div>
    </form>
  )
}

export default BuySearchFilter