import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllProducts = (params = {}) => {
    const { decodedCategory, brand, service, warranty, minPrice, maxPrice } = params

    const category = encodeURIComponent(decodedCategory)
    console.log("Category", category);
    console.log("Brand ", brand);
    console.log("Service ", service);
    console.log("warranty ", warranty);
    console.log("min price ", minPrice);
    console.log("max price ", maxPrice);

    const axiosSecure = useAxiosSecure();

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products", category, brand, service, warranty, minPrice, maxPrice],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/products?category=${category}&brand=${brand}&service=${service}&warranty=${warranty}&min=${minPrice}&max=${maxPrice}`)
            return data;
        }
    })

    return [products, isLoading, refetch]
};

export default useAllProducts;