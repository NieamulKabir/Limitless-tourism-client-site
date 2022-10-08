import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const HomePackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/package`)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className="bg-green-50 text-white font-serif">
            <h1 className=" pt-10 text-center text-4xl font-bold text-violet-600">Our Limitless-Tourism Packages</h1>
            <p className="text-gray-400 pt-5">Express tour packages includes these destination, for details please click each service</p>
            <div className="w-5/6 xl:px-12  py-5 lg:py-20 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                {
                    packages.slice(0, 6).map((service, index) =>
                        <div  key={index}>
                            <div className="transform hover:-translate-y-3 to-hover hover:shadow-xl bg-green-200 text-center secondary-bg transition duration-300 rounded-box w-full mx-auto">
                                
                                <img className="mx-auto w-full rounded-lg" src={service.imgURL} alt="" />
                                <h1 className="px-5 pt-5 text-2xl font-bold text-violet-600">{service.place}</h1>
                                <h2 className="px-5 pt-5 text-black">{service.title}</h2>
                                <h2 className="text-black pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-sm">
                                    Ratings: {service.ratings}<i className="fas fa-star text-yellow-400"></i>

                                </h2>

                                <NavLink to={`/packageDetails/${service?._id}`}
                                ><button className="px-6 py-3 mt-5 mb-8 bg-violet-600 custom-bg-font rounded-lg text-white hover:text-black hover:bg-white transition duration-300">VIEW DETAILS</button></NavLink>
                            </div>
                        </div>

                    )
                }

            </div>
            <button className="px-8 py-3 mx-auto text-center mb-6 bg-violet-500 text-white rounded hover:bg-white hover:text-gray-800 transition duration-300 font-bold font-serif"> <NavLink to="/packages">SEE ALL SERVICES</NavLink></button>
        </div>
    );
};

export default HomePackages;