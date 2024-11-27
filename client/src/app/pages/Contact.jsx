import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Map from "../Component/Map/Map";
import { timings } from "../Data";
import PageAddress from "../Component/Common/PageAddress";

const Contact = () => {
  return (
    <div>
      <Layout>
        <main className="w-full">
          <PageAddress main={'Home'} mainLink={'/'} subCategory={'Contact us'} subLink={'/contact'} />
          <section className="relative h-[35vw] md:h-[25vw] w-full">
            <img
              src="/images/contactUs.jpg"
              alt="contact us"
              className="w-full h-full object-cover"
            />
          </section>
          <div className="flex justify-center items-center w-full">
          <main className="grid grid-cols-1 place-content-center place-items-center px-[6vw] md:grid-cols-2 p-[3vw] w-full bg-gray-100">
            <section className="flex flex-col w-full justify-between items-center">
            {timings?.map((item, index) => (
                    <div key={index} className="flex items-center w-full max-w-[90vw] justify-between m-2vw">
                        <div className="flex flex-col items-start">
                        <h1 className="text-[#152347] text-[4.1vw] md:text-[2.1vw] font-semibold">{item.title}</h1>
                        <section className="mt-0.5vw">
                           {item?.info?.map((item2, index) => (
                            <div key={index} className="flex items-center">
                               <span className="text-[#152347] text-[3.5vw] md:text-[1vw]"> {item2.icon}</span>
                                <p className="text-gray-500 text-[3.5vw] md:text-[1vw] ml-vw">{item2.title}</p>
                            </div>
                           ))}
                        </section>
                        <section className="grid -ml-vw grid-cols-2 gap-3">
                            {item?.detail?.map((item3, index) => (
                                    <div key={index} className="mt-vw m-vw">
                                        <h2 className="text-[#152347] font-medium text-[3.5vw] md:text-[1.5vw]"> {item3?.title}</h2>
                                        {item3?.timimngs?.map((item4, index) => (
                                            <div className="mt-vw" key={index}>
                                            <h2 className="text-[#152347] font-medium text-[3vw] md:text-[0.9vw]"> {item4?.day}</h2>
                                            <p className="text-[#152347] font-normal text-[3vw] md:text-[0.9vw]">{item4?.time}</p>
                                            </div>
                                        ))}
                                    </div>
                            ))}
                        </section>
                        </div>
                     <section>
                    </section>
                    </div>
            ))}
           </section>
            <Map />
           </main>
            </div>     
            <section className="flex items-center justify-center">
                            <Link to="https://wa.me/+4407815935420" target='_blank'>
                                <button className="p-vw font-semibold bg-amber-500 text-3vw md:text-vw hover:bg-amber-600 text-white rounded-[0.5vw] m-vw w-[22vw] md:w-12vw">WhatsApp</button>
                            </Link>
                            <Link to="/send-mail">
                                <button className="p-vw font-semibold bg-[#ffff] text-3vw md:text-vw text-[#121e3d] hover:bg-[#f5f5f5] rounded-[0.5vw] m-vw w-[22vw] md:w-12vw">Email Us</button>
                            </Link>
                        </section>   
        </main>
      </Layout>
    </div>
  );
};

export default Contact;
