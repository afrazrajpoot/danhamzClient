import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Popup = ({ onClick }) => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <main className="animate__backInDown">
      <article className="w-full flex flex-col items-center justify-center relative max-w-[70vw] md:max-w-[32vw] p-[2vw] bg-gray-200 rounded-lg shadow-lg">
        <Icon
          icon="ic:round-close"
          className="absolute top-[1vw] text-gray-700 bg-gray-100 hover:bg-[#152647] hover:text-white rounded-md right-[1vw] text-[2vw] cursor-pointer"
          onClick={handleClick}
        />
        <h1 className="text-[4.5vw] md:text-[1.5vw] font-medium text-center">
          Thank you!
        </h1>
        <p className="text-[2.5vw] md:text-[1vw] w-full max-w-[56vw] md:max-w-[30vw] mt-[2vw] font-medium text-center">
          Thank you for submitting your maintenance request. Our team at Danhamz
          will review it and get back to you with approval within 48 hours. Once
          your request is approved, it will be added to our maintenance log. You
          will receive a 24-hour notice when a contractor is scheduled to visit
          your property. If you feel the maintenance request is an emergency
          then please call us on
          <Link>
            <span className="text-blue-500">0113 204 2900</span>
          </Link>
          and enter option 3 for maintenance
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-500 text-[2.5vw] md:text-vw hover:bg-amber-600 text-[#ffff] p-[0.7vw]  rounded-[0.7vw] font-bd mt-[2vw] text-center w-full max-w-[35vw]"
        >
          Submit another request
        </button>
      </article>
    </main>
  );
};

export default Popup;
