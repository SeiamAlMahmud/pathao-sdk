import axios from 'axios';
import { config } from '../config';
import { getPathaoToken, saveTokenToCache } from './pathaoAuthMiddleware';
import { tokenCache } from '../lib/cache';

// const tokenCache = new NodeCache({ stdTTL: 3300 }); // ~55 mins

// SDK File
export const ensurePathaoToken = async (): Promise<string> => {
  let token = tokenCache.get<string>('pathao_access_token');

  if (!token) {
    const tokenData = await getPathaoToken();
    saveTokenToCache(tokenData);
    token = tokenData.access_token;
  }

  if (!token) {
    throw new Error('Failed to obtain Pathao access token.');
  }

  return token;
};
