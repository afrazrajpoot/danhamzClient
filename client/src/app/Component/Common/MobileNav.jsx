import React, { useState } from "react";
import { navbar, topbar } from "../../Data";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const MobileNav = ({showSidebar}) => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleListClick = (title) => {
        setOpenMenu(prevTitle => (prevTitle === title ? null : title));
    };

    return (
        <>
        <nav className="bg-[#fff] z-50 w-screen h-screen">
            {navbar?.map((item, index) => {
            return (
            <main className="" key={index}>
                <div className="mx-[2vw] p-vw">
                    <section className="mt-2vw">
                        {item?.lists?.map((list, index) => (
                            <div key={index}>
                                <div className="pt-0.5vw" onClick={() => handleListClick(list?.title)}>
                                    <Link className="flex justify-between mt-vw items-center" to={list?.link}>
                                    <p className="text-[3.5vw] text-[#152347] cursor-pointer">{list?.title}</p>
                                    <Icon icon="iconamoon:arrow-down-2" className="text-[2vw] text-[#152347]" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            )})}
             {topbar?.map((item, index) => {
            return (
            <main className="" key={index}>
                <div className="mx-[2vw] p-vw">
                    <section className="mt-2vw">
                        {item?.links?.map((list, index) => (
                            <div key={index}>
                                <div className="pt-0.5vw" onClick={() => handleListClick(list?.title)}>
                                    <Link className="flex justify-between mt-vw items-center" to={list?.path}>
                                    <p className="text-[3.5vw] capitalize text-[#152347] cursor-pointer">{list?.title}</p>
                                    <Icon icon="iconamoon:arrow-down-2" className="text-[2vw] text-[#152347]" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            )})}
        </nav>
        </>
    );
};

export default MobileNav;
