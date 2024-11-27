import React, { useState } from 'react';

const Prac = () => {
  const [data, setData] = useState({
    title: '',
    description: ''
  });
  const [arr, setArr] = useState([1]);
  const [showData, setShowData] = useState([]);

  const handleValue = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const renderData = () => {
    if (data.title.trim() && data.description.trim()) {
      setShowData(prev => [...prev, { ...data, id: Date.now() }]);
      setArr(prev => [...prev, prev + 1]);
      setData({ title: '', description: '' }); // Reset form
    }
  };

  const handleDelete = (index) => {
    setShowData(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Item</h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter title"
                value={data.title}
                name="title"
                onChange={handleValue}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter description"
                value={data.description}
                name="description"
                onChange={handleValue}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
            </div>
            <button
              onClick={renderData}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Add Item
            </button>
          </div>
        </div>

        {/* Display Items */}
        {showData.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Added Items</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {showData.map((elem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {elem.title}
                      </h4>
                      <p className="text-gray-600">
                        {elem.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prac;