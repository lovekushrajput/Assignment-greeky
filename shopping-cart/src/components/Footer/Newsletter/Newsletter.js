import React from 'react'

import newsletterImg from '../../../assets/newsletter-bg.jpeg'

import {
    FaFacebookF
    , FaTwitter
    , FaInstagram
    , FaLinkedin
} from 'react-icons/fa'



function Newsletter() {

    const icons = [<FaFacebookF />, <FaTwitter />, <FaInstagram />, <FaLinkedin />]

    return (
        // newsleeter-section
        <div className={`w-full flex items-center h-[400px] bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${newsletterImg})` }}>

            {/* content */}
            <div className='w-[fit-content] flex flex-col items-center my-0 mx-auto text-center'>

                {/* small-test */}
                <span className='uppercase mb-4 text-[rgba(0,0,0,0.5)]'>Newsletter</span>

                {/* big-test */}
                <span className='mb-5 text-xl font-semibold uppercase py-0 px-7 md:text-2xl'>Sign up for latest updates and offres</span>


                {/* form */}
                <div className='flex gap-1 mb-3'>
                    <input className='w-[200px] h-10 border border-[rgba(0,0,0,0.5)] py-0 px-3 md:w-[300px] outline-none' type="text" placeholder='Email Address' />
                    <button className='uppercase outline-0 border-0 w-24 h-10 flex justify-center items-center text-base text-white bg-[#8e2de2] cursor-pointer md:w-[120px]'>Subscribe</button>
                </div>

                <div className='mb-5 text-sm text-[rgba(0,0,0,0.5)]'>
                    Will be used in accordance with our Privacy Policy
                </div>

                {/* social-icons */}
                <div className='flex gap-2'>
                    {icons.map((icon,i) => (
                        <div
                        key={i}
                        className='w-8 h-8 bg-[rgba(0,0,0,0.8)] rounded-full text-white flex cursor-pointer justify-center items-center'>
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Newsletter