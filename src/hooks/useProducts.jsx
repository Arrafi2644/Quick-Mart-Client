import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useProducts = (params = {}) => {
    const { decodedCategory } = params;

    const category = encodeURIComponent(decodedCategory)

    const axiosSecure = useAxiosSecure();

    const { data: categoryProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["products", category],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/products?category=${category}`)
            return data;
        }
    })

    return [categoryProducts, isLoading, refetch]
};

export default useProducts;