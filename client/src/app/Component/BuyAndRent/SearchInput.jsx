import React, { useEffect, useRef, useState } from 'react'
import { Search, MapPin } from 'lucide-react';
import { useGlobalContext } from '../../UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const SearchInput = ({clearInputField}) => {
    const {setSearchedRentLocation} = useGlobalContext()
    const [searchedLocation, setSearchedLocation] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const suggestions = ['Armley', 'Beeston', 'Bradford', 'Bramley', 'City Center', 'East End Park', 'Farsley', 'Gildersome', 'Horsforth', 'Leeds', 'Meanwood', 'Morley', 'Northgate House', 'Pudsey', 'Stanningley', 'Wortley', 'Wyke'];
  
    const inputRef = useRef();
    const navigate = useNavigate()

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
    
        const filtered = suggestions.filter((location) =>
            location.toLowerCase().startsWith(inputValue.toLowerCase())
        );
    
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
    };
    
    const handleSuggestionClick = (suggestion) => {
        setSearchedLocation(suggestion);
        setSearchedRentLocation(suggestion);
        setShowSuggestions(false);
    };

    const filterProperty = () => {
        navigate(`/search-properties?location=${searchedLocation}`)
    }

    return (
        <div className='relative w-full flex flex-col items-center'>
            <div className='w-full flex items-center space-x-2 relative'>
                <div className='flex items-center bg-white rounded-md border w-full'>
                    <MapPin 
                        className='text-xl text-blue-950 ml-3' 
                    />
                    <input 
                        type="text" 
                        placeholder='Search Location....' 
                        value={searchedLocation} 
                        onChange={handleInputChange} 
                        ref={inputRef}
                        className='flex-grow p-2 text-base focus:outline-none' 
                    />
                    <button 
                        onClick={filterProperty}  
                        type='submit' 
                        className='mr-2'
                    >
                        <Search className='text-blue-950 hover:text-blue-700 lg:ml-0 ml-[-7vw]' />
                    </button>
                </div>
            </div>

            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="absolute left-0 top-full mt-1 bg-white w-full max-w-xl max-h-48 overflow-y-auto border rounded-md shadow-lg z-10">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li 
                            key={index} 
                            className="cursor-pointer p-2 hover:bg-amber-300 text-base" 
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchInput