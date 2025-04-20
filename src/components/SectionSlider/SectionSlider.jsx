import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router';
import { TbCurrencyTaka } from 'react-icons/tb';
const SectionSlider = ({ products }) => {
    // console.log(products);
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        centerPadding: "8px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
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
            <Slider {...settings}>
                {
                    products.map(product => <div className=' border-gray-200 hover:shadow-md '>
                        <img src={product?.images[0]} alt={product?.name} />
                        <div className='p-2'>
                            <h3 className='font-medium text-sm'>{product?.title}</h3>
                            <div className='flex items-center'><TbCurrencyTaka /><h3>{product?.price}</h3></div>
                            <h3>-{product?.discount}</h3>
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default SectionSlider;