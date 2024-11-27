import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../../UserContext/UserContext';


const SearchInput2 = ({clearInputField, title}) => {
    const {setSearchedRentLocation} = useGlobalContext()
    const [searchedLocation, setSearchedLocation] = useState('');
      const [filteredSuggestions, setFilteredSuggestions] = useState([]);
      const [showSuggestions, setShowSuggestions] = useState(true);
      const [showMatchCase, setShowMatchCase] = useState(false);
      const suggestions = ['Armley', 'Beeston', 'Bradford', 'Bramley', 'City Center', 'East End Park', 'Farsley', 'Gildersome', 'Horsforth', 'Leeds', 'Meanwood', 'Morley', 'Northgate House', 'Pudsey', 'Stanningley', 'Wortley', 'Wyke'];
  
      const inputRef = useRef();
  
      useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

      useEffect(() => {
        if(clearInputField){
          setSearchedLocation('')
        }
      }, [clearInputField])
    
      const handleOutsideClick = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
          setShowSuggestions(false);
        }
      };
    
      const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchedLocation(inputValue);
        setSearchedRentLocation(inputValue);
    
        // Filter suggestions based on input value
        const filtered = suggestions.filter((location) =>
          location.toLowerCase().startsWith(inputValue.toLowerCase())
        );
    
        setFilteredSuggestions(filtered);
        if(!filtered.length > 0){
          setShowMatchCase(true);
        }
        setShowSuggestions(true);
      };
    
      const handleSuggestionClick = (suggestion) => {
        setSearchedLocation(suggestion);
        setSearchedRentLocation(suggestion);
        setShowSuggestions(false);
      };
  return ( <>
    <main className='relative w-screen z-50'>
            <section className="w-full rounded-[1.5vw] xl:max-w-[50vw] lg:max-w-[50vw] md:max-w-[50vw] row-center bg-[#ffff] border-[1px]" ref={inputRef}>
                <Icon icon="fluent:location-28-filled" className='text-[3vw] ml-[0.5vw] xl:text-vw lg:text-vw md:text-vw  cursor-pointer text-blue-950 ' />
                <input type="text" placeholder='Search Location....' value={searchedLocation} onChange={handleInputChange} className='text-[3vw] rounded-[1.5vw] xl:text-vw lg:text-vw md:text-vw p-[2vw] md:p-[1vw] border-none focus:outline-none w-full' />
            </section>
  {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute bg-white w-full max-w-[30vw] xl:max-w-[15vw] lg:max-w-[15vw] md:max-w-[15vw] max-h-[25vw] xl:max-h-[15vw] lg: md:max-h-[15vw] mt-0.5vw p-[0.5vw] border-gray-500 rounded-md border-[1px] overflow-y-scroll">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} className="cursor-pointer p-[1.5vw] md:p-[0.5vw] hover:bg-amber-300 text-[3vw] xl:text-vw lg:text-vw md:text-vw font-medium" onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      ) 
       }
    </main>
  </>
  )
}

export default SearchInput2