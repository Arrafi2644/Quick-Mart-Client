import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const SectionHeader = ({title}) => {
    return (
        <div className='flex justify-between gap-4 flex-wrap mb-6'>
            <h2 className='text-xl md:text-2xl font-semibold '>{title}</h2>
            <button className="cursor-pointer"><IoIosArrowDroprightCircle size={24} /></button>
        </div>
    );
};

export default SectionHeader;