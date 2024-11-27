import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Testimonials from '../Component/Testimonials';
import CommonQuestions from '../Component/CommonQuestions';
import Topbar from '../Component/Common/Topbar';
import Navbar from '../Component/Common/Navbar';
import Footer from '../Component/Common/Footer';

const FreeSales = () => {
  const features = [
    {
      iconSrc: "/images/pound.jpg",
      title: "NO ESTATE AGENTS OR AUCTION FEES",
      description: (
        <>
          The buyer pays the commission so your house gets sold for you at{" "}
          <span className="font-bold">no costs.</span>
        </>
      ),
    },
    {
      iconSrc: "/images/secure.jpg",
      title: "THE MOST SECURE DEAL",
      description:
        "Once the sale is agreed, the buyer immediately pays a non-refundable payment towards the property meaning they are financially committed to the purchase.",
    },
    {
      iconSrc: "/images/timer.jpg",
      title: "FAST, FIXED TIMELINES",
      description:
        "The buyer must complete within 28 or 56 days, meaning your property gets sold fast.",
    },
    {
      iconSrc: "/images/easy.jpg",
      title: "TOTAL TRANSPARENCY",
      description:
        "The sales process is quick, transparent and hassle-free; we do the legwork, get your property sold and take the stress out of your property sale.",
    },
  ];

  const features2 = [
    {
      iconSrc: "/images/globe.jpg",
      title: "Your Property Gets National Exposure",
      description: (
        <>
          Our auction department has over <span className='font-bold'>25 years of auction experience</span> and an expansive partner agent network, we can ensure maximum exposure on a national scale for your property, all with expert knowledge from your local branch. We have thousands of auction catalogues, extensive mailing lists and a huge online presence. You get access to all of this without a single cost to you.
        </>
      ),
    },
    {
      iconSrc: "/images/lock.jpg",
      title: "You're In Control",
      description: (
        <>
          You agree a reserve price – the property will <span className='font-bold'>only sell if it reaches the amount you set</span>. Once this is set, the property is advertised in our national auctions both in our catalogues and online. Once the auction begins, bids are placed on your property – the buyer with the highest bid at the fall of the hammer is then committed to buy, meaning a <span className='font-bold'>deposit is paid immediately</span>.
        </>
      ),
    },
    {
      iconSrc: "/images/happy.jpg",
      title: "Over 20 Years of Happy Customers",
      description: (
        <>
          Our auction department has over 20 years of auction experience, we offer you extensive market knowledge as well as the added security and speed of selling through an auction. As the <span className='font-bold'>original family run auctioneers</span>, we pride ourselves on our service and our huge base of happy customers.
        </>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-auto"
      style={{ maxHeight: '100vh' }}
    >
      <Topbar />
      <div className="hidden xl:block lg:block md:block"> 
        <Navbar />
      </div>

      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/bg-val3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh'
        }}
      >
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute top-[22vw] left-[9vw] max-w-[50vw]"
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-[5.5vw] md:text-[2.5vw]"
          >
            Sell Your Property For Free
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-[3.5vw] md:text-[1.5vw]"
          >
            Discover How Your Property Can Be Sold Fast, Easily, and At Zero Cost to You
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/sales" 
              className="bg-yellow-600 block text-center text-[3vw] w-fit md:text-[1vw] font-medium mt-[1vw] px-8 py-2 text-white hover:bg-yellow-800 rounded-md"
            >
              SELL YOUR PROPERTY FOR FREE NOW
            </Link>
          </motion.div>
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-4 ml-[4vw] text-[3vw] md:text-[1vw]"
          >
            Or Call us on 0113 204 2900
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.article 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white w-full max-w-[90vw] mx-auto mt-[-10vh] p-8 rounded-lg shadow-lg relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <motion.img 
                src={feature.iconSrc} 
                alt={feature.title} 
                className="mb-4 hover:rotate-6 transition-transform"
                whileHover={{ scale: 1.1 }}
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.article>

      <motion.article 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-[5vw] relative z-50"
      >
        <div className='w-full'>
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-[2vw] font-bold text-center'
          >
            Sell Your Property For Free
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            You Can Sell Your Property Fast for a Great Price at Absolutely Zero Cost
          </motion.p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features2.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className='flex flex-col items-center gap-[1vw] text-center p-4 hover:scale-105 transition-transform duration-300'
              >
                <motion.img 
                  src={feature.iconSrc} 
                  alt={feature.title} 
                  className='mb-4'
                  whileHover={{ rotate: 5 }}
                />
                <h2 className='text-xl text-gray-800 mb-2'>{feature.title}</h2>
                <p className='text-gray-600 text-lg w-full max-w-[70vw]'>{feature.description}</p>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='mt-[1.5vw]'
            >
              <p className='text-center'>Sell your property for free now</p>
              <p className='text-center mt-[1.5vw]'>Or Call us on 0113 204 2900</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.article>

      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='mt-[5vw]'
      >
        <Testimonials />
      </motion.article>

      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CommonQuestions />
      </motion.article>

      <Footer />
    </motion.main>
  );
};

export default FreeSales;