import axios from "axios";

export const create = (opts = () => {}) => {
  const http = axios.create({
    baseURL: `https://api-mailer-attomo.herokuapp.com/api`,
    ...opts
  });

  return http
}

//`https://api-mailer-attomo.herokuapp.com/api`,
// `http://localhost:3000/api`,