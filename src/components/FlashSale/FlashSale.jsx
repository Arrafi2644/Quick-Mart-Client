import React, { useEffect, useState } from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Link } from 'react-router';
import { TbCurrencyTaka } from 'react-icons/tb';
import SectionSlider from '../SectionSlider/SectionSlider';
import SectionProducts from '../Categories/SectionProducts/SectionProducts';

const FlashSale = () => {
    const [products, isLoading, refetch] = useAllProducts();
    
    const flashSaleProducts = products.filter(product =>
       product?.flash_sale === true
    );

    console.log("flash sales products ", flashSaleProducts);

    return (
        <div className='mt-6 bg-white py-6'>
           {/* Section heading  */}
           {/* <SectionHeader title={"Flash Sale"} /> */}
           <h2 className='text-lg md:text-xl px-6 pb-4 font-semibold '>Flash Sale</h2>


           {/* Section content  */}
          {/* <SectionProducts products={flashSaleProducts}/> */}

           {/* with slider  */}
           <SectionSlider products={flashSaleProducts}/>
        </div>
    );
};

export default FlashSale;