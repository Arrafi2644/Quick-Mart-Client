import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import SectionProducts from '../../components/Categories/SectionProducts/SectionProducts';
import useCategories from '../../hooks/useCategories';
import { Link, useLocation } from 'react-router';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";



const Products = () => {
    const [products, isLoading, refetch] = useAllProducts();
    const [categories] = useCategories();
    const location = useLocation()
    const pathSegments = location.pathname.split("/")
    const encodedCategory = [...pathSegments][pathSegments.length - 1]
    const decodedCategory = decodeURIComponent(encodedCategory)

    return (
        <div className='my-8'>
            <div className='mb-4 flex items-center gap-1'>
                <Link to='/'>Home</Link>
                 <span className='text-xl'><MdKeyboardArrowRight /> </span> 
                <Link to={`/products/category/${decodedCategory}`}>{decodedCategory}</Link>
            </div>

            <div className="border-gray-300 mb-4 border-t"></div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 xl:grid-cols-5'>

                {/* sidebar  */}
                <div className='border p-2 rounded-md border-gray-300'>
                    <div className='flex justify-between gap-2'>
                        <h2 className='font-semibold text-lg'>Filters</h2>
                        <button className="btn btn-sm bg-transparent text-red-500 hover:bg-gray-300 hover:text-gray-900">Clear All</button>
                    </div>
                    {/* categories  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Categories</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            {
                                categories.map(category => <Link to={`/products/category/${category.name}`} key={category._id} className=' border border-gray-300 rounded-md p-1'>
                                    {category?.name}
                                </Link>)
                            }
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* brands  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Brands</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            <Link className=' border border-gray-300 rounded-md p-1'>Apple</Link>
                            <Link className=' border border-gray-300 rounded-md p-1'>Samsang</Link>
                            <Link className=' border border-gray-300 rounded-md p-1'>Vivo</Link>
                            <Link className=' border border-gray-300 rounded-md p-1'>Oppo</Link>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* Price  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Price</h2>
                        <div className='flex gap-2 text-sm'>
                            <input type="text" className="input input-xs" placeholder="Min" />
                            <span>-</span>
                            <input type="text" className="input input-xs" placeholder="Max" />
                            <button className="btn btn-xs bg-orange-600 text-white text-lg"><IoMdArrowDroprightCircle /> </button>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* Service & Promotion  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Service & Promotion</h2>
                        <div className='flex gap-2 text-sm'>
                            <Link className='w-full border border-gray-300 rounded-md p-1'>Free Delivery</Link>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* Warranty Type  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Warranty Type</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            <Link className='w-full border border-gray-300 rounded-md p-1'>No Warranty</Link>
                            <Link className='w-full border border-gray-300 rounded-md p-1'>3 Month Warranty</Link>
                            <Link className='w-full border border-gray-300 rounded-md p-1'>6 Month Warranty</Link>
                            <Link className='w-full border border-gray-300 rounded-md p-1'>1 Year Warranty</Link>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>
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