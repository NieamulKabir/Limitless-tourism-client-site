import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='my-10 font-serif'>

            <div className="card w-96 bg-orange-100 mx-auto shadow-xl">
                <div className="card-body mx-auto text-center">
                    <h2 className="text-2xl font-bold text-violet-600">Email Verification</h2>
                    <p className='text-red-500'>Your Email is not verified</p>
                    <p>Please verify your Email address</p>
                    <div className="card-actions justify-center">
                        <button
                            className='bg-violet-400 px-3 py-2 rounded-2xl text-white font-semibold'
                            onClick={async () => {
                                await sendEmailVerification();
                                toast('Sent email');
                            }}
                        >
                            Verify email
                        </button>
                        <ToastContainer> </ToastContainer>
                    </div>
                </div>
            </div>



        </div>
    }
    return children;
};

export default RequireAuth;