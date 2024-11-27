import React from "react";
import ReportCard from "../../Component/Cards/ReportCard";
import { useGlobalContext } from "../../UserContext/UserContext";
import {motion} from 'framer-motion'
const SubChildCategory = () => {
  const { subChildCategoryDetails, setCurrentStep, currentStep, prevForm, setSpecificFaults, nextForm,
   maintenanceDetails, setmaintenanceDetails,
  } = useGlobalContext();
  return (
    <>
      <article className="w-full   grid grid-cols-1 md:grid-cols-6  px-4 py-8">
        {subChildCategoryDetails?.map((item, index) => (
          <div
            key={index}
            className="transition duration-700 ease-in-out mt-[3vw]"
          >
            {
              <ReportCard
                key={index}
                icon={item?.icon}
                title={item?.title}
                onMainCategoryClick={() => {
                  setCurrentStep(4);
                  setSpecificFaults(item?.specificFault);
                  setmaintenanceDetails({
                    ...maintenanceDetails,
                    subChildFault: item?.title,
                  });
                }}
              />
            }
          </div>
        ))}
      </article>

      <section className="w-full max-w-[70vw] flex items-center justify-between mt-[7vw] md:mt-vw">
     
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
       disabled={maintenanceDetails.subChildFault === ""}
       onClick={nextForm}
       className={`px-6 py-2 rounded-lg shadow-md transition duration-300 
         focus:outline-none focus:ring-2 focus:ring-amber-500
         ${maintenanceDetails.subChildFault === "" 
           ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
           : "bg-amber-500 text-white hover:bg-amber-600"}`}
     >
       Next
     </motion.button>
   </motion.div>
   </section>
    </>
  );
};

export default SubChildCategory;
