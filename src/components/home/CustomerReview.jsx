import React from 'react'
import Slider from "react-slick";
import camera from '../../assests/img/banner/cam.png'
import ArrowImg from '../../assests/img/svg_icon/alt-arrow.svg';
import TitleLayout1 from './InnerComponent/TitleLayout1';
import CustomerReviewCard from './InnerComponent/CustomerReviewCard';

const CustomerReview = () => {


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
        slidesToShow: 3,
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
        <div className='selling_items'>

            <div className="container mx-auto">

                <TitleLayout1 title='Customers reviews' />


                <div className="p-4">

                    <Slider {...sellingSetting} >
                        <div className="px-['10px']">
                            <CustomerReviewCard
                                customerReview="I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!"
                                customerRating="4.5"
                                customerName="Emma Chamberlin"
                            />
                        </div>
                        <div className="px-['10px']">
                            <CustomerReviewCard
                                customerReview="This tech store is my go-to for all things tech! Whether it's a new smartphone, accessories, or even troubleshooting advice, they've always got me covered. The staff is friendly, and their expertise is unmatched. Trust me; you won't regret shopping here!"
                                customerRating="4"
                                customerName="Thomas John"
                            />
                        </div>
                        <div className="px-['10px']">
                            <CustomerReviewCard
                                customerReview="I recently purchased a smartwatch from this tech store, and I'm absolutely thrilled with my purchase! Not only did they have an extensive selection to choose from, but their team helped me find the perfect fit for my lifestyle."
                                customerRating="3"
                                customerName="Kevin Bryan"
                            />
                        </div>

                    </Slider>


                </div>

            </div>

        </div>
    )
}

export default CustomerReview