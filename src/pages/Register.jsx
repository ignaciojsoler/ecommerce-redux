import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../firebase-config';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Swal from 'sweetalert2'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const navigate = useNavigate()

    //Register new user
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "The passwords entered do not match".toUpperCase(),
                showConfirmButton: false
              })
        } else {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name
                    })
                    console.log(user);
                    
                    Swal.fire({
                        title: 'Good job!',
                        text: "You have registered correctly",
                        icon: 'success',
                        showConfirmButton: false
                      })
                    navigate('/login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: errorCode.slice(5).replaceAll('-', ' ').toUpperCase(),
                        showConfirmButton: false
                      })
                });
        }
    }

    return (
        <div className='absolute w-full h-full max-w-screen-xl'>
            <div className=" mx-auto bg-white min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                    <h1 className='text-center text-6xl'>Rêverie Shop</h1>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-black">Register your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px" />
                        <div>
                            <label htmlFor="full-name" className="sr-only">Full name</label>
                            <input id="full-name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Full name" value={name}
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Email address" value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black  focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="sr-only">Confirm password</label>
                            <input id="confirm-password" name="confirm-password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Confirm password" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} />
                        </div>


                        <div className="flex items-center justify-end">

                            <div className="text-sm">
                                <Link to="/login" className="font-semibold text-black hover:text-black"> Already have an account? </Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border-2 border-black text-sm font-medium rounded-md text-white bg-black transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                    <svg className="h-5 w-5 text-white transition group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;