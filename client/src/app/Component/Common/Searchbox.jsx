import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../UserContext/UserContext';

const Searchbox = ({handleRentBtunClick, handleBuyBtunClick, clearInputField}) => {
    const {searchedLocation, setSearchedLocation} = useGlobalContext();
      const [showRentSection, setShowRentSection] = useState(true);
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
        setShowSuggestions(false);
      };


  return (
    <div>
        <section className="w-full rounded-[2vw] max-w-[80vw] absolute bottom-[5vw] left-[10vw] xl:left-[15vw] lg:left-[10vw] md:left-[15vw] xl:max-w-[70vw] lg:max-w-[70vw] md:max-w-[70vw] p-2vw bg-[#152347] opacity-90">
      <h1 className='text-white text-[3.5vw] xl:text-[1.1vw] lg:text-[1.1vw] md:text-[1.1vw] italic font-medium'>Find your perfect home</h1>
      <div className="flex mt-vw items-center w-full lg:flex-row flex-col" ref={inputRef}>
       <div className='w-full'>
       <input
          type="text"
          name='location'
          onChange={handleInputChange}
          value={searchedLocation}
          placeholder="Enter City..."
          className="w-full p-[1.5vw] xl:p-[0.7vw] rounded-md lg:p-[0.7vw] md:p-[0.7vw] text-[3.5vw] xl:text-vw lg:text-vw md:text-vw bg-white xl:max-w-[55vw] lg:max-w-[55vw] md:max-w-[55vw]  focus:outline-none"
        />
       </div>
       <div className="flex gap-2 md:gap-3 mt-[2vw] lg:mt-[0vw]">
            <button
              className={`flex-1 md:flex-none ${
                showRentSection
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 md:px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0`}
              onClick={() => {
                setShowRentSection(true);
                handleRentBtunClick();
              }}
            >
              Rent
            </button>

            <button
              className={`flex-1 md:flex-none ${
                showRentSection
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
              } px-4 md:px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0`}
              onClick={() => {
                setShowRentSection(false);
                handleBuyBtunClick();
              }}
            >
              Buy
            </button>
          </div>
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute bg-white w-full max-w-[30vw] xl:max-w-[15vw] lg:max-w-[15vw] md:max-w-[15vw] max-h-[25vw] xl:max-h-[15vw] lg: md:max-h-[15vw] mt-0.5vw p-[0.5vw] border-gray-500 rounded-md border-[1px] overflow-y-scroll">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} className="cursor-pointer p-[1.5vw] md:p-[0.5vw] hover:bg-amber-300 text-[3vw] xl:text-vw lg:text-vw md:text-vw font-medium" onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      ) 
      // !filteredSuggestions.length > 0 && showMatchCase && <p className='absolute bg-white cursor-pointer text-3vw md:text-vw font-medium w-full max-w-[30vw] md:max-w-[15vw] mt-0.5vw p-[0.5vw] border-gray-500 rounded-md border-[1px]'>No matches found</p>
       }
    </section>
    </div>
  )
}

export default Searchbox