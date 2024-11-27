import React from 'react';
import { Icon } from '@iconify/react';

const Chat = () => {
  const handleWhatsAppChat = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let whatsappUrl = 'https://wa.me/+4407815935420'; // Replace with the actual phone number

    if (isMobile) {
      whatsappUrl = 'whatsapp://send?phone=+4407815935420'; // Replace with the actual phone number
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div onClick={handleWhatsAppChat} className="row-center animate-pulse  p-[0.7vw] md:p-[0.5vw] w-full max-w-[50vw] xl:max-w-[20vw] lg:max-w-[20vw] md:max-w-[20vw] bg-yellow-600 rounded-full cursor-pointer">
       <Icon icon="logos:whatsapp-icon" className="text-4vw xl:text-2vw lg:text-2vw md:text-2vw" />
       <p className='text-white text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw]  ml-vw'>Chat with us on Whatsapp</p>
    </div>
  );
};

export default Chat;
