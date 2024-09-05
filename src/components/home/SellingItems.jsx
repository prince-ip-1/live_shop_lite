import React from 'react'
import Slider from "react-slick";
import camera from '../../assests/img/banner/cam.png'
import ArrowImg from '../../assests/img/svg_icon/alt-arrow.svg';
import TitleLayout1 from './InnerComponent/TitleLayout1';
import Item from './InnerComponent/Item';

const SellingItems = () => {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className="banner-btn banner-next ms-5 p-2 px-3 flex items-center justify-center border-[#6eff46] border-[1px] rounded-[4px] relative"
                onClick={onClick}
            >
                <img src={ArrowImg} className="w-[2vw]" alt="Icon" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className="banner-btn banner-prev me-5 p-2 px-3 flex items-center justify-center border-[#6eff46] border-[1px] rounded-[4px] relative"
                onClick={onClick}
            >
                <img src={ArrowImg} className="w-[2vw] rotate-180" alt="Icon" />
            </div>
        );
    }



    const sellingSetting = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div className='selling_items pb-[50px] mb-[100px]'>

            <div className="container mx-auto">

                <TitleLayout1 title='Best selling items' />


                <div className="p-4">

                    <Slider {...sellingSetting} >

                        <div className='px-[10px]'>
                            <Item productName='fashion' productPrice='$120' productImg={camera} />
                        </div>
                        <div className='px-[10px]'>
                            <Item productName='fashion' productPrice='$120' productImg={camera} />
                        </div>
                        <div className='px-[10px]'>
                            <Item productName='fashion' productPrice='$120' productImg={camera} />
                        </div>
                        <div className='px-[10px]'>
                            <Item productName='fashion' productPrice='$120' productImg={camera} />
                        </div>
                        <div className='px-[10px]'>
                            <Item productName='fashion' productPrice='$120' productImg={camera} />
                        </div>
                        <div className='px-[10px]'>
                            <Item productName='fashion' productPrice='$120' productImg={camera} />
                        </div>
                        <div className='px-[10px]'>
                            <Item productName='fashion' productPrice='$120' productImg={camera} />
                        </div>

                    </Slider>


                </div>

            </div>

        </div>
    )
}

export default SellingItems