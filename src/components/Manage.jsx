import React from 'react'
import manage from '../assets/manage.svg'
import tutorbg from '../assets/tutor-bg.svg'

const Manage = () => {
  return (
    <div className='flex flex-row pl-[5%] pt-8 justify-center'>
        <div className='flex flex-col pr-10 pl-[5%] w-[50%]'>
            <div>
                <div className='tutor__heading grad__left pb-4'>Get career advice from professionals</div>
                <div className='__body break-normal'>In today's digital age, having a strong online presence is more important than ever. Our service can help you stand out in a crowded job market and give you a competitive edge in your career.</div>
                <div className='__body break-normal pt-5'>Our team of experts will work with you to develop a comprehensive online strategy that showcases your skills and accomplishments to potential employers and clients. From optimizing your LinkedIn profile to building a personal website, we have the tools and expertise to help you make a lasting impression online.</div>
            </div>
        </div>

        <div className='w-[600px] h-[536px] pr-20'>
            <div className='relative z-40'>
                <img src={tutorbg} alt='CodeHex'></img>
                <div className='absolute z-10 -top-16 right-24'>
                    <img src={manage} alt='CodeHex'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manage