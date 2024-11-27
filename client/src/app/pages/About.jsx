import React from 'react'
import Layout from '../Layout/Layout'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { about_award, about_story, doings, letting_awards, ourTeam, partnerBanner, ratings } from '../Data';
import Card from '../Component/Cards/Card';
import Reviews from '../Component/Common/Reviews';
import ContentImage from '../Component/TextAndImageContainer/ContentImage';
import RightImageContainer from '../Component/TextAndImageContainer/RightImageContainer';

const About = () => {
    const lists = ["Student Lets", "Professional Lets", "Property Management", "Residential Sales", "Investment Sales", "Refurbishments", "Property Sourcing", "Block Management"];
  return (
    <div>
      <Layout>
      <main>
          <nav className="bg-gray-300 w-full p-vw">
            <div className="flex items-center ml-10vw">
              <Link to="/" className="flex items-center">
                <p className="text-gray-500 text-[0.8vw]">Home</p>
                <Icon
                  icon="mdi:keyboard-arrow-right"
                  className="text-gray-500 text-[0.8vw]"
                />
              </Link>
              <p className="text-gray-900 text-[0.9vw]">About us</p>
            </div>
          </nav>
            <section className='relative w-full bg-purple-500'>
                {about_award?.map((item, index) => (
                  <ContentImage key={index} img={item?.img} info={item?.info} title={item?.title} button={item?.button} url={item?.url} title_color={item?.title_color} info_color={item?.info_color} btn_bg={item?.btn_bg} btn_text={item?.btn_text}  />
                ))}
            </section>
            <article className="col-center bg-gray-200 w-full p-3vw">
            <h1 className='text-[#152347] text-[2.1vw] font-medium'>Our Services</h1>
            <p className='text-gray-600 text-vw mt-vw text-center font-medium w-full'>HOP stands for Home of Property, because we offer a complete suite of property services all under one roof.</p>
             {/* doings */}
          <div className="grid grid-cols-4 mt-2vw gap-3">
            {doings?.map((item, index) => {
              return (
                <Card key={index} para={item?.para} desc={item?.desc} title={item?.title} question={item?.question} />
              )
            })}
            </div>
            </article>
            <article className='col-center bg-white p-3vw'>
              <div className="flex">
              <section className="w-full max-w-[40vw]">
                    <h1 className='text-[#152347] text-[2.1vw] w-full max-w-[30vw] font-medium'>Welcome to the Home of Property</h1>
                    <p className='text-gray-600 text-vw mt-vw max-w-[39vw] font-medium w-full'>At HOP,  we offer a complete suite of property services all under one roof. Whether you’re buying, selling, renting, letting or investing in Leeds and beyond, our friendly experts can help</p>
                   <div className="mt-2vw">
                   {lists?.map((item, index) => (
                    <li  style={{ listStyleType: "disc" }} className='text-[#152347]  text-vw list-decimal block' key={index}>
                       <span className='text-black text-[1.2vw] font-medium'>.</span> {item}
                    </li>
                    ))}
                   </div>
                </section>
                <section className="w-full max-w-[40vw]">
                  <iframe
                    className='text-[#152347] mt-vw text-[1vw] h-[25vw] w-[40vw]'
                    src="https://player.vimeo.com/video/434834423?background=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </section>  
              </div>
            </article>
            <div>
              {about_story?.map((item, index) => (
              <RightImageContainer key={index} img={item?.img} info={item?.info} title={item?.title} button={item?.button} url={item?.url} title_color={item?.title_color} info_color={item?.info_color} btn_bg={item?.btn_bg} btn_text={item?.btn_text}  />
              ))}
            </div>
        <main className="w-full bg-white">
          {ourTeam?.map((item, index) => {
            return (
              <div
                className="flex slider-container justify-center items-center flex-col" key={index}>
                <h1 className="text-[#152347] text-center pt-3vw text-2vw text-semibold"> {item?.title} </h1>
                <p className="text-gary-400 text-center pt-0.5vw text-vw"> {item?.info}</p>
                <div className="flex slider mt-2vw w-full">
                  {item?.team?.map((person, index) => (
                    <section className="w-full max-w-[20vw] review-item" key={index}>
                      <img src={person?.img} alt={person?.name} className="w-full max-w-[15vw] h-15vw object-cover" />
                      <h1 className="text-[#152347] text-[1.5vw] text-semibold"> {person?.name} </h1>
                      <h4 className="text-gay-300 text-vw"> {person?.title} </h4>
                      <div className="flex items-center mt-vw">
                        <Link to="#" className="flex items-center">
                          <p className="text-[#152347] text-[0.9vw] font-normal"> View Profile </p>
                          <Icon icon="ep:arrow-right-bold" className="text-[#152347] text-[0.9vw] font-normal" />
                        </Link>
                      </div>
                    </section>
                  ))}
                </div>
                <Link to="#" className="flex justify-center pb-2vw mt-3vw items-center" >
                  <p className="text-white text-[0.9vw] p-vw text-center font-semibold bg-[#152347]"> Meet The Full Team </p>
                </Link>
              </div>
            );
          })}
        </main>
        <article className='col-center w-full slider-container bg-gray-200 p-3vw'>
        <h1 className='text-center text-[#152347] text-[2.3vw] text-semibold'>Our Awards</h1>
        <p className='text-vw text-gray-700 w-full text-center max-w-[80vw]'>
          HOP is proud to have won multiple awards since 2012. <br />
          We are incredibly proud of our award wins, which most recently includes the Best Estate Agent Award,
          officially recognising us as in the top 3% of letting agents in the whole of the UK.</p>
        <div className="mt-2vw flex w-full items-start slider">
          {letting_awards?.map((item, index) => (
            <section className='max-w-[15vw] w-full p-0.5vw m-[0.2vw] review-item' key={index}>
              <img src={item?.img} alt={item?.title} className='w-full h-11vw object-cover' />
              <h1 className='text-[#152347] mt-0.5vw text-[0.7vw] text-semibold'>{item?.title}</h1>
              <p className='text-gay-300 w-full mt-0.5vw max-w-[14vw] text-[0.7vw]'>{item?.info}</p>
            </section>
          ))}
        </div>
        </article>
        <section className='row-center bg-white p-3vw'>
            <div className="flex justify-evenly items-center">
            {partnerBanner?.map((item, index) => (
                <img src={item?.img} alt={index} className='w-full ml-4vw max-w-[10vw]'/>
            ))}
            </div>
        </section>
        <div className="slider-container bg-gray-200">
            <h1 className='text-center text-[#152347] mt-2vw text-[2.1vw] text-semibold'>Customer Reviews</h1>
            <div className="slider m-vw">
              {ratings?.map((item, index) => (
                <div key={index} className="review-item m-vw">
                  <Reviews ratings={item?.icon} title={item?.title} para={item?.para} name={item?.name} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default About