import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { valuationForm } from '../../Data'
import { useForm, Controller } from 'react-hook-form'; 
import { ToastContainer, toast } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';


const Valuation = () => {
    const [valuationDetails, setValuationDetails] = useState({address: "", town: '', postalCode: '', name: '', phoneNumber: '', email: '', message: ''})
    const {handleSubmit, control, reset, setValue} = useForm({
        defaultValues: {
            address: "", town: '', postalCode: '', name: '',
            phoneNumber: "", email: '',  message: '', }
          })

    const handleInputChange = (e)=> {
        const {name, value} = e.target
        setValuationDetails({...valuationDetails, [name]: value})
        setValue(name, value)
    }

    const onSubmit = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/book-valuation`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            // console.log('Email sent successfully');
            // Optionally, reset form fields after successful submission
            toast.success('Thanks for your request you will recieve a callback within 48 hours')
            reset();
          } else {
            toast.error('please try again later')
            console.error('Failed to send email');
          }
        } catch (error) {
          console.error('Error sending email:', error.message);
        }
      };
      
  return (
    <Layout>
        <main className='w-full col-center p-2vw bg-gray-100' >
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center p-2vw'>
                <section className='w-full md:max-w-[35vw]'>
                {valuationForm?.slice(0, 4).map((item, index)=> {
                    return <div className="w-full md:max-w-[45vw] p-[0.5vw]" key={index}>
                        <label htmlFor={item?.id} className='text-[3.2vw] md:text-[1.3vw] font-medium'>{item?.label}</label>
                        {item?.type === 'textarea' ? 
                           <Controller
                            name={item?.name}
                            control={control}
                            rules={item?.rules}
                            render={({field}) => (
                                <textarea type={item?.type} placeholder={item?.placeholder} {...field}
                                 onChange={handleInputChange} rows={6} className='w-full p-[0.7vw] focus:outline-none focus:shadow-md text-[3vw] md:text-[1.2vw] border-[1px] border-gray-400 rounded-md mt-0.5vw' ></textarea>
                            )}
                        /> : 
                        <Controller
                        name={item?.name}
                        control={control}
                        rules={item?.rules}
                        render={({field}) => (
                            <input type={item?.type} placeholder={item?.placeholder} {...field}
                             onChange={handleInputChange} className='w-full p-[0.7vw] border-[1px] focus:outline-none focus:shadow-md text-[3vw] md:text-[1.2vw] border-gray-400 rounded-md mt-0.5vw spin-button-none' />
                        )}
                       />
                       }   
                    </div>
                })}
                </section>
                <section className='w-full md:max-w-[35vw]'>
                {valuationForm?.slice(4, 7).map((item, index)=> {
                    return <div className="w-full md:max-w-[45vw] p-[0.5vw]" key={index}>
                        <label htmlFor={item?.id} className='text-[3.2vw] md:text-[1.3vw] font-medium'>{item?.label}</label>
                        {item?.type === 'textarea' ? 
                           <Controller
                            name={item?.name}
                            control={control}
                            rules={item?.rules}
                            render={({field}) => (
                                <textarea type={item?.type} placeholder={item?.placeholder} {...field}
                                 onChange={handleInputChange} rows={6} className='w-full p-[0.7vw] focus:outline-none focus:shadow-md text-[3vw] md:text-[1.2vw] border-[1px] border-gray-400 rounded-md mt-0.5vw' ></textarea>
                            )}
                        /> : 
                        <Controller
                        name={item?.name}
                        control={control}
                        rules={item?.rules}
                        render={({field}) => (
                            <input type={item?.type} placeholder={item?.placeholder} {...field}
                             onChange={handleInputChange} className='w-full p-[0.7vw] border-[1px] focus:outline-none focus:shadow-md text-[3vw] md:text-[1.2vw] border-gray-400 rounded-md mt-0.5vw spin-button-none' />
                        )}
                       />
                       }   
                    </div>
                })}
                </section>
                <div className="w-full row-center">
                <button type='submit' className='w-full max-w-[44vw] hover:bg-[#152347e8] text-[3vw] md:text-[1.2vw] bg-[#152347] text-white p-0.5vw rounded-md mt-2vw'>Submit</button>
                </div>
            </form>
           
        </main>
    </Layout>
  )
}

export default Valuation