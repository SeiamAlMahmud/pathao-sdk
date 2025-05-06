import axios from 'axios';
import { config } from '../config';
import { ensurePathaoToken } from '../middleware/tokenManager';

export const apiRequest = async (method: string, url: string, payload?: any) => {
  const token = await ensurePathaoToken();

  try {
    const response = await axios({
      method,
      url: `${config.baseUrl}${url}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || 'API request failed');
  }
};
