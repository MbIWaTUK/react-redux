import axios from "axios";

const KEY = "b1186a4f-cbbb-4035-a7df-e7b360e29e9f";
const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "API-KEY": KEY,
  },
  withCredentials: true,
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        headers: {
          "API-KEY": KEY,
        },
        withCredentials: true,
      })
      .then((res) => res.data);
  },
};
