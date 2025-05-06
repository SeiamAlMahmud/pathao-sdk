import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { config } from '../config';
import { tokenCache } from '../lib/cache';
import { TokenResponse } from '../types/auth';



export const getPathaoToken = async () => {
  const url = `${config.baseUrl}/aladdin/api/v1/issue-token`;

  const payload = {
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: config.grantType,
    username: config.username,
    password: config.password,
  };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const { data } = await axios.post(url, payload, { headers });
  return data;
};

export const saveTokenToCache = (data: TokenResponse) => {
  const { access_token, refresh_token, expires_in } = data;
  const ttl = expires_in - 60; // expire 60s before to be safe

  tokenCache.set('pathao_access_token', access_token, ttl);
  tokenCache.set('pathao_refresh_token', refresh_token, ttl);
};

export const pathaoAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = tokenCache.get('pathao_access_token');
    if (token) {
      next();
    } else {
      const tokenData = await getPathaoToken();
      saveTokenToCache(tokenData);
      next();
    }
  } catch (error: any) {
    console.error('Pathao Auth Error:', error.message);
    return res.status(401).json({
      error: 'Failed to authenticate with Pathao',
      details: error.message,
    });
  }
};

// Helper for SDK internal use
export const getCachedToken = (): string | undefined => {
  return tokenCache.get<string>('pathao_access_token');
};
