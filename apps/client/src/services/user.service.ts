import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your backend API URL

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};

export const createUser = async (data: any) => {
  const response = await axios.post(`${API_URL}/users`, data);
  return response.data;
};

export const updateUser = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
};
