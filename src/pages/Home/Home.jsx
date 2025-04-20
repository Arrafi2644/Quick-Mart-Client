import React from 'react';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import FlashSale from '../../components/FlashSale/FlashSale';
import Featured from '../../components/Featured/Featured';


const Home = () => {
    return (
        <div className='mt-4'>
            <Banner/>
            <Categories/>
            <FlashSale/>
            <Featured/>
        </div>
    );
};

export default Home;