import React, { useEffect, useState, useCallback } from 'react';
import { rentContainer1 } from '../../Data';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useGetAllLettingsQuery } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';
import { Icon } from '@iconify/react';
import SearchInput from './SearchInput';
import PropertySearch from '../../pages/PropertySearch';
import { useNavigate, useLocation } from 'react-router-dom';
import { debounce } from 'lodash'; // Make sure to install lodash if not already installed
import Pagination from '../Pagination';
import Loader from '../../pages/Reports/Loader';

const RentProperty = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSearchedLettingsProperties, searchedRentLocation,searchedLocation, setSearchedRentLocation, searchedLettingsProperties } = useGlobalContext();
  const [filteredResult, setFilteredResult] = useState({
    location: searchedRentLocation || "",
    propertyType: "",
    minPrice: null,
    maxPrice: null,
    minBedrooms: null,
    maxBedrooms: null,
    bathrooms: null,
    features: "",
    isAvailableFrom: ""
  });
  const { data: lettings } = useGetAllLettingsQuery();
  const [clearInputField, setClearInputField] = useState(false);
  const [availableProperties, setAvailableProperties] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const { handleSubmit, setValue, control, reset, watch } = useForm({
    defaultValues: {
      minPrice: null,
      maxPrice: null,
      minBedrooms: null,
      maxBedrooms: null,
      bathrooms: null,
      propertyType: searchedRentLocation || "",
      location: '',
      features: '',
      isAvailableFrom: ''
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;
  const totalPages = Math.ceil(searchedLettingsProperties?.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

  useEffect(() => {
    const currentLettingsProperties = searchedLettingsProperties?.slice(indexOfFirstProperty, indexOfLastProperty);
    setAvailableProperties(currentLettingsProperties);
  }, [currentPage, searchedLettingsProperties]);

  const fetchDataFromQueryString = async (queryString) => {
    setShowLoading(true);
    try {
      if (queryString) {
        const fetchData = await axios.get(`${import.meta.env.VITE_API_URL}/lettings/advancedSearch?${queryString}`);
        const result = await fetchData.data;
        setSearchedLettingsProperties(result);
      } else {
        setSearchedLettingsProperties(lettings);
      }
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setShowLoading(false);
    }
  };

  const debouncedFetchData = useCallback(
    debounce((queryString) => fetchDataFromQueryString(queryString), 300),
    []
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const formValues = {};
    for (let [key, value] of searchParams.entries()) {
      formValues[key] = value;
      setValue(key, value);
    }
    setFilteredResult(formValues);

    // Fetch data based on the query string
    debouncedFetchData(location.search.slice(1));
  }, [location.search, setValue]);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setFilteredResult(prev => ({ ...prev, [name]: value }));
    setValue(name, value);

    const formData = watch();
    const searchParams = new URLSearchParams();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        searchParams.append(key, value);
      }
    });

    if (searchedRentLocation !== "") {
      searchParams.set('location', searchedRentLocation);
    }

    const queryString = searchParams.toString();
    navigate(`?${queryString}`, { replace: true });

    // This will trigger the useEffect hook to fetch data
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    // The form submission is now handled by handleSearch
    // This function can be removed if you don't need any additional logic on form submit
  };

 
 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);





  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
useEffect(()=>{
  if(searchedLocation){
    const cSearch = `location=${searchedLocation}`
    fetchDataFromQueryString(cSearch)
  }
},[])

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-full h-full'>
      <main className="w-full bg-[#152347] opacity-90 p-vw">
        <div className="flex flex-col md:flex-row p-[2vw] items-center relative">
          <SearchInput clearInputField={clearInputField} />
        </div>
        
        <article className='w-full col-center'>
          <section className='bg-white mt-[1vw] w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2'>
            {rentContainer1?.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center w-full cursor-pointer border-[1px] p-[2vw]"
              >
                <span className='text-base md:text-lg mr-2 text-blue-950'>{item?.icon}</span>
                <Controller 
                  control={control}
                  name={item?.name}
                  render={({ field }) => (
                    <select 
                      {...field} 
                      onChange={handleSearch} 
                      className='w-full bg-inherit cursor-pointer text-sm md:text-base font-medium text-black focus:outline-none appearance-none'
                    >
                      <option value="" className='text-sm md:text-base bg-inherit'>{item?.title}</option>
                      {item?.options?.map((option, index) => (
                        <option 
                          key={index} 
                          className='text-sm md:text-base' 
                          value={option?.value}
                        >
                          {option?.title}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            ))}
          </section>
        </article>
      </main>

      {showLoading && (
        <Loader />
      )}

      {searchedLettingsProperties?.length > 0 ? (
        <PropertySearch 
          totalProperties={searchedLettingsProperties} 
          searchedProperties={availableProperties} 
        />
      ) : null}
    </form>

    <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
  </>
  )
}

      {/* <p className='text-2vw font-medium text-blue-950 text-center mt-2vw w-full'>{currentPage} of {totalPages}</p> */}
export default RentProperty 