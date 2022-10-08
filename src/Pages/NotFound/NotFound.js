import React from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div>
            <PageTitle title="NotFound"></PageTitle>
            <h2 className="py-5 text-white text-2xl lg:text-5xl font-bold">Page not found</h2>
            <img className="py-3 mx-auto h-[300px]" src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" alt="" />
            <button className="mt-7 py-3 px-8 mb-20 bg-orange-300 rounded text-gray-800 hover:bg-white transition duration-300"><NavLink to="/home">BACK TO HOME</NavLink></button>
        </div>
    );
};

export default NotFound;