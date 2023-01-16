import React from 'react'
import tutor from '../assets/tutor.svg'
import tutorbg from '../assets/tutor-bg.svg'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Tutors = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{
        overflow: 'visible'
      }}>
    <div className='flex flex-row pl-[10%] pt-20 justify-center'>
        <div className='w-[600px] h-[536px]'>
            <div className='relative z-40 overflow-hidden'>
                <img src={tutorbg} alt='CodeHex' className='hidden1'></img>
                <div className='absolute z-10 inset-0 pl-20'>
                    <MouseParallaxChild factorX={0.3} factorY={0.1}>
                        <img src={tutor} alt='CodeHex' className='hidden1 hidden4'></img>
                    </MouseParallaxChild>
                </div>
            </div>
        </div>
        <div className='flex flex-col pl-10 pr-[10%] w-[60%] overflow-hidden'>
            <div>
                <div className='hidden1 tutor__heading grad__left pb-4'>Our Tutors</div>
                <div className='hidden1 hidden2 __body break-normal'>Our tutoring agency is proud to offer top-quality computer science tutoring from experienced University of Toronto students and alumni.</div>
            </div>
            <div className='pt-16'>
                <div className='hidden1 tutor__heading grad__left pb-4'>Qualifications</div>
                <div className='__body break-normal'>
                    <ul className='list-disc list-inside'>
                        <li className='hidden1 hidden2 delay-75'>Dean’s list scholars</li>
                        <li className='hidden1 hidden3 delay-100'>Practical work experience in the tech industry</li>
                        <li className='hidden1 hidden4 delay-150'>Years of teaching experience</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
    </MouseParallaxContainer>
  )
}

export default Tutors