import React from 'react'
import network from '../assets/network.svg'
import tutorbg from '../assets/tutor-bg.svg'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Network = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
    <div className='flex flex-row pl-[10%] justify-center'>
        <div className='w-[600px] h-[536px]'>
            <div className='relative z-40'>
                <img src={tutorbg} alt='CodeHex'></img>
                <div className='absolute z-10 -top-0 right-24'>
                <MouseParallaxChild factorX={0.3} factorY={0.1}>
                <img src={network} alt='CodeHex' ></img>
                </MouseParallaxChild>
                </div>
            </div>
        </div>
        <div className='flex flex-col pl-10 pr-[10%] w-[60%] pb-16 justify-center'>
            <div>
                <div className='tutor__heading grad__right pb-4'>Network with successful developers</div>
                <div className='__body break-normal'>Our team of experienced professionals will work with you to identify and connect with key players in the tech industry. We offer personalized support and guidance to help you effectively network and make meaningful connections that can benefit your career.</div>
            </div>
            <div>

            </div>
        </div>
    </div>
    </MouseParallaxContainer>
  )
}

export default Network