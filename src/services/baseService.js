import axios from "axios";

export const create = (opts = () => {}) => {
  const http = axios.create({
    baseURL: `http://localhost:3001/api`,
    ...opts
  });

  return http
}