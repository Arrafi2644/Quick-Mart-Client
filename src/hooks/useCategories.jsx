import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCategories = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: categories=[], refetch, isLoading} = useQuery({
        queryKey: ["categories"],
        queryFn: async()=>{
            const res = await axiosPublic.get('/categories')
            return res.data;
        }
    })

    return [categories, refetch, isLoading]
};

export default useCategories;