import axios, { AxiosError, AxiosResponse } from "axios";

let isRefreshing = false;

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const { config, response } = error;
    const status = response?.status;

    if (status === 401) {
      if (isRefreshing && config?.url === "/auth/refresh") {
        window.location.href = "/";
      } else {
        isRefreshing = true;
        const body = { refreshToken: localStorage.getItem("refreshToken") };
        const refreshResponse = await axiosInstance.post("/auth/refresh", body);

        isRefreshing = false;
        const { accessToken, refreshToken } = refreshResponse.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        return axiosInstance(config as any);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
