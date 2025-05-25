import axios from 'axios';

const useAxiosPublic = () => {
    const axiosSecure = axios.create({
        baseURL: "http://localhost:3000"
    })
    return axiosSecure;
};

export default useAxiosPublic;