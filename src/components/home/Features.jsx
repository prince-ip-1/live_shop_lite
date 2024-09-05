import React from 'react';
import colored_cart from '../../assests/img/svg_icon/cart_color.svg';


const Features = () => {
  return (
    <div className='features'>

        <div className="container mx-auto">

            <div className="flex justify-between items-center">

                <div className="flex w-[20%] items-start">
                    <img src={colored_cart} className='mt-2 me-2' alt="Icons" />
                    <div className="flex flex-wrap ">
                        <h4 className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[6%]'>Free delivery</h4>
                        <p className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[1%]'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex w-[20%] items-start">
                    <img src={colored_cart} className='mt-2 me-2' alt="Icons" />
                    <div className="flex flex-wrap ">
                        <h4 className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[6%]'>Free delivery</h4>
                        <p className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[1%]'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex w-[20%] items-start">
                    <img src={colored_cart} className='mt-2 me-2' alt="Icons" />
                    <div className="flex flex-wrap ">
                        <h4 className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[6%]'>Free delivery</h4>
                        <p className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[1%]'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex w-[20%] items-start">
                    <img src={colored_cart} className='mt-2 me-2' alt="Icons" />
                    <div className="flex flex-wrap ">
                        <h4 className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[6%]'>Free delivery</h4>
                        <p className='font-[Outfit-ExtraLight] text-[22px] text-[#272727] tracking-[1%]'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Features