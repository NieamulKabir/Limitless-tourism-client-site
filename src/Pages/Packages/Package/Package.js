import React from 'react';
import { NavLink } from 'react-router-dom';

const Package = ({ packages }) => {
    const { place, imgURL, title, ratings, _id } = packages;

    return (
        <div>
            <div>
                <div className="transform hover:-translate-y-3 to-hover hover:shadow-xl bg-green-200 text-center secondary-bg transition duration-300 rounded-box w-full mx-auto">

                    <img className="mx-auto rounded-lg w-full h-[300px]" src={imgURL} alt="" />
                    <h1 className="px-5 pt-5 text-2xl font-bold text-violet-600">{place}</h1>
                    <h2 className="px-5 pt-5 text-black">{title}</h2>
                    <h2 className="text-black pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-sm">
                        Ratings: {ratings}<i className="fas fa-star text-yellow-400"></i>

                    </h2>

                    <NavLink to={`/packageDetails/${_id}`}
                    ><button className="px-6 py-3 mt-5 mb-8 bg-violet-600 custom-bg-font rounded-lg text-white hover:text-black hover:bg-white transition duration-300">VIEW DETAILS</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Package;