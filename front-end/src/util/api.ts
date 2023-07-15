import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { labConstants } from "./constant";
import { storageService } from "./storage";
import { authService } from "../module/public/auth/service/auth.service";

export const api = axios.create({
  baseURL: labConstants.API_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = storageService.getToken();

    if (token && config.headers && !config.url?.startsWith("/uaa")) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data;
  },
  (error: AxiosError<any>) => {
    if (error.response?.status === 403) {
      authService.logout();
    }

    return Promise.reject(error.response?.data);
  }
);
