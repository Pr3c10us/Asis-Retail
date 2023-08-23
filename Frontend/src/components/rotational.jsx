import React from 'react'
import Rotation from "../assets/icons/rotation.svg"
import Ace from "../assets/icons/aceRotation.svg"
const Rotational = () => {
  return (
    <div className='z-0'>
        <img src={Ace} alt='Ace' className='left-0  top-1/4 mt-16 fixed w-[5%]'/>
        <img src={Rotation} alt='rotation' className='animate-spin  slow-spin fixed -left-1/4 w-[45%] top-0'/>
    </div>
  )
}

export default Rotational