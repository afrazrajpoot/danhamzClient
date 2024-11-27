import React from 'react';
import { Camera, Bed, ArrowRight, PoundSterling } from 'lucide-react';

const Property = ({
  tag,
  quantity,
  price,
  name,
  bed_rooms,
  img,
  img2,
  img3,
  img4,
  img5
}) => {
  const formatPrice = (price) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="w-full max-w-sm mx-auto transform transition-all duration-300 hover:scale-[1.02]">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={img}
            onError={(e) => e.target.src = '/images/no_preview.jpg'}
            alt={name}
            className="w-full h-48 md:h-56 object-cover"
          />
          
          {/* Image Counter */}
          <div className="absolute bottom-3 right-3 flex items-center bg-white px-3 py-1.5 rounded-full shadow-md">
            <Camera className="w-4 h-4 text-slate-700" />
            <span className="ml-1.5 text-sm font-medium text-slate-700">
              {quantity} pics
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Price */}
          <div className="flex items-center mb-2">
            <PoundSterling className="w-6 h-6 text-[#152347]" />
            <span className="text-[#152347] text-2xl font-semibold italic">
              {formatPrice(price)}
            </span>
          </div>

          {/* Property Name */}
          <h3 className="text-black font-medium text-lg mb-4">
            {name}
          </h3>

          {/* Bedrooms Badge */}
          <div className="inline-flex items-center bg-[#152347] text-white px-4 py-2 rounded-lg mb-4">
            <Bed className="w-5 h-5" />
            <span className="ml-2 text-sm font-medium">
              {bed_rooms} bedrooms
            </span>
          </div>

          {/* More Details Link */}
          <div className="flex items-center group cursor-pointer">
            <span className="text-[#152347] font-medium mr-2 group-hover:underline">
              More details
            </span>
            <ArrowRight className="w-5 h-5 text-[#152347] transition-transform duration-300 group-hover:translate-x-1" />
          </div>

          {/* Image Gallery Indicators */}
          {(img2 || img3 || img4 || img5) && (
            <div className="flex gap-1 mt-4">
              <div className="w-2 h-2 rounded-full bg-[#152347]"></div>
              {img2 && <div className="w-2 h-2 rounded-full bg-gray-300"></div>}
              {img3 && <div className="w-2 h-2 rounded-full bg-gray-300"></div>}
              {img4 && <div className="w-2 h-2 rounded-full bg-gray-300"></div>}
              {img5 && <div className="w-2 h-2 rounded-full bg-gray-300"></div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Property;