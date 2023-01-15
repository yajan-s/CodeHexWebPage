import React from 'react'
import advice from '../assets/advice.svg'
import tutorbg from '../assets/tutor-bg.svg'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


const Advice = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
    <div className='flex flex-row pl-[5%] pt-10 justify-center'>
        <div className='flex flex-col pr-10 pl-[5%] w-[50%]'>
            <div>
                <div className='tutor__heading grad__left pb-4'>Get career advice from professionals</div>
                <div className='__body break-normal'>Our computer science career advice service is designed to help you navigate the often-complex world of tech job searching and succeed in your career. Whether you're just starting out or are looking to take the next step in your career, our team can provide the support and guidance you need to achieve your goals.</div>
                <div className='__body break-normal pt-5'>
                    <ul className='list-disc list-inside'>
                        <li>Dean’s list scholars</li>
                        <li>Practical work experience in the tech industry</li>
                        <li>Years of teaching experience</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='w-[600px] h-[536px] pr-20'>
            <div className='relative z-40'>
                <img src={tutorbg} alt='CodeHex'></img>
                <div className='absolute z-10 -top-2 right-24'>
                <MouseParallaxChild factorX={0.3} factorY={0.1}>
                    <img src={advice} alt='CodeHex'></img>
                </MouseParallaxChild>
                </div>
            </div>
        </div>
    </div>
    </MouseParallaxContainer>
  )
}

export default Advice