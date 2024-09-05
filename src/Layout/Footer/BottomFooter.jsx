import React from 'react'

function BottomFooter() {
    return (
        <>

            <div className='border-t-[1px] border-[#c1c1c1]'>
                <div className='container mx-auto'>

                    <div className='flex justify-between items-center w-full '>
                        <div className='w-half flex items-center'>
                            <div className='w-half flex gap-2 items-center'>
                                <label >
                                    We ship with:
                                </label>
                                <div className='text-[2.5rem] text-[#D2D2D2] leading-[1rem] flex gap-1  items-center'>
                                    <iconify-icon icon="fa6-brands:dhl"></iconify-icon>
                                    <iconify-icon icon="arcticons:post"></iconify-icon>
                                </div>
                            </div>

                            <div className='w-half flex gap-2 items-center'>
                                <label >
                                    Payment options:
                                </label>
                                <div className='text-[1.2rem] text-[#D2D2D2] leading-[1rem] flex gap-1 items-center'>
                                    <iconify-icon icon="brandico:visa"></iconify-icon>
                                    <iconify-icon icon="brandico:mastercard"></iconify-icon>
                                    <iconify-icon icon="cib:cc-paypal"></iconify-icon>
                                </div>
                            </div>


                        </div>
                        <div className='w-half flex justify-end'>
                            <p>© Copyright 2024 ShopLite. Design by <a
                                className='hover:text-[#00814b] cursor-pointer underline underline-offset-2'
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();

                                }}
                            >
                                TemplatesJungle
                            </a>
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default BottomFooter