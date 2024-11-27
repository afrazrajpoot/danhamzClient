import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddLettingPropertyMutation, useDeleteLettingPropertyMutation, useGetLettingsByIdQuery, useRemovePropertyImageMutation, useUpdateLettingPropertyMutation } from '../../store/storeApi';
import { propertyUpdateForm } from '../../Data';
import {useForm, Controller} from 'react-hook-form';
import Layout from '../../Layout/Layout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Maps from '../../Component/Map/Maps';
import PinLocation from '../../Component/Map/PinLocation';
import FileInput from './FileInput';
import { Icon } from '@iconify/react';
import { Toaster } from 'sonner';

const UpdateLettingsProperty = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [deleteLettingProperty] = useDeleteLettingPropertyMutation();
    const [searchedLocation, setSearchedLocation] = useState(null)
    const { data: lettings, refetch: refetchLettings } = useGetLettingsByIdQuery(id);
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [showSearchMap, setShowSearchMap] = useState(false)
    const [updateLettingProperty]= useUpdateLettingPropertyMutation()
    const [addLettingProperty] = useAddLettingPropertyMutation()
    const [removePropertyImage] = useRemovePropertyImageMutation()
    const [pinLocation, setPinLocation] =  useState('')
   
    const navigate = useNavigate()
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null })
    const {handleSubmit, control, formState: { errors }, trigger, setValue} = useForm({
        defaultValues: {
            propertyName: propertyDetails?.propertyName || "", areaName: propertyDetails?.areaName || "", metaDescription: propertyDetails?.metaDescription || "", metaTitle: propertyDetails?.metaTitle || "", propertyType : propertyDetails?.propertyType || "", availableDate : propertyDetails?.availableDate || "",
            pricePerMonth: propertyDetails?.pricePerMonth || "", pricePerWeek : propertyDetails?.pricePerWeek || "", isPropertyAvailable : propertyDetails?.isPropertyAvailable || false,
            furnished : propertyDetails?.furnished || "", location : propertyDetails?.location || "", shareHouse: propertyDetails?.shareHouse || false,
            description :propertyDetails?.description || "", bedrooms : propertyDetails?.bedrooms || '', features: propertyDetails?.features || "",
            videoLink : propertyDetails?.videoLink || "", counselTax : propertyDetails?.counselTax || "", deposit : propertyDetails?.deposit || '',
            bathrooms : propertyDetails?.bathrooms || "", bills : propertyDetails?.bills || "", reception : propertyDetails?.reception || "",
            aditionalGuide: propertyDetails?.aditionalGuide || "", image1: propertyDetails?.image1?.url || propertyDetails?.image1 || "", isAvailableFrom: propertyDetails?.isAvailableFrom || "",
            image2: propertyDetails?.image2?.url || propertyDetails?.image2 || "", image3: propertyDetails?.image3?.url || propertyDetails?.image3 || "", image4: propertyDetails?.image4?.url || propertyDetails?.image4 || "",
            image5: propertyDetails?.image5?.url || propertyDetails?.image5 || "", image6: propertyDetails?.image6?.url || propertyDetails?.image6 || "", image7: propertyDetails?.image7?.url || propertyDetails?.image7 || "",
            image8: propertyDetails?.image8?.url || propertyDetails?.image8 || "", image9: propertyDetails?.image9?.url || propertyDetails?.image9 || "", image10: propertyDetails?.image10?.url || propertyDetails?.image10 || "",
            epc: propertyDetails?.epc || "", lat: propertyDetails?.lat || lettings?.lat || 0, lng: propertyDetails?.lng || lettings?.lng || 0,
          }
    })
    


    const [files, setFiles] = useState([]); // to store the files
    const [imageUrls, setImageUrls] = useState([]);
    const [imageCount, setImageCount] = useState(imageUrls?.length ? imageUrls?.length : 0);
    const ref = useRef();
    function handleInput() {
      ref.current.click();
    }
  

    const handleInputChange = ({ target: { name, value } }) => {
      setValue(name, value);
      trigger(name);
    };


    function handleImage(e) {
      const newFiles = Array.from(e.target.files);
      
      // Append new files and URLs, preserving the existing ones
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      const newImageUrls = newFiles.map((file) => URL.createObjectURL(file));
      setImageUrls((prevUrls) => [...prevUrls, ...newImageUrls]);
    }
    
    const handleRemoveFile = (index, url) => {
      // Remove the file and image URL at the specific index
      const fileName = url.split('/').pop();
      removePropertyImage({propertyId: id, fileName });
      const updatedFiles = files.filter((_, i) => i !== index);
      const updatedImageUrls = imageUrls.filter((_, i) => i !== index);
      setImageCount(updatedImageUrls.length)
      setImageUrls(updatedImageUrls);
    };    
    
    const onSubmit = async (data) => {
      setIsLoading(true);
      const formData = new FormData();
    
      // Append text data
      for (const key in data) {
        formData.append(key, data[key]);
      }
    
      // Append files to formData for upload
      files.forEach((file, index) => {
        formData.append(`image${id ? imageCount + index + 1 : index + 1}`, file);
      });
    
      // Set latitude and longitude based on searchedLocation or fallback to default coordinates
      const lat = searchedLocation?.center[0] ?? coordinates.lat;
      const lng = searchedLocation?.center[1] ?? coordinates.lng;
       // Use formData.set instead of formData.append for 'location' to avoid duplicates
  if (pinLocation) {
    // Add pinLocation to formData
    formData.set('location', Array.isArray(pinLocation) ? pinLocation.join(', ') : pinLocation);
  } else {
    formData.set('location', Array.isArray(lettings.location) ? lettings.location.join(', ') : lettings.location);
  }

      // Ensure no duplicate lat/lng in formData
      formData.delete('lat');
      formData.delete('lng');
      formData.append('lat', lat);
      formData.append('lng', lng);
    
      try {
        if (id) {
          // Update existing property
          const result = await updateLettingProperty({ id, data: formData });
          if (result) {
            toast.success('Property successfully updated');
            setTimeout(() => navigate('/cms'), 3000);
          } else {
            toast.error("Error updating property")
          }
        } else {
          // Create new property
          const result = await addLettingProperty(formData);
          if (result.data) {
            toast.success('Property successfully added');
            setTimeout(() => navigate('/cms'), 3000);
          } else {
            toast.error("Error adding property")
          }
        }
      } catch (error) {
        toast.error("Error adding property")
      }
    
      setIsLoading(false);
    };    



      const handleDeleteProperty = async () => {
        // first show alert to confirm deletion
        const confirmDeletion = window.confirm("Are you sure you want to delete this property? This action cannot be undone.");
        if (confirmDeletion) {
          try {
            await deleteLettingProperty(id);
            toast.success('Property successfully deleted', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
            setTimeout(() => {
              navigate('/cms');
            }, 3000);
          } catch (error) {
            toast.error('An error occurred.', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
            // console.error(error);
          }
        }
        }

          // Fetch property details when the component mounts
  useEffect(() => {
    if (id) {
       refetchLettings()
      //  setPropertyDetails({ ...lettings })
    }
  }, [id]);

  // Update form fields when lettings data changes
  useEffect(() => {
    if (lettings) {
      Object.keys(lettings).forEach((key) => setValue(key, lettings[key]));
      const { lat, lng } = lettings;
      setCoordinates({ lat, lng });
      const newImageUrls = [];
      for (let i = 1; i <= 10; i++) { // Loop from 1 to 10
        const imageKey = `image${i}`; // Construct the key for each image
        if (lettings[imageKey]?.fileName) { // Check if the fileName exists and is not empty
          newImageUrls.push(`${import.meta.env.VITE_API_URL}/lettings/${lettings[imageKey].fileName}`);
        }
      }
  
      setImageUrls(newImageUrls);
      setImageCount(newImageUrls.length)
    }
  }, [lettings, setValue]);  
      
  return (
    <div>
        <Layout>
        <main className="w-full relative col-center bg-gray-100 p-3vw">
          <ToastContainer />
          <Link className='text-vw absolute top-3vw left-3vw text-white p-0.5vw bg-blue-500 hover:bg-blue-600 rounded-md' to='/cms'>Go Back</Link>
        <h1 className='text-center text-2vw font-semibold italic underline '>{id ? 'Update Property:' : 'Add Property'} {propertyDetails?.propertyName}</h1>
        {id && <button onClick={handleDeleteProperty} className='text-vw top-3vw absolute hover:bg-red-500 right-3vw text-white bg-red-600 rounded-md w-fit p-[0.7vw]'>Delete Property</button> }
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full col-center wax-w-[80vw] p-vw">
            <div className="grid grid-cols-2 w-full gap-2">
            {propertyUpdateForm?.map((item, index)=>{
                return <main className='p-vw' key={index}>
                    <label htmlFor="" className='text-vw m-0.5vw font-medium mb-0.3vw'>{item?.label}</label> <br />
                   {item?.type === 'text' || item?.type === 'number' ? <>
                   <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({ field }) => (
                        <input
                          {...field} 
                          onChange={handleInputChange} value={field?.value}
                          className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                          type={item?.type}
                          placeholder={item?.placeholder}
                        />
                      )}
                    />
                   </>: item?.type === 'select' ? <>
                   <Controller 
                   name={item?.name}
                   control={control}
                   placeholder={item?.placeholder}
                   rules={item?.rules}
                   render={({ field }) => (
                     <select 
                     className='text-vw p-0.5vw border-[1px] w-full max-w-[30vw] focus:outline-none focus:shadow-md rounded-md'
                     {...field} 
                     onChange={handleInputChange} 
                     value={field?.value}
                     >
                        <option className='text-vw' value="">Select</option>
                     {item?.options?.map((option, index)=>{
                         return <option className='text-vw' key={index} value={option?.value}>{option?.label}</option>
                     })}
                     </select>
                   )}
                   />
                   </> : item?.type === 'textarea' ? <>
                   <Controller
                   name={item?.name}
                   control={control}
                   rules={item?.rules}
                   render={({ field }) => (
                     <textarea
                       {...field} 
                       onChange={handleInputChange} value={field?.value}
                       className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                       type={item?.type}
                       rows={5}
                       placeholder={item?.placeholder}
                     ></textarea>
                   )}
                 />
                   </>
                  :  item?.type === 'date'? <>
                   <Controller
                   name={item?.name}
                   control={control}
                   rules={item?.rules}
                   render={({ field }) => (
                    <input
                          {...field} 
                          onChange={handleInputChange} value={field?.value}
                          className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                          type={item?.type}
                          placeholder={item?.placeholder}
                        />
                   )}
                 />
                  </>
                : null
              }
              { errors[item?.name] && <p className='text-red-500'>{errors[item?.name]?.message}</p>}
                </main>
            })}
            </div>
            <p className='text-[1vw] text-green-600 font-medium'>*** The image file size should be less than 1mb ***</p>
         <section className="w-full ml-[4vw] mt-[4vw]">
            <Toaster position="top-center" />
            <h1 className="text-[2vw] md:text-[0.9vw] w-full max-w-[70vw] text-gray-600">
              Please add up to 10 photos, video, or audio files (max: 30mb each) to help explain the problem.
            </h1>
            <section className="flex items-start">
              <div onClick={handleInput} className="bg-white shadow-md rounded-md w-full max-w-[22vw] md:max-w-[12vw] p-[2vw] flex justify-center hover:cursor-pointer">
                <Icon icon="clarity:upload-cloud-line" className="text-gray-700 text-[7vw] md:text-[4vw]" />
                <input type="file" ref={ref} hidden onChange={handleImage} multiple />
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 items-start">
              {imageUrls.map((url, index) => (
                <figure key={index} className="shadow-md relative rounded-md md:w-full w-[22vw] md:max-w-[12vw] h-[10vw] md:h-[7vw] m-[1vw] overflow-hidden">
                  <Icon
                    icon="clarity:close-line"
                    className="absolute top-0 text-[4.3vw] md:text-[1.3vw] bg-gray-600 hover:bg-gray-700 hover:text-white right-0 p-1 hover:cursor-pointer"
                    onClick={() => handleRemoveFile(index, url)}
                  />
                  <img src={url} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                </figure>
              ))}
            </div>

            </section>
          </section>
              <p className='text-vw text-white p-0.5vw cursor-pointer rounded-md hover:bg-blue-600 bg-blue-500' onClick={() => setShowSearchMap(!showSearchMap)}>Change Property Location</p>
            <div className="m-vw relative w-full">
              {lettings?.lat && lettings?.lng && !showSearchMap ? <PinLocation lat={lettings?.lat} lng={lettings?.lng} />: <Maps pinLocation={(location) => setPinLocation(location)} setSearchedLocation={(location) => setSearchedLocation(location)} /> }
            </div>
            <button type="submit" className={`bg-blue-500 flex items-center hover:bg-blue-600 text-white ${id ? 'mt-7vw': 'mt-[27vw]'} p-0.5vw rounded-md `}>{id ? 'Update Property' : 'Add Property'} {isLoading ? <Icon className='ml-vw text-[1.5vw]' icon="line-md:loading-twotone-loop" /> : null} </button>
        </form>

        </main>

        </Layout>
    </div>
  )
}

export default UpdateLettingsProperty
