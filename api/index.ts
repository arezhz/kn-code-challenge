import { AxiosInstance, AxiosResponse } from "axios";
import Interceptors from "./services/instance";

export default class ApiService {
  static axiosInstance: AxiosInstance = new Interceptors().axiosInstance;

  static Get(url: string, params?: any): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
    };
    return this.axiosInstance({
      method: "get",
      url,
      headers,

      // TODO: we can add query params here
      //   params,
      //   paramsSerializer: {
      //     serialize: (paramList: any) => queryString.stringify(paramList),
      //   },
    }).then((res: any) => res.data);
  }

  static Post<T>(url: string, payload?: T): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
    };
    return this.axiosInstance({
      method: "post",
      data: payload,
      headers,
      url,
    }).then((res: AxiosResponse<any>) => res.data);
  }
}
