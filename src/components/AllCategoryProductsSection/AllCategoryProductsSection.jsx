import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import SectionHeader from '../SectionHeader/SectionHeader';
import useAllProducts from '../../hooks/useAllProducts';

const AllCategoryProductsSection = () => {
    const [categories, setCategories] = useState([])
    const [products] = useAllProducts([])

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                categories.map(category => <div key={category.name} className='bg-white p-6'>
                    {/* Section heading  */}
                    <Link><SectionHeader title={category?.name} /></Link>

                    {/* Section content  */}
                    <div className='grid grid-cols-2 gap-2'>
                        {
                           (products.filter(product => product.category === category.name)).slice(0, 4).map(product => <Link key={product?._id} className='border border-gray-300 p-4' >
                           <img className='h-32 w-full object-cover' src={product.images[0]} alt="" />
                           <h3 className='font-medium mt-2'>{product.productName}</h3>
                           </Link>) 
                        }
                    </div>

                </div>)
            }


        </div>
    );
};

export default AllCategoryProductsSection;