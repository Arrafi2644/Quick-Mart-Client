import React from 'react';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';


const Home = () => {
    return (
        <div className='mt-4'>
            <Banner/>
            <Categories/>
        </div>
    );
};

export default Home;