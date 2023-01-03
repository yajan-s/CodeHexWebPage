import React from 'react'
import logo from '../assets/logo.svg';
import callButton from '../assets/call.svg'

const Navbar = () => {
    return (
        <div className='flex z-50'>
            <img src={logo} alt='CodeHex' className=' pl-20 pt-14'/>
            <div className='grow flex invisible'></div>
            <a href="tel:+16478943585">
            <img className=' pt-12 pr-20 py-15' src={callButton} alt="CallUs"/>
            </a>
        </div>
    );
}

export default Navbar