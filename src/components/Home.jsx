import React from 'react';
import Banner from './home/banner';
import Features from './home/Features';
import Categories from './home/Categories';
import SellingItems from './home/SellingItems';
import LimitedSale from './home/LimitedSale';
import ItemsLists from './home/ItemsLists';
import CustomerReview from './home/CustomerReview';
import LatestPost from './home/LatestPost';
import BrandLogos from './home/BrandLogos';
import SocialMediaProduct from './home/SocialMediaProduct';


const Home = () => {
  return (
    <div className='pb-[15rem]'>
      <Banner />
      <Features />
      <Categories />
      <SellingItems />
      <LimitedSale />
      <ItemsLists />
      <CustomerReview />
      <LatestPost />
      <BrandLogos />
      <SocialMediaProduct />


    </div>
  );
}

export default Home;
