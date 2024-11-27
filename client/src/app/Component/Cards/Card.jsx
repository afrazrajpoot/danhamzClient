import React from "react";
import { Icon } from "@iconify/react";

const Card = ({ title, info, para, question, desc, number, img, height }) => {
  console.log(img,'service image')
  return (
    <>
      <section
        className={`bg-[#fff] m-vw border-t-[3px] border-[#152347] p-5vw md:p-vw w-full max-w-[80vw] sm:max-w-[40vw] lg:max-w-[20vw] ${
          img && height
            ? "h-[45vw]"
            : "h-[105vw] xl:h-[30vw] lg:h-[30vw] sm:h-[40vw]"
        }`}
      >
        {number && (
          <h1 className="w-full row-center max-w-[15vw] h-[10vw] m-vw bg-[#152347] text-center text-yellow-500 text-[4vw] xl:text-2vw lg:text-2vw md:text-2vw  font-medium">
            {number}
          </h1>
        )}
        {img && (
          <img onError={(e) => (e.target.src = "/images/no_preview.jpg")}
            src={img}
            alt="rememter"
            loading="lazy"
            className="w-full max-w-[70vw] object-cover sm:max-w-[35vw] lg:max-w-[15vw] h-[45vw] sm:h-[20vw] lg:h-[10vw] mx-auto"
          />
        )}
        <h1 className="text-[#152347] mt-[4vw] md:mt-[2vw] ml-vw text-[4.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-medium">
          {title}
        </h1>
        <p className="text-gray-500 font-medium text-[3.5vw] xl:text-vw lg:text-vw md:text-vw w-full mt-vw max-w-[80vw] sm:max-w-[27vw] lg:max-w-[17vw]">
          {info}
        </p>
        <p className="text-gray-900 text-[3.5vw] xl:text-vw lg:text-vw md:text-vw w-full ml-vw mt-vw max-w-[80vw] sm:max-w-[27vw] lg:max-w-[17vw]">
          {para}
        </p>
        <p className="text-pink-300 text-[3.5vw] xl:text-vw lg:text-vw md:text-vw font-semibold mt-vw w-full max-w-[80vw] sm:max-w-[27vw] lg:max-w-[17vw]">
          {question}
        </p>
        <div className="flex items-start mt-vw">
          {desc && (
            <Icon
              icon="mdi:tick"
              className="text-[3.5vw] xl:text-vw lg:text-vw md:text-vw font-semibold text-blue-800"
            />
          )}
          <p className="text-gray-900 text-[2.5vw] xl:text-vw lg:text-vw md:text-vw w-full ml-vw max-w-[80vw] sm:max-w-[27vw] lg:max-w-[17vw]">
            {desc}
          </p>
        </div>
      </section>
    </>
  );
};

export default Card;
