import axios from 'axios';

const baseUrl = process.env.BASE_URL;
let headers = {};

if(localStorage.token){
    headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
    baseUrl: baseUrl,
    headers,
});

export default axiosInstance;