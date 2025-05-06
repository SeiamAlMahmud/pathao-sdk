import { apiRequest } from './utils';

export const createOrder = async (orderPayload: any) => {
  return await apiRequest('post', '/order-create-url', orderPayload);
};
