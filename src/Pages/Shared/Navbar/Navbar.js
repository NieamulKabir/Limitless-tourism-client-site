import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';



let activeStyle = {
    textDecoration: "underline",
    color: '#7c3aed'

};

const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)

    }

    return (
        <>
            <nav className="sticky top-0 w-full z-50 text-gray-800">
                <div className='flex justify-between px-2 md:px-12  bg-gray-500 text-white items-center'>
                    <div className='text-start text-xs md:text-base'>
                        <h1>We're here to provide 24/7 at your service</h1>
                    </div>
                    <div className='md:flex py-2 '>
                        <h1 className='md:mr-3 text-end text-xs  md:text-base'><i className="fa-solid fa-phone mr-[3px]"></i>01517828832</h1>
                        <h1 className='text-xs text-end  md:text-base'><i className="fa-regular fa-envelope mr-[3px]"></i>limitless@gmail.com</h1>
                    </div>
                </div>
                <div className="navbar bg-[#a2f3c0]">
                    <div className="flex-1 md:pl-5 mx-2">
                        <Link href="/">
                            <div className="relative top-[]">
                                <p className='font-mono font-extrabold text-base text-violet-600  md:text-2xl'><i className="fa-solid fa-earth-asia"></i> Limitless-Tourism</p>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden mx-2 lg:flex">
                        <div className="flex items-center">

                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/home"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">HOME</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/packages"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">PACKAGES</button>
                                </NavLink>
                            </h1>


                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/myBooking"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">MY-BOOKING</button>
                                </NavLink>
                            </h1>



                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-0 pr-0">
                                <div className="navbar-center">
                                    <ul className="menu menu-horizontal p-0">
                                        <li tabIndex={0}>
                                            <a>
                                                ADMIN
                                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                            </a>
                                            <ul className="bg-green-100 mt-4">
                                                <li className='mx-auto'>
                                                    <h1 className="btn font-bold hover:bg-rose-100  btn-ghost text-gray-800 rounded-btn mr-2">
                                                        <NavLink to="/addPackage"
                                                            style={({ isActive }) =>
                                                                isActive ? activeStyle : undefined
                                                            }
                                                        >
                                                            <button className="py-3">ADD-PACKAGE</button>
                                                        </NavLink>
                                                    </h1>
                                                </li>
                                                <li>
                                                    <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                                        <NavLink to="/manageBookings"
                                                            style={({ isActive }) =>
                                                                isActive ? activeStyle : undefined
                                                            }
                                                        >
                                                            <button className="py-3">MANAGE-ALL-BOOKINGS</button>
                                                        </NavLink>
                                                    </h1>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                            </h1>



                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/contact"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">CONTACT</button>
                                </NavLink>
                            </h1>



                            <h1>
                                {
                                    user?.displayName &&
                                    <div className='flex justify-center items-center'>
                                        <h3 className="text-lg font-semibold pr-2 ml-0 text-violet-700">Hi,{user?.displayName}  </h3>
                                        <img className="rounded-3xl w-10" src={user?.photoURL} alt="" />
                                    </div>

                                }
                            </h1>

                            <h1>
                                {
                                    user ?
                                        <button
                                            onClick={async () => {
                                                await handleSignOut();
                                                toast("Successfully Sign Out");
                                            }

                                            }>

                                            <div className='ml-5'>
                                                <Link to='/register' className="bg-violet-600 w-36 px-4 py-[12px] font-semibold text-white rounded-xl"><span className='text-lg'>SIGN OUT</span></Link>
                                            </div>
                                        </button>

                                        :
                                        <div className='ml-24 md:ml-80  lg:ml-0 lg:mr-6'>
                                            <Link to='/login' className="bg-violet-600 px-4 py-[12px] font-semibold text-white rounded-xl w-36">
                                                LOG IN
                                            </Link>
                                        </div>
                                }

                            </h1>



                        </div>
                    </div>

                    {/* tablate ans phone  */}
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2" to='/'>
                                    HOME
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/packages">
                                    PACKAGES
                                </Link>
                            </li>

                            <li className="mt-[-15px] pt-0">
                                <h1 className="btn  hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-0 pr-0">
                                    <div className="navbar-center">
                                        <ul className="menu ">
                                            <li tabIndex={0}>
                                                <a>
                                                    ADMIN
                                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                                </a>
                                                <ul className="bg-green-100 ml-[-280px] md:ml-[-350px]">
                                                    <li className='mx-auto'>
                                                        <h1 className="btn font-bold hover:bg-rose-100  btn-ghost text-gray-800 rounded-btn">
                                                            <NavLink to="/addPackage"
                                                                style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }
                                                            >
                                                                <button className="py-3 text-xs md:text-base">ADD-PACKAGE</button>
                                                            </NavLink>
                                                        </h1>
                                                    </li>
                                                    <li>
                                                        <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn ">
                                                            <NavLink to="/manageBookings"
                                                                style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }
                                                            >
                                                                <button className="py-3  text-xs md:text-base">MANAGE-ALL-BOOKINGS</button>
                                                            </NavLink>
                                                        </h1>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                </h1>
                            </li>


                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/contact">
                                    CONTACT
                                </Link>
                            </li>


                            <li className='py-2'>
                                {
                                    user?.displayName &&
                                    <div className='flex justify-center items-center'>
                                        <h3 className="text-sm font-semibold pr-2 ml-0 text-violet-700">Hi,{user?.displayName}  </h3>
                                        <img className="rounded-3xl w-10" src={user?.photoURL} alt="" />
                                    </div>

                                }
                            </li>

                            <li>
                                {
                                    user ?
                                        <button
                                            onClick={async () => {
                                                await handleSignOut();
                                                toast("Successfully Sign Out");
                                            }

                                            }>

                                            <div className='mx-auto'>

                                                <Link to='/register' className="bg-violet-600 md:w-36 px-4 py-[12px] font-semibold text-white rounded-xl"><span className='text-xs md:text-lg'>SIGN OUT</span></Link>

                                            </div>
                                        </button>


                                        :
                                        <div className='mx-auto'>
                                            <Link to='/login' className="bg-violet-600 px-4 py-[12px] font-semibold text-white rounded-xl ">LOG IN</Link>
                                        </div>
                                }

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <ToastContainer></ToastContainer> */}
        </>

    );
};

export default Navbar;