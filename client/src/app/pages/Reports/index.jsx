import React from 'react'
import Layout from '../../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'

const Reports = () => {
    const navigate = useNavigate();
    const reportForm = [
        { name: "address", placeholder: "Enter your address", type: "text" },
        { name: "postalCode", placeholder: "Enter your postal code", type: "text" },
    ]
    const handleForm = (e) => {
        e.preventDefault()
        navigate('/report-details')
    }
  return (
    <Layout> 
        {/* want to add background image */}
    <main style={{ backgroundImage: 'url("/images/auction_2.jpg")'}} className='w-full h-full'>
        <article className='w-full flex flex-col justify-center items-center p-[2vw]'>
        <figure className="w-full max-w-[32vw] md:max-w-[12vw] mt-2vw">
            <img src="/images/Danhamz_logo.gif" alt="danhamz" className="w-full" />
        </figure>   
        <h1 className='text-white text-[4.5vw] leading-[4vw] font-bold uppercase mt-[2vw] text-center w-full'>Report Your <br /> Repair Now</h1>
        <form className='w-full flex flex-col justify-center items-center p-[1vw]'>
            {reportForm?.map((item, index) => (
                <div className=" w-full  max-w-[30vw] shadow-md rounded-md" key={index}>
                    <input type={item.type} name={item.name} id={item.name} placeholder={item.placeholder} className="rounded-md focus:outline-none w-full p-[0.7vw] mt-[2vw] text-[1vw] text-gray-700" />
                </div>
            ))}
            <button onClick={handleForm} type='submit' className='text-white text-vw w-full max-w-[30vw] hover:bg-[#152347f1] font-semibold text-center bg-[#152347] p-[0.7vw] rounded-md mt-vw'>Raise Task</button>
        </form>
        <p className='text-white text-[1.2vw] font-medium text-center mt-vw'>If you wish to log in to your Tenant Portal, please <Link className='text-blue-600 hover:underline'>click here</Link></p>
         </article>
    </main>

    </Layout>
  )
}

export default Reports