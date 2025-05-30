import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import SectionProducts from '../../components/Categories/SectionProducts/SectionProducts';

const Products = () => {
    const [products, isLoading, refetch] = useAllProducts()
    
    return (
        <div className='my-8'>
            <div className='mb-4'>
                Home > Electroics
            </div>

            <div className="border-gray-300 mb-4 border-t"></div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 xl:grid-cols-5'>

                {/* sidebar  */}
                <div className='border p-2 rounded-md border-gray-300'>
                    <div className='flex justify-between gap-2'>
                        <h2 className='font-semibold'>Filters</h2>
                        <button className="btn btn-xs bg-transparent text-red-500 hover:bg-gray-300 hover:text-gray-900">Clear All</button>
                    </div>
                    <div>

                    </div>
                </div>

                {/* main content  */}
                <div className='lg:col-span-3 xl:col-span-4 p-2 rounded-md border border-gray-300'>
                    <div className='mb-4 flex justify-between items-center gap-4 '>
                        <div>
                            <h2 className='text-xl font-semibold'>Browse Products</h2>
                            <p>5 products found</p>
                        </div>
                        <div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn m-1 min-h-0 h-auto py-2">Sort By Price</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
                                    <li><a>Low to high</a></li>
                                    <li><a>High to low</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-300 mb-4 border-t"></div>
                    <SectionProducts products={products} />
                </div>
            </div>
        </div>
    );
};

export default Products;