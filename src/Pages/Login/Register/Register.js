import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Loading/Loading';
// import PageTitle from '../../Shared/PageTitle/PageTitle';
import OtherAccount from '../OtherAccountLogIn/OtherAccount';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }



    return (
        <div className='mb-20 font-serif'>
            {/* <PageTitle title="Register"></PageTitle> */}
            <h2 className="text-3xl py-10 font-bold text-violet-500" >Please Register</h2>

            <div className='md:flex md:px-6 justify-center items-center mx-auto'>
                <div className='md:w-1/2 mx-auto md:mx-0'>
                    <img className='w-4/5 mx-auto' src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=2000" alt="" />
                </div>
                <div className="w-5/6 md:w-1/2 lg:w-1/3 mx-auto md:mx-0 pt-16 pb-10 bg-green-100 rounded-box">


                    <form onSubmit={handleRegister}>
                        <div className="form-control w-5/6 md:w-2/3 mx-auto  ">
                            <label className="label">
                                <span className="label-text text-black font-semibold"><span><i className="fa-solid fa-person"></i></span> Your Name</span>
                            </label>
                            <input required name="name" type="text" placeholder="Type your Name" className="input text-gray-900 text-lg" />
                            <label className="label">
                                <span className="label-text text-black font-semibold"> <span><i className="fa-solid fa-envelope"></i></span>Email</span>
                            </label>
                            <input required type="email" name="email" placeholder="Type your email" className="input text-gray-900 text-lg" />
                            <label className="label">
                                <span className="label-text text-black font-semibold"><span><i className="fa-sharp fa-solid fa-key"></i> </span>Password</span>
                            </label>
                            <input required type="password" name="password" placeholder="Type your password" className="input text-gray-900 text-lg" />
                            <br />

                            <div>
                                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                                <label className={`pl-2 ${agree ? '' : 'text-red-600'}`} htmlFor="terms">Accept Repair House Terms and Conditions</label>


                                <input
                                    disabled={!agree}
                                    type="submit"
                                    value="REGISTER"
                                    className=" btn w-full mt-2 border-0 bg-violet-500 hover:bg-violet-700 text-white" />
                            </div>


                            <div className="text-red-500 pb-5">
                                {/* {error} */}
                            </div>
                            <h2>Have an Account? <NavLink to="/login" className="text-violet-500">Click to Login</NavLink></h2>
                            <br />

                            <OtherAccount></OtherAccount>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    );
};

export default Register;