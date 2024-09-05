import React from 'react'

function CustomerReviewCard(props) {

    const rating = parseFloat(props.customerRating);

    var getRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className='text-[#6eff46] text-[16px] bx bxs-star'></i>);
            } else {
                stars.push(<i key={i} className='text-[#6eff46] text-[16px] bx bx-star'></i>);
            }
        }
        return stars;

    }


    return (

        <>
            <div className='border-[#E0E0E0] border-[1px] rounded-[4px] p-[40px] mx-[10px]'>

                <p className='font-[Outfit-ExtraLight] text-[21px] tracking-[0.05rem] mb-[30px]'>“{props.customerReview}”</p>

                <div className='mb-[10px] flex items-center gap-[6px]'>

                    {getRating(rating)}

                </div>

                <div>
                    <h6 className='font-[Outfit-Regular] text-[21px] tracking-[1%]'>
                        {props.customerName}
                    </h6>
                </div>

            </div>
        </>
    )
}

export default CustomerReviewCard