import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyBooking = () => {



    const [user] = useAuthState(auth);

    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings`)
            .then(res => res.json())
            .then(data => setMyBookings(data))

    }, [])



    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure to cancel this Booking?');
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Service Deleted successfully')
                        const remaining = myBookings.filter(booking => booking._id !== id);
                        setMyBookings(remaining);
                    }
                });
        }
    }





    return (
        <div>
            <h1 className="pt-10 pb-5 text-center text-3xl font-bold text-gray-700">Manage Your Bookings</h1>
            <p className="text-gray-400 pt-2">Logged in user can only see his/her bookings here and can cancel it.</p>
            <div className="w-5/6 xl:px-36 2xl:px-48 py-5 lg:py-28 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                {
                    myBookings.filter(mydata => mydata?.useremail === user?.email).map(booking => <div
                        key={booking._id}
                    >
                        <div className="transform bg-gray-800 to-hover hover:shadow-xl hover:bg-gray-700 text-center py-10 transition duration-300 rounded-box w-full mx-auto">
                            <img className="mx-auto rounded-full" src={user?.photoURL} alt="" />
                            <h1 className="px-5 pt-5 text-2xl font-bold text-white">Trip Destination: <span className="text-yellow-300">{booking.destinationPlace},{booking.destinationCountry}</span></h1>
                            <h1 className="px-5 pt-5 text-xl font-bold text-white">Client: <span className="text-yellow-300">{booking?.fullname}</span></h1>
                            <h2 className="px-5 pt-5 text-gray-400">Order ID: <span className="text-yellow-300">{booking._id}</span></h2>
                            <h2 className="px-5 pt-5 text-gray-400">Email: {booking?.useremail}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Phone: {booking?.userphone}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Address: {booking?.useraddress}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Status: {booking?.status === "pending" ? <span className="py-1 px-3 text-gray-900 bg-purple-300 rounded">PENDING</span> : <span className="py-1 px-3 bg-green-300 text-gray-900 rounded">CONFIRMED</span>} </h2>
                            <br />
                            <button onClick={() => handleDeleteBooking(booking?._id)} className="px-5 py-3 mt-10 mb-8 text-white bg-red-600 custom-bg-font rounded hover:bg-red-800 transition duration-300 ml-2">Cancel Booking</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBooking;