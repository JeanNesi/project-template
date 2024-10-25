import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  const customConfig = config;

  if (token) customConfig.headers.Authorization = `Bearer ${token}`;

  return customConfig;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (
      error.response?.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
