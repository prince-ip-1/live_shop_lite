import React from 'react'
import { Link } from "react-router-dom"
import BottomFooter from './BottomFooter';

function footer() {
    return (
        <>
            <div className="border-t-[1px] pt-5 pb-[80px] border-[#c1c1c1]">
                <div className="container mx-auto">
                    <div className='flex gap-[2rem]'>
                        <div className="w-[40%]">
                            <Link className="text-[31px] uppercase tracking-[4.5px]" to="/">
                                <div className='mb-1'>

                                    <span className="font-[Outfit-Medium]">Shop</span><span className="font-[Outfit-ExtraLight]">Lite</span>
                                </div>
                            </Link>
                            <div className='max-w-[350px]'>
                                <p className='mb-2 font-[Outfit-ExtraLight] text-[21px] tracking-[0.03rem]'>
                                    Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
                                </p>
                            </div>
                            <div className='text-[#D2D2D2] text-[1.8rem] flex gap-[1rem]'>
                                <a
                                    className='hover:text-[#00814b] cursor-pointer'
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                    }}
                                >
                                    <i class='bx bxl-facebook'></i>
                                </a>
                                <a
                                    className='hover:text-[#00814b] cursor-pointer'
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                    }}
                                >
                                    <i class='bx bxl-instagram' ></i>
                                </a>
                                <a
                                    className='hover:text-[#00814b] cursor-pointer'
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                    }}
                                >
                                    <i class='bx bxl-twitter' ></i>
                                </a>
                                <a
                                    className='hover:text-[#00814b] cursor-pointer'
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                    }}
                                >
                                    <i class='bx bxl-linkedin' ></i>
                                </a>
                                <a
                                    className='hover:text-[#00814b] cursor-pointer'
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();

                                    }}
                                >
                                    <i class='bx bxl-youtube' ></i>
                                </a>
                            </div>
                        </div>
                        <div className='w-[20%]'>
                            <h2 className='font-[Outfit-ExtraLight] text-[35px]'>Quick links</h2>
                            <div>
                                <div className="flex flex-col gap-2 font-[Outfit-Light] text-[1.1rem] tracking-[0.08rem]">
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Home
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        About
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Shop
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Blogs
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Contact
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className='w-[25%]'>
                            <h2 className='font-[Outfit-ExtraLight] text-[35px]'>Help & info</h2>
                            <div>
                                <div className="flex flex-col gap-2 font-[Outfit-Light] text-[1.1rem] tracking-[0.08rem]">
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Track Your Order
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Returns policies
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Shipping + Delivery
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        className='hover:text-[#00814b] cursor-pointer'
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Faqs
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className='w-[15%]'>
                            <h2 className='font-[Outfit-ExtraLight] text-[35px]'>Contact us</h2>
                            <div>
                                <div className="flex flex-col gap-2 font-[Outfit-Light] text-[1.1rem] tracking-[0.08rem]">
                                    <p className='mb-2'>
                                        Do you have any queries or suggestions?

                                        <a
                                            className='hover:text-[#00814b] cursor-pointer underline underline-offset-2'
                                            href="mailto:info@gmail.com"
                                            onClick={(e) => {
                                                e.preventDefault();

                                            }}
                                        >
                                            info@gmail.com
                                        </a>
                                    </p>
                                    <p className='mb-2'>
                                        If you need support? Just give us a call.

                                        <a
                                            className='hover:text-[#00814b] cursor-pointer underline underline-offset-2'
                                            href="tel:+5511122233344"
                                            onClick={(e) => {
                                                e.preventDefault();

                                            }}
                                        >
                                            +55 111 222 333 44
                                        </a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>

            <BottomFooter />


        </>
    )
}

export default footer