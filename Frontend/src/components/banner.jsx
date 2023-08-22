import React from 'react';
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";

const Banner = () => {
    return (
        <section className='global w-full bg-[#17A500] h-12 flex justify-center mt-5'>
            <article className="flex flex-col justify-center items-center text-xs font-medium text-[#FFFEF5] relative">
                {/* Banner content */}
                <p className="bg-[#17A500]">
                    Members: Free Shipping On Orders above 50,000 NGN
                </p>
                <p className='bg-[#17A500] underline cursor-pointer'>Join Now</p>
                {/* Navigation arrows */}
                <img src={left} alt="left" className='absolute -left-8 cursor-pointer' />
                <img src={right} alt="right" className='absolute -right-8 cursor-pointer' />
            </article>
        </section>
    );
};

export default Banner;
