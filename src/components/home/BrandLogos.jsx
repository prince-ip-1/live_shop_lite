import React from 'react'
import BrandLogo from '../../assests/img/brand_logos/techlight.png'

function BrandLogos() {
    return (
        <div className='brand_logo mb-[140px    ] py-[105px] border-t-[1px] border-b-[1px] border-[#C1C1C1]'>
            <div className="container mx-auto">
                <div className='flex gap-[5rem]'>

                    <img
                        className='w-full'
                        src={BrandLogo}
                        alt=""
                    />
                    <img
                        className='w-full'
                        src={BrandLogo}
                        alt=""
                    />
                    <img
                        className='w-full'
                        src={BrandLogo}
                        alt=""
                    />
                    <img
                        className='w-full'
                        src={BrandLogo}
                        alt=""
                    />
                    <img
                        className='w-full'
                        src={BrandLogo}
                        alt=""
                    />

                </div>
            </div>
        </div>
    )
}

export default BrandLogos