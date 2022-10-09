import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const PackageDetails = () => {
    let { packageId } = useParams();
    const [packageDetails, setPackageDetails] = useState({});
    // const [singlePackageDetails, setSinglePackageDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/package/${packageId}`)
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, [packageId])


    return (
        <div className="font-serif">
            <div className='w-9/12 mx-auto my-10'>
                <div className="card lg:card-side shadow-xl bg-green-50">
                    <figure><img className='mx-6 rounded-3xl' src={packageDetails?.imgURL} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-4xl font-bold text-violet-600">{packageDetails?.place} </h2>
                        <h2 className="text-sm md:text-lg text-justify"> {packageDetails?.description} </h2>
                        <h2 className="text-2xl font-bold">Duration: {packageDetails?.duration} Days </h2>
                        <h2 className="text-xl font-bold">For: {packageDetails?.people} Person  </h2>
                        <h2 className="">Ratings : {packageDetails?.ratings}<i className="fas fa-star text-violet-500"></i></h2>
                        <h2 className="text-gray-800  text-xl font-bold">Package Price: <span className="text-violet-500 text-2xl font-bold"> {packageDetails?.price}</span> BDT </h2>
                        <div className="card-actions justify-center">
                            <NavLink to={`/booking/${packageDetails?._id}`}><button className="px-10 py-4 bg-gray-700 rounded-3xl hover:bg-violet-600 text-white transition duration-300 ">Book This Service</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>














        </div>
    );
};

export default PackageDetails;