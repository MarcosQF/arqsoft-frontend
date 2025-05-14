import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // backend FastAPI
});

export const getRemedios = () => API.get("/remedios/");
export const getRemedio = (id) => API.get(`/remedios/${id}`);
export const createRemedio = (data) => API.post("/remedios/", data);
export const updateRemedio = (id, data) => API.put(`/remedios/${id}`, data);
export const deleteRemedio = (id) => API.delete(`/remedios/${id}`);
