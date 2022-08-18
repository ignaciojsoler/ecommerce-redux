import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { logout } from '../features/user';
import { useNavigate } from 'react-router';
import { clearList } from '../features/cart/cartSlice';

const UserDropDownButton = ({ userName }) => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signOut = () => {
        dispatch(logout())
        dispatch(clearList())
        navigate('/')
    }

    return (
        <>
            <div class="relative inline-block text-left">
                <div className=''>
                    <button type="button" class="inline-flex items-center py-2 pr-4 pl-3  rounded   md:border-0  md:p-0 text-black hover:text-gray-600 md:hover:bg-transparent" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setIsNavOpen(!isNavOpen)}>
                        {userName}

                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                
                <div class={`${isNavOpen ? '' : 'hidden'} pl-3 flex flex-col items-start space-y-2
                md:absolute md:pt-3 md:items-end md:w-full md:bg-white md:pb-6
                `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <button className='text-gray-300'>
                        Profile
                    </button>
                    <button className='text-gray-300'>
                        Settings
                    </button>
                    <button className=' transition hover:text-gray-600' onClick={() => signOut()}>
                        Sign out
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserDropDownButton;