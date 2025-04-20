import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    // console.log("Categories are ", categories);
    return (
        <div className='mt-6'>
            {/* section heading  */}
            <div className='mb-2'>
                <h2 className='text-xl md:text-2xl font-semibold'>Categories</h2>
            </div>
            {/* section content */}
            <div className='grid gap-0.5 grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
                {
                    categories.map(category => <Link  key={category._id} className=' p-6 w-full hover:shadow-md hover:border border-gray-200 bg-white'>
                        <img className='w-20 h-20 object-cover' src={category.image} alt={category.name} />
                        <h3 className='text-center mt-1'>{category.name}</h3>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;