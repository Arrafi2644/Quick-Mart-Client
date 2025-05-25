import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllProducts = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch("products.json")
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    //         .catch(error => console.log(error))
    // }, [])

    const axiosSecure = useAxiosSecure()

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/products')
            return data;
        }
    })

    return [products, isLoading, refetch]
};

export default useAllProducts;