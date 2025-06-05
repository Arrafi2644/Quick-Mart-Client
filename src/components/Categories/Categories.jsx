import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useCategories from '../../hooks/useCategories';

const Categories = () => {
    const [categories, refetch, isLoading] = useCategories();

    // console.log("Categories are ", categories);
    return (
        <div className='mt-6 p-6 bg-white '>
            {/* section heading  */}
            <div className=' pb-2 '>
                <h2 className='text-lg md:text-xl font-semibold'>Categories</h2>
            </div>
            {/* section content */}
            <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9'>
                {
                    categories.map(category => <Link to={`/${category.name}`} state={category.name} key={category._id} className=' p-4 w-full flex items-center flex-col border hover:shadow-md hover:border border-gray-200 bg-white'>
                        <img className='w-full h-20 object-cover' src={category.image} alt={category.name} />
                        <h3 className='text-center mt-1'>{category.name}</h3>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;