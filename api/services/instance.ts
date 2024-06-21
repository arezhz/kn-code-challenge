import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class Interceptors {
  private serverUrl = `https://jsonplaceholder.typicode.com/`;

  private readonly AxiosInstance: AxiosInstance;

  get axiosInstance() {
    return this.AxiosInstance;
  }

  constructor() {
    this.AxiosInstance = axios.create({ baseURL: this.serverUrl });

    this.AxiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const requestConfig = { ...config };
        return requestConfig as any;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    this.AxiosInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        return response;
      },
      async (error: any) => {
        return Promise.reject(error);
      }
    );
  }
}
