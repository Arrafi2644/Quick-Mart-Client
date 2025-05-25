import React, { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router';
import { TbCurrencyTaka } from 'react-icons/tb';
import "./sectionSlider.css"
const SectionSlider = ({ products }) => {

    // console.log(products);
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 3000,
        centerPadding: "8px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            {
                products?.length > 0 && 
            <Slider className='px-4'  {...settings}>
                {
                    products.map(product => <div className='h-80 border-gray-200 border p-2 hover:shadow-md px-2'>
                        <img className='h-44 w-full object-center object-cover' src={product?.images[0]} alt={product?.name} />
                        <div className='mt-2'>
                            <h3 className='font-medium text-sm'>{product?.title}</h3>
                            <div className='flex items-center'><TbCurrencyTaka /><h3>{product?.price}</h3></div>
                            <h3 className='flex items-center gap-0.5'><del className='flex items-center text-gray-400' ><TbCurrencyTaka />{product?.price}</del>-{product?.discount}%</h3>
                        </div>
                    </div>)
                }
            </Slider>
            }
        </div>
    );
};

export default SectionSlider;