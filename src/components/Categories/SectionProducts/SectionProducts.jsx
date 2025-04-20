import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router';

const SectionProducts = ({ products }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
            {
                products.slice(0, 6).map(product => <Link className='border border-gray-200 hover:shadow-md hover:shadow-gray-300'>
                    <img src={product?.images[0]} alt={product?.name} />
                    <div className='p-2'>
                        <h3 className='font-medium text-sm'>{product?.title}</h3>
                        <h3 className='flex items-center gap-0 font-medium text-lg'><TbCurrencyTaka />{parseInt(product?.price - product?.price * product.discount / 100)}</h3>
                        <h3 className='flex items-center'><del className='text-gray-400 flex items-center gap-0'><TbCurrencyTaka /> {product?.price}</del> -{product?.discount}%</h3>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default SectionProducts;