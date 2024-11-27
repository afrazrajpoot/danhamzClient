import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetAllLettingsQuery, useGetAllSalesQuery } from "../store/storeApi";
import AllCategories from "../pages/Reports/AllCategories";
import SubCategory from "../pages/Reports/SubCategory";
import SubChildCategory from "../pages/Reports/SubChildCategory";
import SelectFault from "../pages/Reports/SelectFault";
import { Form } from "../pages/Reports/Form";
const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { data: lettings } = useGetAllLettingsQuery();
  const { data: sales } = useGetAllSalesQuery();
  const [lettingProperties, setLettingProperties] = useState([]);
  const [salesProperties, setSalesProperties] = useState([]);
  const [searchedLettingsProperties, setSearchedLettingsProperties] = useState(
    []
  );
  const [searchedSalesProperties, setSearchedSalesProperties] = useState([]);
  const [searchedRentLocation, setSearchedRentLocation] = useState("");
  const [searchedLocation, setSearchedLocation] = useState("");
  const [showRentSection, setShowRentSection] = useState(true);
  const [reportDetails, setReportDetails] = useState({});
  const [subCategoryDetails, setSubCategoryDetails] = useState([]);
  const [subChildCategoryDetails, setSubChildCategoryDetails] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [specificFaults, setSpecificFaults] = useState([]);

  const [previousStep, setPreviousStep] = useState(null);
  const [state, setState] = useState(false);
  const [imageUrl, setImageurl] = useState();
  const [newBlog, setNewBlog] = useState(null);
  const [maintenanceDetails, setmaintenanceDetails] = useState({
    mainFault: "",
    childFault: "",
    subChildFault: "",
    fault: "",
    desc: "",
    images: [],
  });
  const nextForm = () => {
    setPreviousStep(currentStep);
    setCurrentStep(currentStep + 1);
  };

  const prevForm = () => {
    // console.log("clicked", currentStep);
    if (currentStep == 2) {
      setCurrentStep(1);
    }
    if (subCategoryDetails == null) {
      setCurrentStep(1);
    } else if (subChildCategoryDetails == null && currentStep != 2) {
      setCurrentStep(2);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderSteps = (step) => {
    switch (step) {
      case 1:
        return <AllCategories />;
      case 2:
        return <SubCategory />;
      case 3:
        return <SubChildCategory />;
      case 4:
        return <SelectFault />;
      case 5:
        return <Form />;
      default:
        return null;
    }
  };
  useEffect(() => {
    renderSteps();
  }, [currentStep]);

  useEffect(() => {
    if (lettings) {
      setLettingProperties(lettings);
    }
    if (sales) {
      setSalesProperties(sales);
    }
  }, [lettings, sales]);

  return (
    <UserContext.Provider
      value={{
        lettingProperties,
        setLettingProperties,
        salesProperties,
        setSalesProperties,
        searchedLettingsProperties,
        setSearchedLettingsProperties,
        searchedSalesProperties,
        showRentSection,
        setShowRentSection,
        setSearchedSalesProperties,
        searchedRentLocation,
        setSearchedRentLocation,
        searchedLocation,
        setSearchedLocation,
        reportDetails,
        setReportDetails,
        subCategoryDetails,
        setSubCategoryDetails,
        renderSteps,
        subChildCategoryDetails,
        setSubChildCategoryDetails,
        currentStep,
        setCurrentStep,
        nextForm,
        prevForm,
        previousStep,
        setPreviousStep,
        specificFaults,
        setSpecificFaults,
        state,
        setState,
        imageUrl,
        setImageurl,
        maintenanceDetails,
        setmaintenanceDetails,
        newBlog, setNewBlog
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
