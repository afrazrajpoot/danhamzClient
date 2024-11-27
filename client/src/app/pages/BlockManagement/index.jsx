import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { 
  blockManagement1, 
  blockManagement2, 
  blockManagement3, 
  blockManagement4, 
  blockManagement5 
} from '../../Data'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import RatingsContainer from '../../Component/RatingsContainer'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'

// Variants for animations
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.3
    }
  }
}

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const buttonVariants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
}

const BlockManagement = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <Layout>
        <PageAddress 
          main='Home' 
          category='Danhamz Management' 
          subCategory='Block Management' 
          mainLink='/' 
        />
        
        <motion.div variants={sectionVariants}>
          <ContentImage 
            img={"/images/block1.jpg"} 
            title={"Block Management"} 
            title_color={"text-amber-500"} 
            button={"Contact Us"}  
            btn_text={"text-white"} 
            btn_bg={"bg-amber-500"} 
            url={"/contact"} 
          />
        </motion.div>

        {[
          { data: blockManagement1, bg: 'bg-white', isAlternate: true },
          { data: blockManagement2, bg: 'bg-gray-100', isAlternate: false },
          { data: blockManagement3, bg: 'bg-white', isAlternate: true },
          { data: blockManagement4, bg: 'bg-gray-100', isAlternate: false },
          { data: blockManagement5, bg: 'bg-white', isAlternate: true }
        ].map(({ data, bg, isAlternate }, sectionIndex) => (
          <motion.article 
            key={sectionIndex} 
            className={`w-full ${bg} pt-[10vw] md:pt-[3vw]`}
            variants={sectionVariants}
          >
            {data?.map((item, index) => (
              isAlternate 
                ? (isMobile
                    ? <ListInfoContainer {...item} key={index} />
                    : <ListInfoContainer2 {...item} key={index} />)
                : <ListInfoContainer {...item} key={index} />
            ))}
          </motion.article>
        ))}

        <motion.div 
          className="w-full bg-slate-100"
          variants={sectionVariants}
        >
          <iframe
            src="https://link.agent-online.co.uk/widget/form/Aspo1MXcMSVMxHSeQvAa"
            className='w-full h-screen xl:h-[40vw] lg:h-[50vw] md:h-[50vw]'
            id="inline-Aspo1MXcMSVMxHSeQvAa"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Email form"
            data-height="567"
            data-layout-iframe-id="inline-Aspo1MXcMSVMxHSeQvAa"
            data-form-id="Aspo1MXcMSVMxHSeQvAa"
            title="Email form"
          />
          <script src="https://link.agent-online.co.uk/js/form_embed.js"></script>
        </motion.div>

        <motion.div 
          className="w-full"
          variants={sectionVariants}
        >
          <RatingsContainer />
        </motion.div>

        <motion.div 
          className="p-3vw bg-[#152347] col-center"
          variants={sectionVariants}
        >
          <motion.h1 
            className='text-white text-[3.6vw] md:text-[1.6vw] font-medium text-center w-full max-w-[80vw] md:max-w-[100%]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            To find out more, speak to our friendly team on 0113 204 2900
          </motion.h1>
          
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link 
              to='/contact' 
              className='mt-2vw text-[2.5vw] md:text-vw text-center p-[0.7vw] hover:bg-amber-500 rounded-sm w-full max-w-[12vw] bg-amber-400 text-white'
            >
              Email Us
            </Link>
          </motion.div>
        </motion.div>
      </Layout>
    </motion.div>
  )
}

export default BlockManagement