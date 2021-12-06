import axios from "axios";

export const create = (opts = () => {}) => {
  const http = axios.create({
    baseURL: `https://mailer-attomo.herokuapp.com/api`,
    ...opts
  });

  return http
}