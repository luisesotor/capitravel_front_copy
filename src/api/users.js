import api from './api';

export const createUser = async (user) => {
    const response = await api.post('/users/register', user)
    return response.data;
}