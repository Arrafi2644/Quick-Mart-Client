import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllProducts = () => {

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