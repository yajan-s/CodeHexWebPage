import React from 'react'
import heroBg from '../assets/hero-bg.png'
import heroFg from '../assets/hero-fg.svg'
import btn from '../assets/btn.svg'

const Hero = () => {
  return (
    <>
    <div className='z-50 w-sreen h-screen flex flex-row pl-10 pr-10'>
        <div>
            <h1 className='main__heading pl-12 pr-[96px] z-50 w-[500px] break-normal pt-[130px]'>BECOME A CODING EXPERT</h1>
            <a href="#start-scroll">
              <button className='z-50 top -1 left-[15%] transform -translate-x-[-27%] -translate-y-[-150%]'>
                <img src={btn} alt='CodeHex'/>
              </button>
            </a>
        </div>
    <div className='grow flex invisible'></div>
      <div className='w-[245px] h-[269px] z-50 top -1 left-[65%] transform -translate-x-[-70%] -translate-y-[-100%]'>
        <img src={heroFg} alt='CodeHex' className='animate-hover'></img>
      </div>
      <img src={heroBg} alt='CodeHex' className='w-[712px] h-[646px] z-40 top -1 left-[80%] transform -translate-x-[0%] -translate-y-[0%]'></img>
    </div>
    {/* <div className='z-0 w-[578px] h-[50%] absolute blue__gradient bottom-0 left-0 top -1 left-1/8 transform -translate-x-1/2 -translate-y-[-20%]'></div>
    <div className='z-0 w-[578px] h-[50%] red__gradient absolute top -1 left-1/8 transform -translate-x-[-275%] -translate-y-[130%]'></div> */}
    </>
  )
}

export default Hero