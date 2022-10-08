import React from 'react';

const CoreValue = () => {
    return (
        <div >
            <div className='w-10/12 mx-auto py-16 font-serif'>
                <h1 className='text-violet-600 font-bold text-4xl pb-10'>Our Core Values</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
                    <div className="card  bg-green-100 shadow-xl">
                        <div className="card-body ">
                            <div className='text-center'>
                                <h1 className='text-5xl'><i className="fa-solid fa-boxes-packing "></i></h1>
                                <h2 className="text-2xl font-bold text-violet-700 py-2">Attractive Packages</h2>
                                <p>Choose your one and have a affordable, beautiful vacation to you dream country</p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary bg-violet-600">click to Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-green-100 shadow-xl">
                        <div className="card-body ">
                            <div className='text-center'>
                                <h1 className='text-5xl'><i className="fa-solid fa-plane-departure"></i></h1>
                                <h2 className="text-2xl font-bold text-violet-700 py-2">Stunning tours</h2>
                                <p>We offer variety of authentic adventure</p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary bg-violet-600">click to Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-green-100 shadow-xl">
                        <div className="card-body ">
                            <div className='text-center'>
                                <h1 className='text-5xl'><i className="fa-solid fa-star"></i></h1>
                                <h2 className="text-2xl font-bold text-violet-700 py-2">See Review Of Travelers</h2>
                                <p>7 Continents, thousands of trips, we are the experts</p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary bg-violet-600">click to Know more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoreValue;