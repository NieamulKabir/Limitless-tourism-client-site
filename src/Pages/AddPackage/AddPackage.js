import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://limitless-tourism.onrender.com/package `;
        axios.post(url, data)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Added successfully');
                    reset();
                }
            })
    };
    return (
        <div className='font-serif bg-green-50'>
            <PageTitle title='Add-Package'></PageTitle>
            <h1 className="py-10 text-center text-3xl font-bold text-violet-600">ADD NEW PACKAGE HERE</h1>
            <div className="text-gray-800 pb-20 bg-green-300 pt-10 rounded-box w-11/12 md:w-5/6 lg:w-3/5 mx-auto">
                <form className='bg-green-100 mx-auto w-11/12 pt-10 pb-5 rounded-3xl' onSubmit={handleSubmit(onSubmit)}>

                    <label className="label ">
                        <span className="label-text ml-14 font-semibold text-gray-800">Destination Place:</span>
                    </label>
                    <input className='w-[80%] pl-2 py-[5px] border-solid border-2 border-indigo-600 rounded-xl' {...register("place", { required: true, maxLength: 20 })} />


                    <label className="label ">
                        <span className="label-text ml-14 font-semibold text-gray-800">Tour Duration:</span>
                    </label>
                    <input className='w-[80%]  pl-2 py-[5px] border-solid border-2 border-indigo-600 rounded-xl' {...register("duration", { min: 1, max: 7 })} />


                    <label className="label ">
                        <span className="label-text ml-14 font-semibold text-gray-800">Number of People:</span>
                    </label>
                    <input className='w-[80%]  pl-2 py-[5px] border-solid border-2 border-indigo-600 rounded-xl' {...register("people", { min: 1, max: 7 })} />


                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Ratings</span>
                    </label>
                    <input className='w-[80%] pl-2 py-[5px]  border-solid border-2 border-indigo-600 rounded-xl' type="number" step=".1" {...register("ratings", { required: true })} />

                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Image URL:</span>
                    </label>
                    <input className='w-[80%] pl-2 py-[5px]  border-solid border-2 border-indigo-600 rounded-xl' required {...register("imgURL", { required: true })} />


                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Short Description:</span>
                    </label>
                    <textarea className='w-[80%] pl-2  border-solid border-2 border-indigo-600 rounded-xl' required {...register("title", { required: true })} />


                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Description:</span>
                    </label>
                    <textarea className='w-[80%] pl-2 border-solid border-2 border-indigo-600 rounded-xl' required {...register("description", { required: true })} />


                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Price:</span>
                    </label>
                    <input className='w-[80%] pl-2 py-[5px] border-solid border-2 border-indigo-600 rounded-xl' required type="number" {...register("price", { required: true })} />

                    <br />
                    <input className="px-4 py-2 my-8 rounded-xl font-bold  bg-violet-600 hover:bg-gray-800 transition duration-300 text-white  submit-btn" type="submit" value="ADD PACKAGE" />
                </form>
            </div>
        </div >
    );
};

export default AddPackage;