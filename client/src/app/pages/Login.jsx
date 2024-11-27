import React from 'react'
import { Icon } from '@iconify/react';
import { login } from '../Data';
import { Link } from 'react-router-dom';


const Login = ({onCancel}) => { 
  return (
    <div>
        <main className='w-full max-w-[50vw] shadow-lg'>
            <nav className="w-full bg-gray-800 flex justify-between items-center p-vw">
                <img src="/images/pr_file.png" alt="property_login" className='w-full max-w-[7vw]' />
                <Icon icon="mdi:cancel-bold" className='text-white text-2vw cursor-pointer' onClick={onCancel} />
            </nav>
            <article className='w-full bg-gray-200 col-center p-3vw'>
                <h1 className='text-2vw text-gray-800 font-medium'>Sign in to PropertyFile</h1>
                <section className='col-center w-full'>
                    {login?.map((item, index) => (
                        <div className="mt-0.5vw w-full" key={index}>
                            <label className='text-gray-800 text-vw' htmlFor={item?.name}>{item?.label}</label>
                            <div className="flex items-center">
                            <input type={item?.type} name={item?.name} placeholder={item?.placeholder} className='w-full max-[45vw] text-vw p-0.5vw bg-white' />
                            <span className='text-gray-400 text-[1.3vw] -ml-[2.3vw]'>{item?.icon}</span>
                            </div>
                        </div>
                    ))}
                    <button type='btn' className='text-white text-vw w-full max-w-[7vw] hover:bg-blue-700 font-semibold text-center bg-blue-500 p-0.5vw rounded-md mt-vw'>Sign In</button>
                    <Link className='text-blue-600 text-vw text-center hover:underline  mt-vw'>Can't access your account?</Link>
                </section>
            </article>
        </main>
    </div>
  )
}

export default Login