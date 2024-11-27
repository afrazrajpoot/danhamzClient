import React from 'react';
import { Icon } from '@iconify/react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  setCurrentPage 
}) => {
  // Render only if there's more than one page
  if (totalPages <= 1) return null;

  // Generate page range, limiting to 5 visible pages
  const generatePageRange = () => {
    const range = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return range;
  };

  return (
    <div className="flex flex-wrap justify-center items-center w-full bg-gray-100 py-4 px-2 space-x-2 rounded-lg shadow-sm">
      {/* Previous Button */}
      <button
        className={`
          transition-all duration-300 ease-in-out
          ${currentPage === 1 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-md'}
          px-3 py-2 rounded-md flex items-center justify-center
        `}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon icon="ep:arrow-left-bold" className="text-xl" />
      </button>

      {/* Page Numbers */}
      {generatePageRange().map(page => (
        <button
          key={page}
          className={`
            transition-all duration-300 ease-in-out
            ${currentPage === page 
              ? 'bg-amber-500 text-white' 
              : 'bg-[#152347] text-white hover:bg-[#1e3a8a]'}
            w-10 h-10 flex items-center justify-center 
            rounded-md font-semibold
            hover:shadow-md
          `}
          onClick={() => setCurrentPage(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`
          transition-all duration-300 ease-in-out
          ${currentPage === totalPages 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-md'}
          px-3 py-2 rounded-md flex items-center justify-center
        `}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Icon icon="ep:arrow-right-bold" className="text-xl" />
      </button>
    </div>
  );
};

export default Pagination;