import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Contact = () => {
    return (
        <div className='bg-green-50 font-serif'>
            <PageTitle title="Contact"></PageTitle>
            <h1 className="pt-5 pb-10 text-center text-3xl font-bold text-violet-800">CONTACT US</h1>
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="absolute inset-0 bg-gray-900">
                    <iframe title="map" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5">Simply tell your queries & we'll be get back to you.</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-gray-800 transition duration-300 bg-green-200 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg">SEND</button>
                        <p className="text-xs text-gray-400 text-opacity-90 mt-3">It takes aprroximately up to 24 hours to get back to you.</p>
                    </div>
                </div>
            </section>
            <section className='py-10'>
                <p className=''><span className='pr-2'><i className="fa-solid fa-envelope"></i></span> kabir0000@gmail.com</p>
                <p className=''><span className='pr-2'><i className="fa-solid fa-phone"></i></span> +8801 77788800</p>
            </section>
        </div>
    );
};

export default Contact;