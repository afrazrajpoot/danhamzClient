import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Bed, Bath, Sofa, Home, Search } from 'lucide-react';

const FeatureButton = ({ text, icon: Icon, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-yellow-600 text-white',
    secondary: 'bg-gray-200 text-gray-800'
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${variants[variant]}`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm font-medium whitespace-nowrap">{text}</span>
    </div>
  );
};

const ActionButton = ({ text, to }) => (
  <Link to={to} className="w-full">
    <div className="flex justify-center items-center px-6 py-3 bg-[#152347] text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <span className="text-sm font-medium">{text}</span>
    </div>
  </Link>
);

const PropertyRoomsInfo = ({
  propertyURL,
  requestViewing,
  propertyType,
  price,
  propertyName,
  availableDate,
  furnished,
  bills,
  bedrooms,
  bathrooms,
  reception,
  monthPrice,
  weekPrice
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const availabilityText = availableDate <= today ? 'Available Now' : availableDate;

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Header Section */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          {propertyName}
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-medium">
          Available From: {availabilityText}
        </p>
      </div>

      {/* Pricing Section */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <span className="text-lg md:text-xl font-bold text-[#152347]">£{monthPrice}</span>
            <span className="text-sm text-gray-600">PCM</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <span className="text-lg md:text-xl font-bold text-[#152347]">£{weekPrice}</span>
            <span className="text-sm text-gray-600">PPW</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {bills === 'Bills Included' && (
          <FeatureButton
            text="Bills Included"
            icon={Lightbulb}
            variant="primary"
          />
        )}
        {bedrooms && (
          <FeatureButton
            text={`${bedrooms} Bedrooms`}
            icon={Bed}
            variant="primary"
          />
        )}
        {bathrooms && (
          <FeatureButton
            text={`${bathrooms} Bathrooms`}
            icon={Bath}
            variant="primary"
          />
        )}
        {reception && (
          <FeatureButton
            text={`${reception} Reception`}
            icon={Sofa}
            variant="secondary"
          />
        )}
        {furnished && (
          <FeatureButton
            text={furnished}
            icon={Home}
            variant="secondary"
          />
        )}
        {propertyType && (
          <FeatureButton
            text={propertyType}
            icon={Search}
            variant="secondary"
          />
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <ActionButton 
          to={propertyURL}
          text="Property Details"
        />
        <ActionButton
          to={requestViewing}
          text="Request A Viewing"
        />
      </div>
    </div>
  );
};

export default PropertyRoomsInfo;