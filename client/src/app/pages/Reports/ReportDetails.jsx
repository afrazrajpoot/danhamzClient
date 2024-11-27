import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../../Layout/Layout";
import Statusbar from "../../Component/Report/Statusbar";
import { useGlobalContext } from "../../UserContext/UserContext";

const ReportDetails = () => {
  const { currentStep, renderSteps, setCurrentStep } = useGlobalContext();

  useEffect(() => {
    setCurrentStep(1);
  }, []);

  return (
    <Layout>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 w-full p-[2vw]"
      >
        <motion.section 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center"
        >
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-[4.3vw] md:text-[2.3vw] font-bold text-gray-600 italic text-center mt-[0.5vw]"
          >
            Submit your maintenance request here
          </motion.h1>
          
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Statusbar stage={currentStep} title={"Report Details"} />
          </motion.div> */}
        </motion.section>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          // className="w-full col-center"
        >
          {renderSteps(currentStep)}
        </motion.section>
      </motion.main>
    </Layout>
  );
};

export default ReportDetails;