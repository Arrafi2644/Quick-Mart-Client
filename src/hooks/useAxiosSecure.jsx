import axios from 'axios';

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        // baseURL: "http://localhost:3000"
        baseURL: "https://quick-mart-server.vercel.app"
    })
    return axiosSecure;
};

export default useAxiosSecure;