import React , { useEffect, useState } from 'react';

const ManageAllBooking = () => {

    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings`)
            .then(res => res.json())
            .then(data => setMyBookings(data))

    }, [])

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure to delete this Booking?');
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

    const handleConfirmBooking = id => {
        const confirmedBooking = { status: "Confirmed" };

        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirmedBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Service Updated Successfully.')
                    window.location.reload();
                }
            })
    }

    return (
        <div className='font-serif bg-green-50'>
            <h1 className="pt-10 pb-2 text-center text-3xl font-bold text-violet-600">Admin Can Manage All Bookings HERE! </h1>
            <div className="w-11/12 xl:px-16 2xl:px-20 py-5 lg:py-10 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                {
                    myBookings.map(booking => 
                    <div
                        key={booking._id}
                    >
                        <div className="transform bg-green-200 to-hover hover:shadow-xl  text-center py-10 transition duration-300 rounded-box w-full mx-auto">

                            <h1 className="px-5 pt-5 text-2xl font-bold text-black">Tour Location : <span className="text-violet-600">{booking.destinationPlace}</span></h1>
                            <h1 className="px-5 pt-5 text-xl font-bold text-black">Client : <span className="text-violet-600">{booking.fullname}</span></h1>
                            <h2 className="px-5 pt-5 text-black">Order ID : <span className="text-violet-600">{booking._id}</span> </h2>
                            <h2 className="px-5 pt-5 text-black ">Email :<span className='text-red-500'> {booking.useremail}</span></h2>
                            <h2 className="px-5 pt-5 text-black  text-xl">Phone : {booking.userphone}</h2>
                            <h2 className="px-5 pt-5 text-black  text-xl">Address : {booking.useraddress}</h2>
                            <h2 className="px-5 pt-5 text-black text-xl">Status : {booking.status === "pending" ? <span className="py-3 px-4 text-white bg-purple-500 rounded">PENDING</span> : <span className="py-3 px-3 bg-green-500 text-white rounded">CONFIRMED</span>}  </h2>
                            
                            {booking.status === "pending" ? <button onClick={() => handleConfirmBooking(booking._id)} className="px-5 py-3 mt-10 mb-8 bg-green-500 rounded hover:bg-green-600 text-white transition duration-300 mr-2">Confirm Booking</button> : <button className="px-5 py-3 mt-10 mb-8 bg-green-500 rounded hover:bg-green-600 text-white transition duration-300 mr-2">CONFIRMED <i className="fas fa-check-circle"></i></button>}
                            <button onClick={() => handleDeleteBooking(booking._id)} className="px-5 py-3 mt-10 mb-8 text-white bg-red-600 rounded hover:bg-red-800 transition duration-300 ml-2">Delete Booking <i className="fa-solid fa-trash"></i></button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllBooking;