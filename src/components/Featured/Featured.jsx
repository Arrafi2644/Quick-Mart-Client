import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import SectionProducts from '../Categories/SectionProducts/SectionProducts';
import SectionHeader from '../SectionHeader/SectionHeader';

const Featured = () => {
    const [products] = useAllProducts();
    
    const FeaturedProducts = products.filter(product =>
       product.sectionTags.includes("Featured")
    );


    return (
        <div className='mt-6 bg-white p-6'>
           {/* Section heading  */}
           <SectionHeader title={"Featured"} />

           {/* Section content  */}
          <SectionProducts products={FeaturedProducts}/>

           {/* with slider  */}
           {/* <SectionSlider products={flashSaleProducts}/> */}
        </div>
    );
};

export default Featured;