import React, { useState } from 'react';
import Footer from '../Component/Common/Footer';
import Topbar from '../Component/Common/Topbar';
import Navbar from '../Component/Common/Navbar';
import MobileNav from '../Component/Common/MobileNav';
import { Icon } from '@iconify/react';
import Chat from '../Component/Chat/Chat';

const Layout = ({ children }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='w-full z-50'>
            <main className="bg-gray-100  relative w-full h-screen overflow-x-hidden">
                <Topbar />
                <div className="hidden xl:block lg:block md:block"> 
                    <Navbar />
                </div>
               <Icon icon={!show ? 'ph:list-bold' : 'basil:cancel-outline'} onClick={()=> setShow(!show)} className='text-[#ffff] z-50 block xl:hidden lg:hidden md:hidden text-[6vw] absolute top-2vw right-2vw ' />
                {show && <div className="block xl:hidden lg:hidden md:hidden"> {/* Hide on desktop */}
                    <MobileNav showSidebar={()=> setShow(!show)}/>
                </div>}
              {!show && <div className="">
                {children}
                <Footer />
                </div>}
                <div className="fixed z-50 bottom-[15vw] md:bottom-[2vw] right-[2vw]">
                <Chat />
                </div>
            </main>
        </div>
    );
};

export default Layout;
