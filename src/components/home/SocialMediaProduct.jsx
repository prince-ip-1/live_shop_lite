import React from 'react'
import product from '../../assests/img/social_media_product/product.png'

function SocialMediaProduct() {
    return (
        <>
            <div className='container mx-auto'>

                <h1 className="text-3xl uppercase font-[Outfit-ExtraLight] mt-[140px] mb-10 text-[30px] tracking-[6%] flex justify-center items-center">
                    <span className='text-nowrap bg-[#fff] pe-4'>
                        instagram #shoplite
                    </span>
                </h1>


                <div className='flex gap-[1rem] items-center'>
                    <img
                        className='rounded-[0.35rem] w-full'
                        src={product}
                        alt=""
                    />
                    <img
                        className='rounded-[0.35rem] w-full'
                        src={product}
                        alt=""
                    />
                    <img
                        className='rounded-[0.35rem] w-full'
                        src={product}
                        alt=""
                    />
                    <img
                        className='rounded-[0.35rem] w-full'
                        src={product}
                        alt=""
                    />
                    <img
                        className='rounded-[0.35rem] w-full'
                        src={product}
                        alt=""
                    />
                    <img
                        className='rounded-[0.35rem] w-full'
                        src={product}
                        alt=""
                    />
                </div>

            </div>
        </>
    )
}

export default SocialMediaProduct