import React, { useEffect, useState } from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Link } from 'react-router';
import { TbCurrencyTaka } from 'react-icons/tb';
import SectionSlider from '../SectionSlider/SectionSlider';
import SectionProducts from '../Categories/SectionProducts/SectionProducts';

const FlashSale = () => {
    const [products] = useAllProducts();
    
    const flashSaleProducts = products.filter(product =>
       product.sectionTags.includes("Flash Sale")
    );

    console.log(flashSaleProducts);


    return (
        <div className='mt-6 bg-white p-6'>
           {/* Section heading  */}
           <SectionHeader title={"Flash Sale"} />

           {/* Section content  */}
          <SectionProducts products={flashSaleProducts}/>

           {/* with slider  */}
           {/* <SectionSlider products={flashSaleProducts}/> */}
        </div>
    );
};

export default FlashSale;