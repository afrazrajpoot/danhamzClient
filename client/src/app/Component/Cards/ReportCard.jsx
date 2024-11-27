import React from "react";
import { motion } from "framer-motion";

const ReportCard = ({ icon, title, onMainCategoryClick }) => {
  return (
    <motion.figure
      onClick={onMainCategoryClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full md:max-w-[12vw]  h-[40vw] md:h-[15vw] cursor-pointer"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full border border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 
                    shadow-md hover:shadow-lg hover:border-blue-900 
                    bg-white hover:bg-white/90 
                    transition-all duration-300 ease-in-out 
                    transform hover:scale-105 active:scale-95"
      >
        <div className="w-full max-w-[15vw] lg:max-w-[3.5vw] mb-2 flex justify-center">
          <motion.img 
            src={icon} 
            alt={title} 
            className="w-full h-auto object-contain"
            whileHover={{ rotate: 5 }}
          />
        </div>
        <p className="text-center text-sm md:text-xs text-gray-700 
                      hover:text-blue-900 hover:font-semibold 
                      transition-all duration-300">
          {title}
        </p>
      </motion.div>
    </motion.figure>
  );
};

export default ReportCard;