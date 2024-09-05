
import React from "react";
import Slider from "react-slick";
import BannerPrduct from '../../assests/img/banner/cam.png';
import ArrowImg from '../../assests/img/svg_icon/alt-arrow.svg';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="banner-btn banner-next ms-5 p-2 px-3 flex items-center justify-center border-[#6eff46] border-[1px] rounded-[5%] relative"
            onClick={onClick}
        >
            <img src={ArrowImg} className="w-[5vw]" alt="Icon" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="banner-btn banner-prev me-5 p-2 px-3 flex items-center justify-center border-[#6eff46] border-[1px] rounded-[5%] relative"
            onClick={onClick}
        >
            <img src={ArrowImg} className="w-[5vw] rotate-180" alt="Icon" />
        </div>
    );
}






const Banner = () => {
    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    };
    return (
        <div className="banner bg-[#e6ffdf] mb-[10.3852vw]">
            <div className="container mx-auto">
                <Slider {...settings}>
                    <div>
                        <div className="flex items-center justify-between w-full">
                            <div className="p-2">
                                <h2 className="font-[Outfit-ExtraLight] text-[51px]">GoPro hero9 Black</h2>
                                <h5 className="font-[Outfit-ExtraLight] text-[21px] mb-6">Limited stocks available. Grab it now!</h5>
                                <div className="block">
                                    <a href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            
                                        }}
                                        className="bg-[#00814b] rounded-[5px] p-5 font-[Outfit-ExtraLight] tracking-[3px] text-white flex w-fit"
                                    >Shop Collection</a>
                                </div>

                            </div>
                            <div className="bg-[url('/src/assests/img/banner/bannerBg.svg')] bg-contain bg-start bg-no-repeat w-[50%]">
                                <img src={BannerPrduct} alt="Product" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between w-full">
                            <div className="p-2">
                                <h2 className="font-[Outfit-ExtraLight] text-[51px]">GoPro hero9 Black</h2>
                                <h5 className="font-[Outfit-ExtraLight] text-[21px] mb-6">Limited stocks available. Grab it now!</h5>

                                <div className="block">
                                    <a href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            
                                        }}
                                        className="bg-[#00814b] rounded-[5px] p-5 font-[Outfit-ExtraLight] tracking-[3px] text-white flex w-fit"
                                    >Shop Collection</a>
                                </div>
                            </div>
                            <div className="bg-[url('/src/assests/img/banner/bannerBg.svg')] bg-contain bg-start bg-no-repeat w-[50%]">
                                <img src={BannerPrduct} alt="Product" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>

    )
}

export default Banner


