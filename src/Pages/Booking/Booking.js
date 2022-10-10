import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
    const [user] = useAuthState(auth);
    let { bookingId } = useParams();

    const [booking, setBooking] = useState({});
    const { place } = booking;

    useEffect(() => {
        fetch(`https://limitless-tourism.onrender.com/package/${bookingId}`)
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
        // COLLECT DATA
        const placeBooking = {
            ...bookingInfo,
            destinationPlace: place,

        }
        // SEND TO SERVER
        console.log(placeBooking);
        axios.post('https://limitless-tourism.onrender.com/bookings', placeBooking)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Booked successfully, Now visit My Bookings to view your bookings');
                }
            })
    };

    return (
        <div>
            <PageTitle title="Booking"></PageTitle>
            <h1 className="pt-10 pb-6 text-center text-3xl font-bold text-violet-700">Confirm Your Booking!!</h1>
            <div className="text-gray-800 pb-10 bg-green-300 pt-10 rounded-box w-11/12 md:w-5/6 lg:w-3/5 mx-auto" >
                <form className=" add-service-form w-5/6 mx-auto " onSubmit={handleBookingSubmit}>
                    <div className="w-full py-10 bg-green-100 rounded-box mx-auto">
                        <h3 className="text-2xl font-bold">Selected Place : <span className='text-violet-600'>{booking?.place}</span></h3>
                        <h4> Trip ID: {booking?._id} </h4>
                        <h4 className="text-2xl"> Price :{booking?.price} BDT</h4>
                        <h4 className="text-2xl"> Tour Duration: {booking?.duration} Days </h4>
                        <h4 className="text-2xl"> Person : {booking?.people} </h4>
                    </div> <br />

                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Your Full Name:</span>
                    </label>
                    <input className='w-[80%] pl-2 py-[5px]  border-solid border-2 border-indigo-600 rounded-xl' defaultValue={user?.displayName || ''} required name="fullname" onBlur={handleOnBlur} />


                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Email:</span>
                    </label>
                    <input className='w-[80%] pl-2 py-[5px]  border-solid border-2 border-indigo-600 rounded-xl' required type="email" name="email" defaultValue={user?.email || ''} onBlur={handleOnBlur} />


                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Phone:</span>
                    </label>
                    <input className='w-[80%] pl-2 py-[5px]  border-solid border-2 border-indigo-600 rounded-xl' required type="tel" name="userphone" onBlur={handleOnBlur} />

                    <label className="label">
                        <span className="label-text ml-14 font-semibold text-gray-800">Address:</span>
                    </label>
                    <textarea className='w-[80%] pl-2 py-[5px]  border-solid border-2 border-indigo-600 rounded-xl' type="textarea" name="useraddress" onBlur={handleOnBlur} />
                    <br />
                    <input className="px-10 py-3 mt-6 text-xl font-semibold rounded-2xl bg-violet-700 text-white submit-btn" type="submit" defaultValue="CONFIRM BOOKING" />
                </form>
            </div>

        </div>
    );
};

export default Booking;