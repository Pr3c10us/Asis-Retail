import React from 'react'
import Rotation from "../assets/icons/rotation.svg"
import Ace from "../assets/icons/aceRotation.svg"
const Rotational = () => {
  return (
    <div className='z-0'>
        <img src={Ace} alt='Ace' className='left-0  top-[35%]  fixed w-[5%]   max-lg:hidden max-md:block max-md:top-[27%] max-sm:hidden'/>
        <img src={Rotation} alt='rotation' className='animate-spin  slow-spin fixed -left-1/4 w-[45%] top-0 max-md:w-[70%]  max-sm:w-full max-sm:top-[5%] max-md:-left-[45%] max-sm:-left-[50%]'/>
        <img src={Rotation} alt='rotation' className='animate-spin  slow-spin fixed -right-1/4 w-[45%] -bottom-[65%] max-md:-bottom-[45%] max-md:w-[70%] max-md:-right-[40%] max-sm:-bottom-[30%]' />
    </div>
  )
}

export default Rotational