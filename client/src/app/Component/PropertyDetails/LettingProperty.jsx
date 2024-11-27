import React from 'react';
import { Building, Bed, ArrowRight, Sofa, Lightbulb } from 'lucide-react';

const Button = ({ text, icon: Icon, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-slate-900 text-white',
    secondary: 'bg-gray-200 text-gray-800',
    accent: 'bg-yellow-600 text-white'
  };

  return (
    <div className={`flex items-center justify-center p-2 rounded-md space-x-2 ${variants[variant]}`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm">{text}</span>
    </div>
  );
};

const PropertyCard = ({
  sharedHouse,
  weekPrice,
  location,
  monthPrice,
  bedRooms,
  img,
  available,
  furnished,
  bills,
  date,
  address
}) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        {sharedHouse && (
          <div className="absolute top-0 left-0 bg-yellow-600 text-white px-4 py-2 rounded-br-lg">
            <p className="text-sm font-medium">Shared House</p>
          </div>
        )}
        <img
          src={img}
          onError={(e) => e.target.src = '/images/no_preview.jpg'}
          alt={location}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Location and Availability */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{location}</h3>
          <span className={`px-3 py-1 text-center rounded-full text-sm ${available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {available === true ? 'Available' : 'Not Available'}
          </span>
        </div>

        {/* Date */}
        <div className="mb-4">
        <p className="text-sm text-gray-600"> <span className="font-semibold">Available From</span> : {date}</p>
        </div>
        {address && <div className="mb-4">
          <p className="text-sm text-gray-600"> <span className="font-semibold">Address</span> : {address}</p>
        </div>}
        {/* Pricing */}
        <div className="flex justify-between mb-6">
          <div className="text-xl font-bold text-slate-900">
            £{monthPrice} <span className="text-sm font-normal">PCM</span>
          </div>
          <div className="text-xl font-bold text-slate-900">
            £{weekPrice} <span className="text-sm font-normal">PPW</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-[4vw] lg:gap-[1vw]">
          <Button
            text={furnished}
            icon={Sofa}
            variant="primary"
          />
          {bills && bills === 'Bills Included' && (
            <Button
              text={bills}
              icon={Lightbulb}
              variant="primary"
            />
          )}
          <Button
            text={`${bedRooms} bedrooms`}
            icon={Bed}
            variant="secondary"
          />
          <Button
            text="More Details"
            icon={ArrowRight}
            variant="accent"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;