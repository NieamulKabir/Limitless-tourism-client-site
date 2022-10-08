import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Events = () => {
  const [event, setEvent] = useState([])
  useEffect(() => {
    fetch(`https://nieamulkabir.github.io/limitless-tourism/events.json`)
      .then(res => res.json())
      .then(data => setEvent(data))
  }, [])



  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },

    ],
  };


  return (
    <div className='w-[85%] font-serif mx-auto'>




      <p className='text-violet-500 font-bold text-4xl mt-10'>Up Coming Events</p>

      <Slider {...settings}>
        {event.map((e, index) => (
          <div key={index}>

            <div className="card mx-2 h-[350px] md:h-full bg-base-100 shadow-xl my-6">
              <figure className="px-10 pt-10">
                <img src={e.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{e.title}</h2>
                <p>{e.duration}</p>
                <p><span>Details</span> : {e?.ammount}</p>
              </div>
            </div>

          </div>
        ))}


      </Slider>

    </div>

  );
};

export default Events;