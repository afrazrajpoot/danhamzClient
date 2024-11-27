import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomSlider = ({ children, slidesToShow = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = React.Children.count(children);
  const activeSlides = isMobile ? 1 : slidesToShow;
  const maxIndex = totalSlides - activeSlides;

  const next = () => {
    setCurrentIndex(current => Math.min(current + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(current => Math.max(current - 1, 0));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      next();
    }
    if (touchStart - touchEnd < -75) {
      prev();
    }
  };

  return (
    <div className="relative w-full px-12 py-4">
      <AnimatePresence>
        {currentIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all"
          >
            <div className="bg-white shadow-lg rounded-full p-2 hover:bg-yellow-50 transition-colors duration-200">
              <ChevronLeft className="w-6 h-6 text-yellow-500" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex"
          initial={false}
          animate={{
            x: `-${(currentIndex * 100) / activeSlides}%`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          style={{
            width: `${(totalSlides * 100) / activeSlides}%`
          }}
        >
          {React.Children.map(children, (child, index) => (
            <motion.div
              style={{ width: `${100 / totalSlides}%` }}
              className="px-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {child}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {currentIndex < maxIndex && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all"
          >
            <div className="bg-white shadow-lg rounded-full p-2 hover:bg-yellow-50 transition-colors duration-200">
              <ChevronRight className="w-6 h-6 text-yellow-500" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSlider;