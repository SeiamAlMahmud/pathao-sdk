export interface CreateStoreParams {
  name: string;
  contact_name: string;
  contact_number: string;
  secondary_contact?: string;
  address: string;
  city_id: number;
  zone_id: number;
  area_id: number;
}

export interface StoreResponse {
  message: string;
  type: string;
  code: number;
  data: {
    store_name: string;
  };
}
