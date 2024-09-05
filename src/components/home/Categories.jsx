import React from 'react';
import camera from '../../assests/img/banner/cam.png'
import TitleLayout1 from './InnerComponent/TitleLayout1';
import Item from './InnerComponent/Item';

const Categories = () => {
    return (
        <div className='categories'>

            <div className="container mx-auto">

                <TitleLayout1 title='Categories' />

                <div className="flex  item-center justify-between">

                    <Item productName='fashion' productImg={camera} />
                    <Item productName='fashion' productImg={camera} />
                    <Item productName='fashion' productImg={camera} />
                    <Item productName='fashion' productImg={camera} />
                    <Item productName='fashion' productImg={camera} />
                    <Item productName='fashion' productImg={camera} />


                </div>

            </div>

        </div>
    )
}

export default Categories