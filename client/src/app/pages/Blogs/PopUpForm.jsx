import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../UserContext/UserContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { blogsForm } from "../../Data";
import { FileUploade } from "../../Component/FileUpload";
import FileInput from "../CMS/FileInput";
import Layout from "../../Layout/Layout";
const PopUpForm = () => {
  const {keywords: blogKeyword} = useParams();
  const { setNewBlog } = useGlobalContext()
  const [blogId, setBlogId] = useState(null);
  const [blogPostData, setBlogsPostData] = useState({
    metaTitle: "", metaDescription: "", keywords: "",  name: "",
    info1: "", info2: "", info3: "", info4: "", info5: "",
    info6: "", info7: "",  info8: "", info9: "", info10: "",
    heading1: "", heading2: "", heading3: "", heading4: "", heading5: "",
    heading6: "", heading7: "", heading8: "", heading9: "", heading10: "",
    image1: "", image2: "", image3: "", image4: "", image5: "",
    image6: "", image7: "", image8: "", image9: "", image10: "",
  });
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [imageURLs, setImageURLs] = useState({ image1: '', image2: '', image3: '', image4: '', image5: '', image6: '', image7: '', image8: '', image9: '', image10: ''})
  const { formState: { errors }, control, handleSubmit, setValue, reset,} = useForm({
    defaultValues: {
      metaTitle:  blogPostData?.metaTitle || "", metaDescription: blogPostData?.metaDescription || "",
      keywords: blogPostData?.keywords || "",   name: blogPostData?.name || "",
      info1: blogPostData?.info1 || "", info2: blogPostData?.info2 || "",
      info3: blogPostData?.info3 || "", info4: blogPostData?.info4 || "",
      info5: blogPostData?.info5 || "", info6: blogPostData?.info6 || "",
      info7: blogPostData?.info7 || "", info8: blogPostData?.info8 || "",
      info9: blogPostData?.info9 || "", info10: blogPostData?.info10 || "",
      heading1: blogPostData?.heading1 || "", heading2: blogPostData?.heading2 || "",
      heading3: blogPostData?.heading3 || "", heading4: blogPostData?.heading4 || "",
      heading5: blogPostData?.heading5 || "", heading6: blogPostData?.heading6 || "",
      heading7: blogPostData?.heading7 || "", heading8: blogPostData?.heading8 || "",
      heading9: blogPostData?.heading9 || "", heading10: blogPostData?.heading10 || "",
      image1: blogPostData?.image1?.url || "", image2: blogPostData?.image2?.url || "",
      image3: blogPostData?.image3?.url || "", image4: blogPostData?.image4?.url || "",
      image5: blogPostData?.image5?.url || "", image6: blogPostData?.image6?.url || "",
      image7: blogPostData?.image7?.url || "", image8: blogPostData?.image8?.url || "",
      image9: blogPostData?.image9?.url || "", image10: blogPostData?.image10?.url || "",
    }
  });


  
  const getBlogPost = async ()=> {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/blogs/${blogKeyword}`
      );
      setBlogsPostData(res.data);
      setBlogId(res?.data?._id);
    } catch (err) {
      // console.log(err.message);
    }
  }

  const handleFile = (e) => {
    const newFile = e.target.files[0]; // Get the new file from the event
    setFile(newFile); // Update the file state
    const imageURL = URL.createObjectURL(newFile);
      setBlogsPostData({ ...blogPostData, [e.target.name]: newFile });
      setImageURLs({ ...imageURLs, [e.target.name]: imageURL });
  }
  
  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setBlogsPostData({...blogPostData, [name]: value });
    setValue(name, value);

  }

  const onSubmit = async (data) => {

    const formData = new FormData();
    
        for (const key in data) {
          if (data[key] !== undefined) {
            formData.append(key, data[key]);
          }
        }
          for (const key in imageURLs) {
            if (blogPostData[key]) {
              formData.append(key, blogPostData[key]);
            }
          }
    try {
      if (!blogKeyword) {
        setLoading(true);
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/createBlog`,
          formData
        );
        setLoading(false);
        reset();
        setNewBlog(res.data);
        toast.success("Blog created successfully", {
          position: "top-center",
        });
        navigate("/news-and-blogs");
      }
      if (blogKeyword) {
        setLoading(true);
        const res = await axios.put(
          `${import.meta.env.VITE_API_URL}/updateBlog/${blogId}`,
          formData
        );
        setLoading(false);
        setNewBlog(res.data);
        toast.success("update successfully", {
          position: "top-center",
        });
        navigate("/news-and-blogs");
      }
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(blogKeyword) getBlogPost()
    setBlogsPostData(blogPostData);
  }, [])

  return (
   <Layout>
      <main className="relative mx-auto z-10 w-full flex justify-center bg-white p-[2vw] top-[0vw] opacity-100">
      <Toaster />
      <button className=" absolute right-[13vw] hover:bg-gray-400 bg-gray-600 w-2vw h-[2vw] row-center rounded-[0.5vw] z-50 top-[3vw] text-[1.5vw] text-white"
      onClick={() => navigate("/news-and-blogs")}> x
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="  bg-[#3d3d3d] w-full max-w-[80vw] rounded-[0.7vw] p-[3vw] ">
        <h1 className="text-[1.5vw] underline text-center text-white">{!blogKeyword ? "Create Blog" : "Update Blog"}</h1>
        {blogsForm?.map((item, index) => (
          <main key={index}>
            <label htmlFor={item?.name} className="block mt-vw font-medium text-white"> {item?.lable} </label>
                   {item?.type === 'text' ? <section className="w-full mt-vw">
                   <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({ field }) => (
                        <input
                          {...field}  value={blogPostData?.[item?.name]}
                          onChange={handleInputChange}
                          className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md rounded-md spin-button-none'
                          type={item?.type}
                          placeholder={item?.placeholder}
                        />
                      )}
                    />
                   </section> : item?.type === 'file' ? <section className="w-full mt-vw">
                    <FileInput
                      accept="image/*"
                      name={item?.name}
                      imageUrl={ imageURLs[item?.name] ? imageURLs[item?.name] : `${import.meta.env.VITE_API_URL}/blogsPosts/${blogPostData?.[item?.name]?.fileName}`  || ''}
                      onChange={handleFile}
                    />
                   </section> : item?.type === 'textarea' ? <section className="w-full mt-vw">
                   <Controller
                   name={item?.name}
                   control={control}
                   rules={item?.rules}
                   render={({ field }) => (
                     <textarea
                       {...field} 
                       onChange={handleInputChange} value={blogPostData?.[item?.name]}
                       className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md rounded-md spin-button-none'
                       type={item?.type}
                       rows={5}
                       placeholder={item?.placeholder}
                     ></textarea>
                   )}
                 />
                   </section>
                      : null
              }
              { errors[item?.name] && <p className='text-red-500'>{errors[item?.name]?.message}</p>}
                </main>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-[1vw]">
          {loading ? ( <Icon icon="svg-spinners:180-ring-with-bg" className="text-[1.5vw]"/> ) : (
            `${blogKeyword ? 'update' : 'create'}`
          )}
        </button>
      </form>
    </main>
   </Layout>
  );
};

export default PopUpForm;
