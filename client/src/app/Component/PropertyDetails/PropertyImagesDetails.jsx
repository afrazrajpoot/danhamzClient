import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Images = ({ images, currentIndex, onImageClick }) => {
  const handleImageError = (e) => {
    e.target.src = '/images/no_preview.jpg';
  };

  const mainImage = images[currentIndex];
  const nextThreeImages = [
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
  ];

  return (
    <div className="flex">
      <section className="w-full lg:ml-0    ml-[-13vw] xl:max-w-[40vw] lg:max-w-[40vw] md:max-w-[40vw]">
        <motion.img
          whileHover={{ scale: 1.02 }}
          src={mainImage || '/images/no_preview.jpg'}
          alt="Main slide"
          className="w-full  rounded-sm object-cover h-[46vw] xl:h-[28.5vw] lg:h-[28.5vw] md:h-[28.5vw] cursor-pointer"
          loading="lazy"
          onError={handleImageError}
          onClick={() => onImageClick(mainImage)}
        />
      </section>
      <section className="w-full flex flex-col max-w-[12vw]">
        {nextThreeImages.map((img, index) => (
          <motion.img
            key={index}
            whileHover={{ scale: 1.05 }}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full rounded-sm h-[15.3vw] xl:h-[9.3vw] lg:h-[9.3vw] md:h-[9.3vw] object-cover m-[0.1vw] cursor-pointer"
            loading="lazy"
            onError={handleImageError}
            onClick={() => onImageClick(img)}
          />
        ))}
      </section>
    </div>
  );
};

const ImagePreviewModal = ({ images, currentImage, isOpen, onClose, onPrevious, onNext }) => {
  const currentIndex = images.indexOf(currentImage);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-7xl mx-4"
            onClick={e => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -top-12 right-0 text-white z-50"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faTimes} className="text-3xl" />
            </motion.button>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="relative aspect-video"
            >
              <img
                src={currentImage}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/images/no_preview.jpg'; }}
              />
            </motion.div>

            <motion.button
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
              onClick={onPrevious}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-4xl" />
            </motion.button>

            <motion.button
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
              onClick={onNext}
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-4xl" />
            </motion.button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white">
              {currentIndex + 1} / {images.length}
            </div>

            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto p-2 max-w-full">
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`h-16 w-16 object-cover cursor-pointer rounded-md 
                    ${currentIndex === index ? 'border-2 border-white' : 'border-2 border-transparent'}`}
                  onClick={() => {
                    const newIndex = images.indexOf(img);
                    if (newIndex > currentIndex) {
                      onNext();
                    } else if (newIndex < currentIndex) {
                      onPrevious();
                    }
                  }}
                  onError={(e) => { e.target.src = '/images/no_preview.jpg'; }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PropertyImagesDetails = ({ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].filter(Boolean);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? Math.floor(allImages.length / 4) - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === Math.floor(allImages.length / 4) - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handlePrevious = () => {
    const currentIndex = allImages.indexOf(currentImage);
    const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentImage(allImages[newIndex]);
  };

  const handleNext = () => {
    const currentIndex = allImages.indexOf(currentImage);
    const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(allImages[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (modalOpen) {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setModalOpen(false);
    } else {
      if (e.key === 'ArrowLeft') handlePrevSlide();
      if (e.key === 'ArrowRight') handleNextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentImage]);

  return (
    <section className="w-full  xl:max-w-[60vw] lg:max-w-[60vw] md:max-w-[60vw] relative">
      <motion.div
        initial={false}
        className="relative overflow-hidden"
      >
        <AnimatePresence initial={false} custom={currentSlideIndex}>
          <Images
            images={allImages}
            currentIndex={currentSlideIndex * 4}
            onImageClick={handleImageClick}
          />
        </AnimatePresence>
      </motion.div>

      <div className="absolute bottom-0 left-0 flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevSlide}
          className="text-[4vw] xl:text-vw lg:text-vw md:text-vw text-black rounded-[0.5vw] hover:bg-gray-100 bg-white p-[0.7vw]"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNextSlide}
          className="text-[4vw] xl:text-vw lg:text-vw md:text-vw text-red-800 rounded-[0.5vw] hover:bg-gray-100 bg-white p-[0.7vw]"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
      </div>

      <ImagePreviewModal
        images={allImages}
        currentImage={currentImage}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
};

export default PropertyImagesDetails;