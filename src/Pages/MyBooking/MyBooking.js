import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyBooking = () => {
    const [user] = useAuthState(auth);

    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-tourism.onrender.com/bookings`)
            .then(res => res.json())
            .then(data => setMyBookings(data))

    }, [])

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure to cancel this Booking?');
        if (proceed) {
            const url = `https://limitless-tourism.onrender.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast('Package Deleted successfully')
                        const remaining = myBookings.filter(booking => booking._id !== id);
                        setMyBookings(remaining);
                    }
                });
        }
    }


    return (
        <div className='font-serif'>
            <PageTitle title="My_Booking"></PageTitle>
            <h1 className="pt-10 pb-2 text-center text-3xl font-bold text-violet-600">Manage Your Bookings</h1>
            <p className="text-gray-400 pt-2">Here, You Can See your booking packages. For seeing you have to log in first!!</p>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="w-5/6 xl:px-36 2xl:px-48 py-5 lg:py-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                {
                    myBookings.filter(mydata => mydata?.useremail === user?.email).map(booking =>
                        <div key={booking._id}>
                            <div className="transform bg-green-200 to-hover hover:shadow-xl text-center py-10 transition duration-300 rounded-box w-full mx-auto">
                                <img className="mx-auto rounded-3xl" src={user?.photoURL} alt="" />
                                <h1 className="px-5 pt-5 text-2xl font-bold text-black">Tour Location : <span className="text-violet-600">{booking.destinationPlace}</span></h1>
                                <h1 className="px-5 pt-5 text-xl font-bold text-black">Client : <span className="text-violet-600">{booking?.fullname}</span></h1>
                                <h2 className="px-5 pt-5 text-black">Order ID: <span className="text-violet-600">{booking._id}</span></h2>
                                <h2 className="px-5 pt-5 text-black font-semibold">Email : {booking?.useremail}</h2>
                                <h2 className="px-5 pt-5 text-black text-xl">Phone : {booking?.userphone}</h2>
                                <h2 className="px-5 pt-5 text-black text-xl">Address : {booking?.useraddress}</h2>
                                <h2 className="px-5 pt-5 text-black text-xl">Status : {booking?.status === "pending" ? <span className="py-2 px-3 text-white bg-purple-500 rounded">PENDING</span> : <span className="py-2 px-3 bg-green-500 text-white rounded">CONFIRMED</span>} </h2>
                                <br />
                                {
                                    (booking?.status === "pending" ? <button onClick={() => handleDeleteBooking(booking?._id)}
                                        className="px-5 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-800 transition duration-300 ml-2">Cancel Booking <i className="fa-solid fa-trash"></i></button>
                                        : null)
                                }
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyBooking;