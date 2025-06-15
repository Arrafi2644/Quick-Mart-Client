import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import SectionProducts from '../Categories/SectionProducts/SectionProducts';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionSlider from '../SectionSlider/SectionSlider';

const Featured = () => {
    const [products] = useAllProducts();

    const featuredProducts = products.filter(product =>
        product?.featured === true
    );

    return (
        <div className='mt-6 bg-white py-6'>
            {/* Section heading  */}
            {/* <SectionHeader title={"Featured"} /> */}
            <h2 className='text-lg md:text-xl px-1 md:px-6 pb-4 font-semibold '>Featured</h2>

            {/* Section content  */}
            {/* <SectionProducts products={featuredProducts}/> */}

            {/* with slider  */}
            <SectionSlider products={featuredProducts} />
        </div>
    );
};

export default Featured;