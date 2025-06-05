import React, { useState } from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import SectionProducts from '../../components/Categories/SectionProducts/SectionProducts';
import useCategories from '../../hooks/useCategories';
import { Link, useLocation } from 'react-router';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./products.css"
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [categories] = useCategories();
    const location = useLocation()
    const pathSegments = location.pathname.split("/")
    const encodedCategory = [...pathSegments][pathSegments.length - 1]
    const decodedCategory = decodeURIComponent(encodedCategory)
    const [categoryProducts] = useProducts({ decodedCategory });

    const [brand, setBrand] = useState("");
    const [service, setService] = useState("");
    const [warranty, setWarranty] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    // New states for controlled inputs
    const [minInput, setMinInput] = useState("");
    const [maxInput, setMaxInput] = useState("");

    const [products, isLoading, refetch] = useAllProducts({ decodedCategory, brand, service, warranty, minPrice, maxPrice });
    const uniqueBrands = [...new Set(categoryProducts.map(product => product.brand))];

    const handlePrice = (e) => {
        e.preventDefault();
        const min = parseInt(minInput);
        const max = parseInt(maxInput);
        setMinPrice(isNaN(min) ? 0 : min);
        setMaxPrice(isNaN(max) ? 0 : max);
    };

    return (
        <div className='my-8 font-medium'>
            <div className='mb-4 flex items-center gap-1'>
                <Link to='/'>Home</Link>
                <span className='text-xl'><MdKeyboardArrowRight /> </span>
                <Link to={`/products/category/${decodedCategory}`}>{decodedCategory}</Link>
            </div>

            <div className="border-gray-300 mb-4 border-t"></div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 xl:grid-cols-5'>

                {/* sidebar  */}
                <div className='border p-2 font-medium rounded-md border-gray-300'>
                    <div className='flex justify-between gap-2'>
                        <h2 className='font-semibold text-lg'>Filters</h2>
                        <button
                            onClick={() => {
                                setBrand("");
                                setService("");
                                setWarranty("");
                                setMinPrice(0);
                                setMaxPrice(0);
                                setMinInput("");
                                setMaxInput("");
                            }}
                            className="btn btn-sm bg-transparent text-red-500 hover:bg-gray-300 hover:text-gray-900"
                        >
                            Clear All
                        </button>
                    </div>

                    {/* categories  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Categories</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            {
                                categories.map(category => (
                                    <Link
                                        to={`/${category?.name}`}
                                        onClick={() => { setBrand(""); setService("") }}
                                        key={category._id}
                                        className={` ${category?.name === decodedCategory ? "active" : ""} border border-gray-300 rounded-md p-1`}
                                    >
                                        {category?.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* brands  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Brands</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            {uniqueBrands.map((b, index) => (
                                <Link
                                    key={index}
                                    onClick={() => setBrand(b)}
                                    className={`border border-gray-300 rounded-md p-1 ${brand === b ? "active" : ""}`}
                                >
                                    {b}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* Price  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Price</h2>
                        <form onSubmit={handlePrice} action="#">
                            <div className="flex gap-2 text-sm">
                                <input
                                    name="min"
                                    type="number"
                                    className="input input-xs"
                                    placeholder="Min"
                                    value={minInput}
                                    onChange={(e) => setMinInput(e.target.value)}
                                />
                                <span>-</span>
                                <input
                                    name="max"
                                    type="number"
                                    className="input input-xs"
                                    placeholder="Max"
                                    value={maxInput}
                                    onChange={(e) => setMaxInput(e.target.value)}
                                />
                                <button type="submit" className="btn btn-xs bg-orange-600 text-white text-lg">
                                    <IoMdArrowDroprightCircle />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* Service & Promotion  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Service & Promotion</h2>
                        <div className='flex gap-2 text-sm'>
                            <Link
                                onClick={() => { setService("free-delivery") }}
                                className={`${service === "free-delivery" ? "active" : ""} w-full border border-gray-300 rounded-md p-1`}
                            >
                                Free Delivery
                            </Link>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>

                    {/* Warranty Type  */}
                    <div className='mt-4'>
                        <h2 className='font-semibold mb-2'>Warranty Type</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            {["No Warranty", "3 Months", "6 Months", "1 Year", "2 Year"].map(w => (
                                <Link
                                    key={w}
                                    onClick={() => setWarranty(w)}
                                    className={`${warranty === w ? "active" : ""} w-full border border-gray-300 rounded-md p-1`}
                                >
                                    {w}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'></div>
                </div>

                {/* main content  */}
                <div className='lg:col-span-3 xl:col-span-4 p-2 rounded-md border border-gray-300'>
                    <div className='mb-4 flex justify-between items-center gap-4 '>
                        <div>
                            <h2 className='text-xl font-semibold'>{decodedCategory} Products</h2>
                            <p>{products.length} products found</p>
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
                    {
                        isLoading ?
                            <div className='relative min-h-80'>
                                <span className="loading loading-spinner loading-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                            </div>
                            : (
                                products.length === 0 ?
                                    <div className='w-full md:max-w-[420px] mx-auto min-h-80 text-center flex flex-col gap-2 items-center justify-center'>
                                        <h2 className='text-xl font-semibold '>Products not found </h2>
                                        <p className='text-sm'>Sorry, we couldn't find any product matching your criteria. Try adjusting your filters.</p>
                                        <button onClick={() => {
                                            setBrand("");
                                            setService("");
                                            setWarranty("");
                                            setMinPrice(0);
                                            setMaxPrice(0);
                                            setMinInput("");
                                            setMaxInput("");
                                        }} className="btn btn-sm">Clear Filters</button>
                                    </div> :

                                    <SectionProducts products={products} />
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
