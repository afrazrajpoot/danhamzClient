import React, { useState } from "react";
import { our_process } from "../../Data";

const SimpleProcess = () => {
  const [selectedTitle, setSelectedTitle] = useState(our_process?.[0]?.title);

  const handleListClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <div>
      <main className="flex w-full max-w-[90vw] bg-white p-vw">
      <div className="w-full max-w-[22vw]">
      {our_process?.map((item, index) => (
          <div className=" relative bg-white" key={index}>
            <section className="max-w-[22vw] w-full">
              <h1
                className={`text-[#152347] font-medium text-vw p-vw w-full cursor-pointer ${
                  selectedTitle === item.title ? "bg-blue-800 text-white" : ""
                }`}
                onClick={() => handleListClick(item.title)}
              >
                {item.title}
              </h1>
            </section>
          </div>
        ))}
      </div>
        <div className="flex max-w-[65vw] w-full">
          {our_process?.map((item, index) => (
            <div key={index} className={selectedTitle === item.title ? "w-full flex" : "hidden"}>
              <section className="max-w-[30vw] ml-2vw">
                <p className="w-full text-vw mt-3vw max-w-[28vw]">{item.info?.[0]?.para}</p>
              </section>
              <section className="max-w-[30vw] ml-2vw">
                <img
                  src={item.info?.[0]?.img}
                  alt={item.title}
                  className="w-full max-w-[20vw] h-30vw"
                />
              </section>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SimpleProcess;