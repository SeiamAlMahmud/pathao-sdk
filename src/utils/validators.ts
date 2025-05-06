import { CreateStoreParams } from '../types/store';

export const validateCreateStoreParams = (payload: Partial<CreateStoreParams>) => {
  const errors: string[] = [];

  if (!payload.name || typeof payload.name !== 'string') {
    errors.push('name is required and must be a string');
  }

  if (!payload.contact_name || typeof payload.contact_name !== 'string') {
    errors.push('contact_name is required and must be a string');
  }

  if (!payload.contact_number || typeof payload.contact_number !== 'string') {
    errors.push('contact_number is required and must be a string');
  }

  if (!payload.address || typeof payload.address !== 'string') {
    errors.push('address is required and must be a string');
  }

  if (
    payload.city_id === undefined ||
    typeof payload.city_id !== 'number' ||
    isNaN(payload.city_id)
  ) {
    errors.push('city_id is required and must be a number');
  }

  if (
    payload.zone_id === undefined ||
    typeof payload.zone_id !== 'number' ||
    isNaN(payload.zone_id)
  ) {
    errors.push('zone_id is required and must be a number');
  }

  if (
    payload.area_id === undefined ||
    typeof payload.area_id !== 'number' ||
    isNaN(payload.area_id)
  ) {
    errors.push('area_id is required and must be a number');
  }

  if (
    payload.secondary_contact !== undefined &&
    typeof payload.secondary_contact !== 'string'
  ) {
    errors.push('secondary_contact must be a string if provided');
  }

  return errors;
};
