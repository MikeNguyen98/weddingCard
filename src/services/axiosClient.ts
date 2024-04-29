import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = (showHeader = false, showMultipart = false) => {
  const contentType = showMultipart
    ? 'multipart/form-data'
    : 'application/json';
  const axiosConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
    // withCredentials: true,
    headers: {
      'Content-Type': contentType,
    },
  });

  // Add a response interceptor
  axiosConfig.interceptors.response.use(
    function (response: AxiosResponse) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (showHeader) {
        return response;
      }
      return response.data;
    },
    function (error: AxiosError) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error?.response?.data);
    },
  );
  // Add a request interceptor
  axiosConfig.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const customHeaders: any = {};
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
          customHeaders.Authorization = `Bearer ${token}`;
        }
      }
      return {
        ...config,
        headers: {
          ...customHeaders,
          ...config.headers,
        },
      };
    },
    function (error: AxiosError) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  return axiosConfig;
};

export default axiosClient;
