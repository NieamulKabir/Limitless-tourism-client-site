import React, { useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OtherAccount from '../OtherAccountLogIn/OtherAccount';
// import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit =async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        toast("Successfully Login")
    }

    // const navigateRegister = event => {
    //     navigate('/register');
    // }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }



    return (
        <div className=' py-5 mb-20 font-serif'>
            {/* <PageTitle title="Log In"></PageTitle>
            <PageTitle title="Log In"></PageTitle> */}
            <h2 className="text-3xl py-10 font-bold text-violet-500">Please Login</h2>
            <div className='md:flex  md:px-6 w-11/12 justify-center items-center mx-auto'>
                <div className='mx-auto md:mx-0 md:w-[45%] lg:w-1/2'>
                    <img className='' src="https://asitive.com/wp-content/uploads/2022/06/istockphoto-1281150061-612x612-1.jpg" alt="" />
                </div>
                <div className="w-5/6 md:w-[55%] lg:w-1/3 py-16 mx-auto md:mx-0 bg-green-100 rounded-box ">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-5/6 md:w-2/3 mx-auto ">
                            <label className="label">
                                <span className="label-text text-black font-semibold">
                                   <span><i className="fa-solid fa-envelope"></i></span> Email</span>
                            </label>
                            <input required ref={emailRef} type="email" placeholder="Type your email" className="input text-gray-900 text-lg" />
                            <label className="label">
                                <span className="label-text  text-black font-semibold">
                                   <span><i className="fa-sharp fa-solid fa-key"></i> </span> Password</span>
                            </label>
                            <input required ref={passwordRef} type="password" placeholder="Type your password" className="input text-gray-900 text-lg" />
                            <br />
                            <input type="submit" value="LOGIN" className=" btn bg-violet-500 hover:bg-violet-700 text-white border-none" />
                          
                            <div className="text-red-500 pb-5">
                                {errorElement}
                            </div>
                            <div>
                                {/* {success} */}
                            </div>
                            <h2><span className='text-black font-semibold'>Need Account?</span> <NavLink className="text-violet-600 font-semibold" to="/register">Click to Register</NavLink></h2>
                            <br />

                            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>


                        <OtherAccount></OtherAccount>

                                <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;