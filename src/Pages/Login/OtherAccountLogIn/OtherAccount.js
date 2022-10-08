import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../../Loading/Loading';

const OtherAccount = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            {errorElement}
            <button
                onClick={async () => {
                    await signInWithGoogle();
                    toast('Successfully log in With Google')
                }}
                className=" btn bg-gray-50 hover:bg-gray-200 text-gray-500 border-none">
                <i className="fab fa-google text-xl text-violet-500 pr-2"></i>
                SignIn With Google
            </button>
            <ToastContainer></ToastContainer>
            <button
                onClick={async () => {
                    await signInWithGithub();
                    toast('Successfully log in With GitHub')
                }}
                className="mt-2 btn bg-gray-50 hover:bg-gray-200 text-gray-500 border-none">
                <i className="fa-brands fa-github text-xl text-violet-500 pr-2"></i>
                SignIn With Github
                <ToastContainer></ToastContainer>
            </button>
        </div>
    );
};

export default OtherAccount;