import React from "react";
import { motion } from "framer-motion";
import { repaiReport } from "../../Data";
import ReportCard from "../../Component/Cards/ReportCard";
import { useGlobalContext } from "../../UserContext/UserContext";

const AllCategories = () => {
  const {
    setSubCategoryDetails,
    currentStep,
    setCurrentStep,
    nextForm,
    prevForm,
    setSpecificFaults,
    maintenanceDetails,
    setmaintenanceDetails,
  } = useGlobalContext();

  const handleCategoryChange = (id) => {
    const checkFurtherCategory = repaiReport?.filter((item) => item?.id === id);
    if (checkFurtherCategory?.[0]?.childFault) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4);
    }
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  // Individual card animation
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-6 gap-4"
      >
        {repaiReport?.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="flex justify-center"
          >
            <ReportCard
              icon={item?.icon}
              title={item?.title}
              onMainCategoryClick={() => {
                handleCategoryChange(item?.id);
                setSubCategoryDetails(item?.childFault);
                setSpecificFaults(item?.specificFault);
                setmaintenanceDetails({ 
                  ...maintenanceDetails, 
                  mainFault: item.title 
                });
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between items-center mt-8 space-x-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentStep === 1}
          onClick={prevForm}
          className="px-6 py-2 bg-blue-900 text-white rounded-lg shadow-md transition duration-300 
            disabled:opacity-50 disabled:cursor-not-allowed 
            hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={maintenanceDetails.mainFault === ""}
          onClick={nextForm}
          className={`px-6 py-2 rounded-lg shadow-md transition duration-300 
            focus:outline-none focus:ring-2 focus:ring-amber-500
            ${maintenanceDetails.mainFault === "" 
              ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
              : "bg-amber-500 text-white hover:bg-amber-600"}`}
        >
          Next
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AllCategories;