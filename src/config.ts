import dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl: process.env.PATHAO_BASE_URL!,
  clientId: process.env.PATHAO_CLIENT_ID!,
  clientSecret: process.env.PATHAO_CLIENT_SECRET!,
  username: process.env.PATHAO_USERNAME!,
  password: process.env.PATHAO_PASSWORD!,
  grantType: process.env.PATHAO_GRANT_TYPE!,
};
