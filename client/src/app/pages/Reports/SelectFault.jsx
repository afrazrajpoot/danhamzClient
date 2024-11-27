import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { useGlobalContext } from '../../UserContext/UserContext';

const SelectFault = () => {
  const [selectedFault, setSelectedFault] = useState(null);
  const { 
    prevForm, 
    specificFaults, 
    nextForm, 
    maintenanceDetails, 
    setmaintenanceDetails 
  } = useGlobalContext();

  const faultVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: custom * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }),
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (

      <motion.div 
        initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0.1)" }}
        animate={{ 
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
          transition: { delay: 0.3 }
        }}
        className="w-full  p-8 md:p-12 space-y-8"
      >
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Maintenance Fault Selection
          </h1>
          <p className="text-slate-500 text-lg">
            Choose the specific fault type for your maintenance request
          </p>
        </motion.header>

        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {specificFaults?.map((fault, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={faultVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => {
                setmaintenanceDetails({ 
                  ...maintenanceDetails, 
                  fault: fault?.title 
                });
                setSelectedFault(fault?.title);
              }}
              className={`
                cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 group
                ${selectedFault === fault?.title 
                  ? "border-indigo-500 bg-indigo-50 shadow-lg" 
                  : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <AlertTriangle 
                  className={`
                    w-6 h-6 transition-colors duration-300
                    ${selectedFault === fault?.title 
                      ? "text-indigo-600" 
                      : "text-gray-400 group-hover:text-indigo-400"
                    }
                  `}
                />
                <span className={`
                  font-semibold transition-colors duration-300
                  ${selectedFault === fault?.title 
                    ? "text-indigo-700" 
                    : "text-slate-700 group-hover:text-indigo-600"
                  }
                `}>
                  {fault?.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <label className="block text-slate-700 font-semibold">
            Fault Details <span className="text-red-500">*</span>
          </label>
          <motion.textarea
            whileFocus={{ 
              scale: 1.02,
              boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.2)"
            }}
            placeholder="Provide a detailed description of the fault..."
            rows="5"
            className="
              w-full px-4 py-3 rounded-xl border-2 border-gray-200 
              focus:border-indigo-500 focus:outline-none 
              transition-all duration-300 resize-none
              bg-gray-50 hover:bg-white
            "
            onChange={(e) =>
              setmaintenanceDetails({
                ...maintenanceDetails,
                desc: e.target.value,
              })
            }
          />
        </motion.div>

  




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
       // disabled={currentStep === 1}
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
       disabled={maintenanceDetails.fault === ""}
       onClick={nextForm}
       className={`px-6 py-2 rounded-lg transition duration-300 
         focus:outline-none focus:ring-2 focus:ring-amber-500
         ${maintenanceDetails.fault === "" 
           ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
           : "bg-amber-500 text-white hover:bg-amber-600"}`}
     >
       Next
     </motion.button>
   </motion.div>
   </section>
      </motion.div>

  );
};

export default SelectFault;