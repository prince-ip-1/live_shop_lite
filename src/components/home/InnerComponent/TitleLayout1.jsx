import React from 'react'

function TitleLayout1(props) {
    return (

        <h1 className="text-3xl uppercase font-[Outfit-ExtraLight] mt-[140px] mb-8 text-[30px] tracking-[6%] flex items-center">
            <span className='text-nowrap bg-[#fff] pe-4'>
                {props.title}
            </span>
            <div className="bg-[url('/src/assests/img/svg_icon/slash_line.svg')] bg-center bg-contain bg-repeat-x w-[100%]">&nbsp;</div>
        </h1>
    )
}

export default TitleLayout1