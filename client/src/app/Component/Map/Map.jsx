import React from 'react';

const Map = () => {

  return (
    <div className="w-full h-[25vw] md:w-[40vw] md:h-[25vw]">
              <iframe
              style={{width: "100%", height: "25vw"}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.5739067347104!2d-1.5657603104178692!3d53.8148653013389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487959533c5de0c1%3A0x61109a659384ced8!2sDanhamz!5e0!3m2!1sen!2s!4v1711351823837!5m2!1sen!2s"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
  );
};

export default Map;
