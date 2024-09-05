import React from 'react';

function Post(props) {
    return (
        <>

            <div className='relative w-full'>
                <div className='absolute top-2 left-2 flex flex-wrap gap-2'>
                    {
                        props.postCategory && props.postCategory.map(cat => (
                            <span className='py-[.4rem] px-[.6rem] text-[#fff] bg-[#00814b] rounded-[0.25rem] uppercase'>
                                {cat}
                            </span>
                        )
                        )
                    }
                </div>

                <div>
                    <div className='max-h-[240px] h-full flex justify-start'>

                        <img src={props.postImg} alt="" className=' object-cover' />

                    </div>

                    <div>
                        <h3 className='font-[Outfit-ExtraLight] text-[30px] tracking-[0.1rem] mb-2'>
                            {props.postTitle}
                        </h3>

                        <p className='line-clamp-3 mb-8 font-[Outfit-ExtraLight] text-[25px] tracking-[0.07rem]'>
                            {props.postExcerpt}
                        </p>

                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();

                            }}
                            className="font-[Outfit-ExtraLight] underline underline-offset-2 text-[21px] tracking-[0.02rem] "
                        >Read More</a>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Post