import React from "react";
import { navbar } from "../../Data";
import { Link } from "react-router-dom";

const Navbar = () => {
    const token = JSON.parse(localStorage.getItem("userLoginInfo"));
    const admin = token?.admin ? token?.admin : "user";
    return (
        <>
            <nav className="bg-[#fff] z-50 flex justify-center items-center w-full">
                {navbar?.map((item, index) => {
                    return (
                        <main className="flex relative flex-col justify-center items-center w-full" key={index}>
                            <div className="flex justify-between p-[1.5vw] items-center w-full max-w-[90vw]">
                                <Link to={item?.link} className="flex items-center">
                                <img src="/images/Danhamz_logo.gif" alt="danhamz" className="w-full max-w-[12vw]" />
                                </Link>
                                <section className="flex justify-evenly items-center w-full xl:max-w-[70vw] lg:max-w-[70vw] md:max-w-[70vw]">
                                    {item?.lists?.map((list, index) => {
                                        return (
                                            <main className="" key={index}>
                                                <div className="flex items-center cursor-pointer">
                                                    <Link className="" to={list?.link} target={list?.title === 'Auction' || list?.title === 'Nightly Lets' ? '_blank' : ''}>
                                                    <p className="text-[#152347] hover:text-amber-500 font-medium text-[1.5vw] xl:text-vw lg:text-vw md:text-vw capitalize fomt-medium">{list?.title}</p>
                                                    </Link>
                                                </div>
                                            </main>
                                        );
                                    })}
                                   {admin && admin === 'admin' ? <Link to='/cms' className="p-[0.7vw] bg-amber-500 hover:bg-amber-400 text-vw text-white w-fit rounded-md">Dashboard</Link>: !token && <Link to='/login' className="p-[0.7vw] bg-[#152347] hover:bg-[#1c2e5e] text-vw text-white w-fit rounded-md">Login</Link>}
                                </section>
                            </div>
                   </main>
                    );
                })}
            </nav>
        </>
    );
};

export default Navbar;
