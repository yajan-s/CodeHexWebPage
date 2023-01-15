import React from 'react'
import assignment from '../assets/assignment.svg'
import tutorbg from '../assets/tutor-bg.svg'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";



const Assignment = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
    <div className='flex flex-row pl-[10%] justify-center'>
        <div className='w-[600px] h-[536px]'>
            <div className='relative z-40'>
                <img src={tutorbg} alt='CodeHex'></img>
                <div className='absolute z-10 -top-0 right-24'>
                <MouseParallaxChild factorX={0.3} factorY={0.1}>
                <img src={assignment} alt='CodeHex' ></img>
                </MouseParallaxChild>
                </div>
            </div>
        </div>
        <div className='flex flex-col pl-10 pr-[10%] w-[60%] pt-16'>
            <div>
                <div className='tutor__heading grad__right pb-4'>Assignment reviews</div>
                <div className='__body break-normal'>Our computer science assignment review service is designed to provide expert guidance and support to help you understand complex concepts and complete your assignments to the best of your ability. Our tutors are highly qualified and have a deep understanding of computer science, so you can trust that you're getting top-quality support.</div>
            </div>
            <div>

            </div>
        </div>
    </div>
    </MouseParallaxContainer>
  )
}

export default Assignment