import React from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
import Layout from '../Layout/Layout'
import PageAddress from '../Component/Common/PageAddress'
import { report_article, report_nav } from '../Data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const Report = () => {
  return (
    <div className="bg-gray-50">
      <Layout>
        <main className="min-h-screen">
          <PageAddress 
            main={'Home'} 
            mainLink={'/'} 
            category={'Report a repair'} 
            subLink={'/report'} 
          />

          {/* Hero Section */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {report_nav?.map((item, index) => (
              <motion.main 
                key={index} 
                variants={itemVariants}
                className="w-full"
              >
                <div 
                  style={{ 
                    backgroundImage: `url('/img/wooden-background.jpg')`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }} 
                  className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-opacity-80 shadow-lg"
                >
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-xl text-center md:text-left"
                  >
                    <h1 className='text-white text-3xl md:text-4xl font-bold italic mb-4'>{item?.title}</h1>
                    <p className='text-amber-400 text-xl italic mb-6'>{item?.info}</p>
                    <Link 
                      to={'/maintenance-request'} 
                      className='inline-block bg-amber-500 text-[#152347] px-6 py-3 rounded-lg hover:bg-amber-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
                    >
                      Report Repair
                    </Link>
                  </motion.div>
                  <motion.img 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    src={'/img/refurb_clock1.png'} 
                    alt="about" 
                    className="w-full max-w-xs md:max-w-md mt-6 md:mt-0 rounded-lg shadow-xl"
                  />
                </div>

                {/* Information Section */}
                <motion.section 
                  variants={itemVariants}
                  className="w-full bg-white py-12"
                >
                  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">
                    <div className="w-full md:w-1/2">
                      <h2 className='text-[#152347] text-2xl font-semibold mb-4'>{item?.info2}</h2>
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                      <p className='text-gray-700 text-base'>{item?.para}</p>
                      <p className='text-gray-700 text-base'>{item?.para2}</p>
                      <p className='text-gray-700 text-base'>{item?.para3}</p>
                    </div>
                  </div>
                </motion.section>
              </motion.main>
            ))}
          </motion.section>

          {/* Call to Action Banner */}
          <motion.article 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-gray-100 py-16 text-center"
          >
            <div className="container mx-auto px-4">
              <h1 className='text-[#152347] text-2xl md:text-3xl font-medium mb-8 max-w-3xl mx-auto'>
                If you need to report a repair, maintenance issue, or emergency, please log it now. Utilize the buttons provided below to access the system.
              </h1>
              <Link 
                to={'/maintenance-request'} 
                className='inline-block bg-amber-500 text-[#152347] px-8 py-3 rounded-lg hover:bg-amber-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
              >
                Report Repair
              </Link>
            </div>
          </motion.article>

          {/* Commitment Section */}
          <motion.article 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="w-full bg-white py-16"
          >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-12">
              {report_article?.map((item, index) => (
                <motion.section 
                  key={index} 
                  variants={itemVariants}
                  className="w-full md:w-1/2 group"
                >
                  <h2 className='text-[#152347] text-2xl font-semibold mb-4 group-hover:text-amber-500 transition-colors duration-300'>
                    {item?.title}
                  </h2>
                  <p className='text-gray-700 mb-6'>{item?.info}</p>
                  {item?.img && (
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={item?.img} 
                      alt="" 
                      className='w-full rounded-lg shadow-md mb-6' 
                    />
                  )}
                  <p className='text-gray-700'>{item?.info2}</p>
                </motion.section>
              ))}
            </div>
          </motion.article>
        </main>
      </Layout>
    </div>
  )
}

export default Report