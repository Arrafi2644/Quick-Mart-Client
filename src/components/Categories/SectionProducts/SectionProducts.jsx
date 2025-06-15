import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router';

const SectionProducts = ({ products }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {
                products.map(product => <Link key={product._id} to={`/products/${product._id}`} className='border border-gray-200 hover:shadow-md bg-white hover:shadow-gray-300'>
                    <img className='h-44 md:48 object-cover w-full mt-2' src={product?.images[0]} alt={product?.name} />
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