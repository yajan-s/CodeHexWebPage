import React from 'react'
import logo from '../assets/logo.svg';
import callButton from '../assets/call.svg'

const Navbar = () => {
    return (
        <div className='flex z-50 pt-12 pr-20 pl-20'>
            <img src={logo} alt='CodeHex' className=''/>
            <div className='grow flex invisible'></div>
            <div className='flex flex-col'>
                <a href="tel:+16478943585">
                    <img className='' src={callButton} alt="CallUs"/>
                </a>
            <div className='grow flex invisible'/>
            </div>
        </div>
    );
}

export default Navbar