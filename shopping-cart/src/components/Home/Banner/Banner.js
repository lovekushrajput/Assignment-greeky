import BannerImg from '../../../assets/banner-img.png'

function Banner() {
    return (
        // hero-banner
        <div className='py-10 px-0 relative bg-gradient-to-l from-[#4a00e0] to-[#a449f3] md:h-[calc(100vh-80px)]'>

            {/* content */}
            <div className='h-full flex justify-end my-0 mx-auto xs:flex-col-reverse  items-center md:flex-row md:max-w-[1200px]'>
                {/* text-content */}
                <div className='text-white text-center flex flex-col items-center md:absolute md:left-[50px] md:top-[50%] md:translate-y-[-50%]'>
                    <h1 className='text-[80px] mb-5 font-extrabold leading-none md:mb-20px md:text-[160px]'>SALES</h1>
                    <p className='text-sm max-w-xs leading-5 mb-5 md:max-w-lg md:text-lg md:leading-6 md:mb-10'>
                        lorem mount eum obcaecati deserunt voluptate, aut sed! lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
                    </p>

                    {/* ctas */}
                    <div className='flex justify-center gap-5 uppercase text-base font-medium text-center cursor-pointer'>
                        <div className='border-2 border-white py-[10px] px-5 hover:opacity-60'> Read More  </div>
                        <div className='bg-white text-black  py-[10px] px-5 hover:opacity-60'>Shop Now </div>
                    </div>
                </div>

                {/* img */}

                <img
                    className='relative xs:w-[200px] xs:mb-5 md:w-[400px] md:mt-3 md:mr-12  md:mb-0 z-10'
                    src={BannerImg}
                    alt="headphone"

                />

            </div>
        </div>
    )
}

export default Banner