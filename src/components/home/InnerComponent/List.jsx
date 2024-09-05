import React from 'react'




function List(props) {
    return (
        <>
            <div className='w-[50%]'>

                <div className='border-[1px] pt-[40px] p-[30px] rounded-[4px] border-[#E3E3E3]'>
                    <div className=''>
                        <h2 className="text-[30px] uppercase font-[Outfit-ExtraLight] font-light mb-8 text-[30px] tracking-[6%] ">
                            <span className='bg-[#fff] w-[18.7%]'>
                                {props.listTitle}
                            </span>
                            <div className="bg-[url('/src/assests/img/svg_icon/slash_line.svg')] bg-center bg-repeat-x">
                                &nbsp;
                            </div>
                        </h2>
                    </div>
                    <div className='pb-[20px] border-[#E3E3E3] border-b-[1px]'>
                        <div className='flex items-center'>
                            <img src={props.productImg} />
                            <div className='p-[15px]'>
                                <p className=''>
                                    Wireless Headset
                                </p>
                                <span>
                                    $500
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='pb-[20px] border-[#E3E3E3] border-b-[1px]'>
                        <div className='flex items-center'>
                            <img src={props.productImg} />
                            <div className='p-[15px]'>
                                <p className=''>
                                    Wireless Headset
                                </p>
                                <span>
                                    $500
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='pb-[20px] border-[#E3E3E3] '>
                        <div className='flex items-center'>
                            <img src={props.productImg} />
                            <div className='p-[15px]'>
                                <p className=''>
                                    Wireless Headset
                                </p>
                                <span>
                                    $500
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default List