import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import BlogsCard from "../../Component/Cards/BlogsCard";
import { useGlobalContext } from "../../UserContext/UserContext";
import axios from "axios";
import { Toaster } from "sonner";
import { Link } from "react-router-dom";
import Loader from "../Reports/Loader";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogsPosts, setBlogsPosts] = useState([]);
  const token = JSON.parse(localStorage.getItem("userLoginInfo"));
  const admin = token?.admin ? token?.admin : "user";
  const { newBlog } = useGlobalContext();

  const getBlogData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/readBlogs`);
      setBlogsPosts(res.data);
    } catch (err) {
      // Error handling preserved
    }
  };

  useEffect(() => {
    getBlogData();
  }, [newBlog]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout>
      <Toaster />
      <motion.main
        className="min-h-screen bg-white overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Admin Button - Responsive positioning */}
            {admin === 'admin' && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-4 sm:left-6 lg:left-8 top-0 z-10"
              >
                <Link to="/create-blog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#152347] text-white text-xs sm:text-sm lg:text-[1vw] rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <motion.svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </motion.svg>
                    <span className="whitespace-nowrap">Create New Blog</span>
                  </motion.button>
                </Link>
              </motion.div>
            )}

            {/* Header Section - Responsive text sizes */}
            <motion.div
              variants={headerVariants}
              className="text-center max-w-3xl mx-auto pt-12 sm:pt-16"
            >
              <motion.h1
                className="text-2xl sm:text-3xl lg:text-[2vw] text-amber-500 font-bold mb-3 sm:mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Our Blog Posts
              </motion.h1>
              <motion.div
                className="h-1 w-16 sm:w-20 bg-amber-500 mx-auto mb-4 sm:mb-6 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.p
                className="text-sm sm:text-base lg:text-[1vw] text-gray-600 px-4"
                variants={headerVariants}
              >
                All you want to know about our landlords and tenants
              </motion.p>
            </motion.div>
          </div>

          {/* Loading State */}
          {blogsPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center min-h-[300px] sm:min-h-[400px]"
            >
              <Loader />
            </motion.div>
          )}

          {/* Blog Grid - Responsive grid and spacing */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 ml-[9vw] lg:ml-0  lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-full px-4 sm:px-0"
            variants={containerVariants}
          >
            {blogsPosts.map((item, index) => (
              <motion.div
                key={item._id}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                layout
                className="w-full"
              >
                <BlogsCard
                  keywords={item?.keywords}
                  info={item?.info1}
                  img={`${import.meta.env.VITE_API_URL}/blogsPosts/${item?.image1?.fileName}`}
                  {...item}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State - Responsive text */}
          {blogsPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center py-8 sm:py-12"
            >
              <p className="text-gray-500 text-base sm:text-lg">No blog posts available yet.</p>
            </motion.div>
          )}
        </div>
      </motion.main>
    </Layout>
  );
};

export default Blogs;