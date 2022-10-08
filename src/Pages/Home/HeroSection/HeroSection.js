import React from 'react';

const HeroSection = () => {
    return (
        <div className='bg-green-50 font-serif'>
            <div className='md:flex row w-11/12 mx-auto items-center py-20 '>
                <div className='text-start  basis-2/4'>
                    <h1 className='text-4xl lg:text-5xl  font-bold'>WellCome To <br /><span className='text-violet-600'>Limitless-Tourism</span></h1>
                    <h1 className='text-3xl lg:text-4xl py-6'> <span className='text-violet-600'>Explore</span> the world & <br /> become your own tour guide</h1>
                    <p className='pb-6'>Explore the country’s first and leading online travel aggregator.</p>
                    <button className='bg-violet-500 px-4 py-2 text-white font-medium rounded-lg hover:bg-green-300 hover:text-black mb-4'>Explore Packages <i className="fa-solid fa-arrow-right"></i></button>
                </div>

                <div className='basis-2/4'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://nieamulkabir.github.io/limitless-tourism/image/bali.jpg" className="w-full h-80 rounded-3xl" alt=''/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://nieamulkabir.github.io/limitless-tourism/image/cox-bazar.jpg" className="w-full h-80 rounded-3xl" alt=''/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://nieamulkabir.github.io/limitless-tourism/image/Bandarban.jpg" className="w-full h-80 rounded-3xl" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://nieamulkabir.github.io/limitless-tourism/image/sajek.jpg" className="w-full h-80 rounded-3xl" alt=''/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;