import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';

const Booking = () => {
    const [user] = useAuthState(auth);
    let { bookingId } = useParams();

    const [booking, setBooking] = useState({});

    const { place } = booking;


    useEffect(() => {
        fetch(`http://localhost:5000/package/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [bookingId])


    const initialBookingInfo = { status: "pending", fullname: user?.displayName, useremail: user?.email, userphone: "", useraddress: "" };
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
        console.log(newInfo);
    }
    const handleBookingSubmit = e => {
        e.preventDefault();
        console.log('confirm booking clicked');

        // COLLECT DATA
        const placeBooking = {
            ...bookingInfo,
            destinationPlace: place,

        }


        // SEND TO SERVER
        console.log(placeBooking);



        axios.post('http://localhost:5000/bookings', placeBooking)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booked successfully, Now visit My Bookings to view your bookings');
                }
            })

    };


    return (
        <div>
            <h1 className="pt-10 pb-20 text-center text-3xl font-bold text-gray-700">Confirm Your Booking</h1>
            <div className="text-gray-800 pb-20 bg-yellow-300 pt-10 rounded-box w-11/12 md:w-5/6 lg:w-2/5 mx-auto" >
                <form className=" add-service-form w-5/6 mx-auto " onSubmit={handleBookingSubmit}>
                    <div className="w-full py-10 bg-yellow-100 rounded-box mx-auto">
                        <h3 className="text-2xl font-bold">Selected Trip : {booking?.place}, {booking?.country} </h3>
                        <h4> Trip ID: {booking?._id} </h4> <br />
                        <h4 className="text-2xl"> Price: $ {booking?.price} </h4>
                        <h4 className="text-2xl"> Trip Duration: {booking?.duration} Days </h4>
                        <h4 className="text-2xl"> Person: {booking?.people} </h4>
                    </div> <br />

                    <label className="label">
                        <span className="label-text text-gray-800">Your Full Name:</span>
                    </label>
                    <input defaultValue={user?.displayName || ''} required name="fullname" onBlur={handleOnBlur} />



                    <label className="label">
                        <span className="label-text text-gray-800">Email:</span>
                    </label>
                    <input required type="email" name="email" defaultValue={user?.email || ''} onBlur={handleOnBlur} />



                    <label className="label">
                        <span className="label-text text-gray-800">Phone:</span>
                    </label>
                    <input required type="tel" name="userphone" onBlur={handleOnBlur} />



                    <label className="label">
                        <span className="label-text text-gray-800">Address:</span>
                    </label>
                    <textarea type="textarea" name="useraddress" onBlur={handleOnBlur} />

                    <br />
                    <input className=" bg-gray-700 hover:bg-gray-800 transition duration-300 text-white mt-12 submit-btn" type="submit" defaultValue="CONFIRM BOOKING" />
                </form>
            </div>

        </div>
    );
};

export default Booking;