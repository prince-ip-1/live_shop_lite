import React from 'react';
import SaleProduct from '../../assests/img/banner/cam.png';


const LimitedSale = () => {
    return (

        <div className="limited_sale bg-[#e6ffdf] mb-[140px]">

            <div className="container mx-auto">

                <div className="flex items-center">

                    <div className='w-[50%]'>
                        <img src={SaleProduct} alt="" />
                    </div>
                    <div className='w-[50%] p-2'>
                        <h2 className="font-[Outfit-ExtraLight] text-[51px]">30% Discount on apple collection</h2>
                        <div className="font-[Outfit-ExtraLight] text-[21px] mb-6 flex items-center">

                            <div className="flex flex-col">
                                <span className='text-[51px] font-[Outfit-Regular] tracking-[6%]'>21</span>
                                <span className='text-[21px] font-[Outfit-ExtraLight'>Days</span>
                            </div>

                            <div className='text-[51px] text-[#00814b] mx-[15px]'>
                                :
                            </div>

                            <div className="flex flex-col">
                                <span className='text-[51px] font-[Outfit-Regular] tracking-[6%]'>22</span>
                                <span className='text-[21px] font-[Outfit-ExtraLight'>Hrs</span>
                            </div>

                            <div className='text-[51px] text-[#00814b] mx-[15px]'>
                                :
                            </div>

                            <div className="flex flex-col">
                                <span className='text-[51px] font-[Outfit-Regular] tracking-[6%]'>19</span>
                                <span className='text-[21px] font-[Outfit-ExtraLight'>Min</span>
                            </div>

                            <div className='text-[51px] text-[#00814b] mx-[15px]'>
                                :
                            </div>

                            <div className="flex flex-col">
                                <span className='text-[51px] font-[Outfit-Regular] tracking-[6%]'>30</span>
                                <span className='text-[21px] font-[Outfit-ExtraLight'>Sec</span>
                            </div>


                        </div>
                        <div className="block">
                            <a href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="bg-[#00814b] rounded-[5px] p-5 font-[Outfit-ExtraLight] tracking-[3px] text-white flex w-fit"
                            >Shop Collection</a>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default LimitedSale