import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from "@iconify/react";
import { useGlobalContext } from "../../UserContext/UserContext";
import { Toaster, toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import { reportDataForm } from "../../Data";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Image Upload Component
const UploadImages = ({ onImageUpload, onImageRemove }) => {
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    
    if (files.length + newFiles.length > 10) {
      toast.error("Maximum 10 files allowed");
      return;
    }

    const validFiles = newFiles.filter(file => file.size <= 30 * 1024 * 1024); // 30MB max
    
    if (validFiles.length !== newFiles.length) {
      toast.error("Some files exceed 30MB limit");
    }

    const processedFiles = validFiles.slice(0, 10 - files.length);
    const newUrls = processedFiles.map(file => URL.createObjectURL(file));

    setFiles(prev => [...prev, ...processedFiles]);
    setImageUrls(prev => [...prev, ...newUrls]);
    onImageUpload(processedFiles);
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedUrls = imageUrls.filter((_, i) => i !== index);
    
    setFiles(updatedFiles);
    setImageUrls(updatedUrls);
    onImageRemove(updatedFiles);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 p-6 bg-gray-50 rounded-xl"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Upload Supporting Images/Files
      </h2>
      
      <motion.div 
        onClick={() => fileInputRef.current.click()}
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
        className="border-2 border-dashed border-gray-300 p-6 text-center 
        rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer 
        transition-all duration-300 ease-in-out"
      >
        <Icon 
          icon="clarity:upload-cloud-line" 
          className="mx-auto text-4xl text-gray-500 mb-2" 
        />
        <p className="text-gray-600">Click to upload files (max 10, 30MB each)</p>
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileUpload}
          multiple 
          accept="image/*,video/*,audio/*"
          className="hidden" 
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {imageUrls.map((url, index) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <img 
                src={url} 
                alt={`Uploaded ${index + 1}`} 
                className="w-full h-24 object-cover rounded-lg" 
              />
              <button 
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 bg-red-500 text-white 
                rounded-full p-1 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
              >
                <Icon icon="clarity:close-line" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Main Form Component
export const Form = () => {
  const navigate = useNavigate();
  const { setCurrentStep, maintenanceDetails, setmaintenanceDetails } = useGlobalContext();
  const [formStep, setFormStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const { 
    handleSubmit, 
    control, 
    setValue, 
    formState: { errors }, 
    reset 
  } = useForm({
    defaultValues: { 
      address: "", 
      town: "", 
      postalCode: "", 
      name: "", 
      phoneNumber: "", 
      email: "", 
      message: "" 
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
    setmaintenanceDetails({ ...maintenanceDetails, [name]: value });
  };

  const handleImageUpload = (files) => {
    setmaintenanceDetails(prev => ({
      ...prev,
      images: [...(prev.images || []), ...files]
    }));
  };

  const handleImageRemove = (files) => {
    setmaintenanceDetails(prev => ({
      ...prev,
      images: files
    }));
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("mainFault", maintenanceDetails?.mainFault);
      formData.append("childFault", maintenanceDetails?.childFault);
      formData.append("address", maintenanceDetails?.address);
      formData.append("town", maintenanceDetails?.town);
      formData.append("postalCode", maintenanceDetails?.postalCode);
      formData.append("name", maintenanceDetails?.name);
      formData.append("phoneNumber", maintenanceDetails?.phoneNumber);
      formData.append("email", maintenanceDetails?.email);
      formData.append("message", maintenanceDetails?.message);
      formData.append("desc", maintenanceDetails?.desc);
      formData.append("fault", maintenanceDetails?.fault);
      formData.append("subChildFault", maintenanceDetails?.subChildFault);
      
      maintenanceDetails?.images.forEach((imageFile) => {
        formData.append("images", imageFile);
      });
      
      setLoading(true);
      const resp = await axios.post(
        `${import.meta.env.VITE_API_URL}/sendFault`,
        formData
      );
      
      if (resp.status === 200) {
        setLoading(false);
        toast.success("Report submitted", {
          position: "top-center",
          duration: 2000,
        });
        setmaintenanceDetails({
          mainFault: "",
          childFault: "",
          subChildFault: "",
          fault: "",
          desc: "",
          images: [],
        });
        navigate("/maintenance-request");
        setShowPopup(true);
      } else {
        setLoading(false);
        toast.error("Something went wrong", {
          position: "top-center",
          duration: 2000,
        });
      }
      reset();
    } catch (err) {
      toast.error("Something went wrong", {
        position: "top-center",
        duration: 2000,
      });
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
    >
      <motion.div 
        className="w-full lg:max-w-[50vw] bg-white shadow-2xl rounded-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Toaster position="top-center" />
        
        {formStep === 0 && (
          <UploadImages 
            onImageUpload={handleImageUpload}
            onImageRemove={handleImageRemove}
          />
        )}
        
        {formStep === 1 && (
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-4"
          >
            {reportDataForm?.map((item, index) => (
              <div key={index} className="space-y-2">
                <label 
                  htmlFor={item.name} 
                  className="text-gray-700 font-medium"
                >
                  {item?.label}
                </label>
                
                {(item?.type === "text" || 
                  item?.type === "number" || 
                  item?.type === "email") && (
                  <Controller
                    name={item?.name}
                    control={control}
                    rules={item?.rules}
                    render={({ field }) => (
                      <input
                        {...field}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type={item?.type}
                        placeholder={item?.placeholder}
                      />
                    )}
                  />
                )}
                
                {item?.type === "select" && (
                  <Controller
                    name={item?.name}
                    control={control}
                    rules={item?.rules}
                    render={({ field }) => (
                      <select
                        {...field}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select an option</option>
                        {item?.options?.map((option, idx) => (
                          <option key={idx} value={option?.value}>
                            {option?.label}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                )}
                
                {item?.type === "textarea" && (
                  <Controller
                    name={item?.name}
                    control={control}
                    rules={item?.rules}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={5}
                        placeholder={item?.placeholder}
                      />
                    )}
                  />
                )}
                
                {errors[item?.name] && (
                  <p className="text-red-500 text-sm">
                    {errors[item?.name]?.message}
                  </p>
                )}
              </div>
            ))}
            
            <div className="flex justify-between mt-6">
              <motion.button 
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFormStep(0)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              >
                Back
              </motion.button>
              
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </motion.button>
            </div>
          </form>
        )}
        
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
          </div>
        )}
        
        {showPopup && (
          <div className="flex justify-center items-center p-6">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              Maintenance Request Submitted Successfully!
            </div>
          </div>
        )}
        
        {formStep === 0 && (
          <div className="p-6 flex justify-end">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (maintenanceDetails?.images?.length > 0) {
                  setFormStep(1);
                } else {
                  toast.error("Please upload at least one file");
                }
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Next
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
