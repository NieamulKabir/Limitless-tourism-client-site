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
        <div>
            <h1 className="pt-10 pb-2 text-center text-3xl font-bold text-gray-700">Manage All Bookings (ADMIN) </h1>
            <p className="text-gray-400 pt-5">Admin can see and manage anyones bookings here</p>
            <div className="w-5/6 xl:px-36 2xl:px-48 py-5 lg:py-28 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                {
                    myBookings.map(booking => <div
                        key={booking._id}
                    >
                        <div className="transform bg-gray-800 to-hover hover:shadow-xl hover:bg-gray-700 text-center py-10 transition duration-300 rounded-box w-full mx-auto">
                            <h1 className="px-5 pt-5 text-2xl font-bold text-white">Trip Destination: <span className="text-yellow-300">{booking.destinationPlace},{booking.destinationCountry}</span></h1>
                            <h1 className="px-5 pt-5 text-xl font-bold text-white">Client: <span className="text-yellow-300">{booking.fullname}</span></h1>
                            <h2 className="px-5 pt-5 text-gray-400">Order ID: <span className="text-yellow-300">{booking._id}</span> </h2>
                            <h2 className="px-5 pt-5 text-gray-400">Email: {booking.useremail}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Phone: {booking.userphone}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Address: {booking.useraddress}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Status: {booking.status === "pending" ? <span className="py-1 px-3 text-gray-900 bg-purple-300 rounded">PENDING</span> : <span className="py-1 px-3 bg-green-300 text-gray-900 rounded">CONFIRMED</span>}  </h2>
                            <br /><br />
                            {booking.status === "pending" ? <button onClick={() => handleConfirmBooking(booking._id)} className="px-5 py-3 mt-10 mb-8 bg-green-500 custom-bg-font rounded hover:bg-green-600 text-white transition duration-300 mr-2">Confirm Booking</button> : <button className="px-5 py-3 mt-10 mb-8 bg-green-500 custom-bg-font rounded hover:bg-green-600 text-white transition duration-300 mr-2">CONFIRMED <i className="fas fa-check-circle"></i></button>}
                            <button onClick={() => handleDeleteBooking(booking._id)} className="px-5 py-3 mt-10 mb-8 text-white bg-red-600 custom-bg-font rounded hover:bg-red-800 transition duration-300 ml-2">Delete Booking</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllBooking;