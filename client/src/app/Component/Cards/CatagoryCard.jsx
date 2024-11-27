import React from "react";
import { Icon } from "@iconify/react";

const CatagoryCard = ({ title, featured, bg, title2, info }) => {
    const textColor = !bg? "text-[#152347]" : "text-white";
  return (
    <div>
      <article
        className={`w-full max-w-[20vw] m-vw p-vw ${ bg ? "bg-[#152347]" : "bg-white"} `}>
        <h2 className={`text-vw ${textColor}`}>{title}</h2>
        <section className="flex mt-vw items-center">
          <span className={`text-[0.9vw] ${textColor}`}>{featured}</span>
          <Icon icon="solar:star-bold" className={`text-[0.9vw] ml-0.5vw ${textColor}`} />
        </section>
        <h1 className={` ${textColor} text-[1.5vw] mt-vw`}>{title2}</h1>
        <p className={`text-[0.9vw] ${textColor} w-full max-w-[28vw]`}>{info}</p>
        <section className="flex cursor-pointer mt-2vw items-center">
          <Icon icon="material-symbols:download" className={`text-[0.9vw] ${textColor}`} />
          <span className={`text-[0.9vw] ml-0.5vw ${textColor}`}>Download</span>
        </section>
      </article>
    </div>
  );
};

export default CatagoryCard;