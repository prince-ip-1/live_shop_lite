import React from 'react'

function Item(props) {


    return (

        <div className="flex items-center mx-[10px] w-[100%] flex-col p-8 border-[2px] border-[#deffd5] border-solid rounded-[5px]">

            <img src={props.productImg} alt="" />
            <p className="text-[21px] text-[#272727] font-[Outfit-Light">{props.productName}</p>
            {
                props.productPrice && (
                    <p className="text-[21px] text-[#00814b] font-[Outfit-Light]">{props.productPrice}</p>
                )
            }

        </div>

    )
}

export default Item