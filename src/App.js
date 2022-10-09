
import './App.css';
// import ScrollToTop from "react-scroll-to-top";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Packages from './Pages/Packages/Packages';

import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddPackage from './Pages/AddPackage/AddPackage';
import Booking from './Pages/Booking/Booking';
import MyBooking from './Pages/MyBooking/MyBooking';
import ManageAllBooking from './Pages/ManageAllBooking/ManageAllBooking';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/packages" element={<Packages />} />

        <Route path="/packageDetails/:packageId" element={
          <RequireAuth>
            <PackageDetails />
          </RequireAuth>
        } />

        <Route path="/addPackage" element={
          <RequireAuth>
            <AddPackage />
          </RequireAuth>
        } />

        <Route path="/booking/:bookingId" element={
          <RequireAuth>
            <Booking />
          </RequireAuth>
        } />

        <Route path="/myBooking" element={
          <RequireAuth>
            <MyBooking />
          </RequireAuth>
        } />


        <Route path="/manageBookings" element={
          <RequireAuth>
            <ManageAllBooking />
          </RequireAuth>
        } />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>


      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
