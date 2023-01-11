import React from 'react'
import tutor from '../assets/tutor.svg'
import tutorbg from '../assets/tutor-bg.svg'

const Tutors = () => {
  return (
    <div className='flex flex-row pl-[10%] pt-20 justify-center'>
        <div className='w-[600px] h-[536px]'>
            <div className='relative z-40'>
                <img src={tutorbg} alt='CodeHex'></img>
                <div className='absolute z-10 inset-0 pl-20'>
                <img src={tutor} alt='CodeHex' className='animate-hoverInv'></img>
                </div>
            </div>
        </div>
        <div className='flex flex-col pl-10 pr-[10%] w-[60%]'>
            <div>
                <div className='tutor__heading grad__left pb-4'>Our Tutors</div>
                <div className='__body break-normal'>Our tutoring agency is proud to offer top-quality computer science tutoring from experienced University of Toronto students and alumni.</div>
            </div>
            <div className='pt-16'>
                <div className='tutor__heading grad__left pb-4'>Qualifications</div>
                <div className='__body break-normal'>
                    <ul className='list-disc list-inside'>
                        <li>Dean’s list scholars</li>
                        <li>Practical work experience in the tech industry</li>
                        <li>Years of teaching experience</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Tutors