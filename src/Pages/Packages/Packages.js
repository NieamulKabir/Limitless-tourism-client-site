import React, { useState, useEffect } from 'react';
import Package from './Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/package`)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className='font-serif'>
            <div>
                <h1 className='text-4xl font-bold text-violet-600 pt-10'>Our Current Hot Packages</h1>
                <p className='w-5/6 mx-auto pt-4'>Limitless-Tourism is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm</p>
            </div>

            <div className="w-5/6 xl:px-12  py-5 lg:py-16 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                {
                    packages.map((packages) => <Package
                        key={packages._id}
                        packages={packages}
                    ></Package>


                    )
                }

            </div>
        </div>
    );
};

export default Packages;