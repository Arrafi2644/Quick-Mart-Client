import React, { useEffect, useState } from 'react';

const useAllProducts = () => {

        const [products, setProducts] = useState([])
    
        useEffect(() => {
            fetch("products.json")
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(error => console.log(error))
        }, [])

    return [products]
};

export default useAllProducts;