import axios from 'axios';
import { config } from '../config';
import { ensurePathaoToken } from '../middleware/tokenManager';
import { CreateStoreParams, StoreResponse } from '../types/store';
import { validateCreateStoreParams } from '../utils/validators';

export const createStore = async ({
  name,
  contact_name,
  contact_number,
  address,
  city_id,
  zone_id,
  area_id,
  secondary_contact,
}: CreateStoreParams): Promise<StoreResponse> => {

    const validationErrors = validateCreateStoreParams({
  name,
  contact_name,
  contact_number,
  address,
  city_id,
  zone_id,
  area_id,
  secondary_contact,
});

    if (validationErrors.length > 0) {
  throw new Error(`Invalid input:\n${validationErrors.join('\n')}`);
}

  const accessToken = await ensurePathaoToken();

  const payload = {
    name,
    contact_name,
    contact_number,
    address,
    city_id,
    zone_id,
    area_id,
    ...(secondary_contact && { secondary_contact }),
  };

  try {
    const { data } = await axios.post<StoreResponse>(
      `${config.baseUrl}/aladdin/api/v1/stores`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return data;
  } catch (error: any) {
    const errMsg =
      error.response?.data?.message || 'Failed to create store in Pathao API.';
    console.error('Create Store Error:', errMsg);
    throw new Error(errMsg);
  }
};
