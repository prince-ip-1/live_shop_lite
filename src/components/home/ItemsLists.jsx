import React from 'react';
import List from './InnerComponent/List';
import headphone from '../../assests/img/products/headphone.png';


const ItemsLists = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className='flex gap-[20px] w-100'>

          <List listTitle='Featured' productImg={headphone} />
          <List listTitle='Latest Items' productImg={headphone} />
          <List listTitle='best reviewed' productImg={headphone} />
          <List listTitle='On Sale' productImg={headphone} />

        </div>
      </div>
    </div >

  )
}

export default ItemsLists