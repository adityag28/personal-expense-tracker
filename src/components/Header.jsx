import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { toggleNav } from '../store/navSlice';



const Header = () => {
    const dispatch = useDispatch()

    const toggleNavHandler = () => {
        dispatch(toggleNav())
    }

    return (
        <div className='flex justify-between  text-blue-600  p-2'>
            <div >
                <RxHamburgerMenu className='text-2xl cursor-pointer' onClick={() => toggleNavHandler()} />
            </div>
        </div>
    )
}

export default Header
