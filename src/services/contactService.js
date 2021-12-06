import { create } from "./baseService";
const http = create();

export const sendData = (body) => {
  return http.post('/ponerse-en-contacto', body)
}