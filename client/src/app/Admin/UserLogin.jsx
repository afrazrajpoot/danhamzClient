import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../Data';
import Layout from '../Layout/Layout';
import { useLoginUserMutation } from '../store/storeApi';

const UserLogin = () => {
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate()
    const { handleSubmit, setValue, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(value, "value")
        setValue(name, value);
    };
    const showToast = (message, type) => {
        toast[type](message, {
            autoClose: 3000,
        });
    };

    const onSubmit = async (data, e) => { 
        e.preventDefault();
        try {
            const response = await loginUser(data);
            // console.log(response.data, 'response');
            localStorage.setItem('tokken', JSON.stringify(response.data.token));
            const fetchDetails = await axios.get(`${import.meta.env.VITE_API_URL}/auth/getDetails`, {
                headers: {
                    Authorization: `Bearer ${response.data.token}`,
                },
            });
                const userLoginInfo = fetchDetails?.data;
            localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo));
            if(fetchDetails.status === 200 || fetchDetails.status === 201) {
                showToast('Successfully Logged In', 'success');
                        setTimeout(() => {
                            navigate('/cms');
                        }, 3000);
            }
        } catch (error) {
            // console.error('Error during login:', error);
            showToast('Please try again or use correct credentials', 'error');
        }
    
        reset();
    };
    
    return (
        <div>
            <Layout>
            <main className='bg-gray-100 w-full'>
                <ToastContainer />
                <form onSubmit={handleSubmit(onSubmit)} className="col-center p-3vw w-full">
                        <div className='mt-2vw'>
                            {login?.map((form, index) => (
                                <div key={index} className='w-full p-0.5vw max-w-[30vw]'>
                                    <label className='text-[1.4vw] font-light text-black'>{form?.label}</label> <br />
                                    <Controller
                                        name={form?.name}
                                        control={control}
                                        rules={form?.rules}
                                        render={({ field }) => (
                                            <input
                                                onChange={handleInputChange}
                                                {...field} value={field?.value}
                                                type={form?.type} placeholder={form?.placeholder}
                                                className="w-[32vw] text-vw focus:outline-none p-[0.6vw] focus:shadow-md border-gray-300 border-[1px] rounded-md"
                                            />
                                        )}
                                    />
                                    <br />
                                    {errors[form?.name] && <p className='text-red-500'>{errors[form?.name]?.message}</p>}
                                </div>
                            ))}
                            <div className="flex justify-center items-center">
                                <button type='submit' className='bg-amber-500 text-white mt-2vw p-0.5vw w-full max-w-[10vw] hover:bg-amber-600 text-vw rounded-md'>Login</button>
                            </div>
                            <p className='text-[0.9vw] mt-0.5vw w-full text-center'>Don't have an account? <Link to='/signup' className='text-vw font-medium text-black hover:text-blue-600'>Sign up</Link></p>
                        </div>
                </form>
            </main>
            </Layout>
        </div>
    )
}

export default UserLogin