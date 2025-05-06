# Pathao SDK (Unofficial)

🚧 **This package is currently in active development. Do not use in production.**

## Overview

This SDK is a wrapper around the [Pathao Courier API](https://pathao.com), allowing you to:

- Authenticate and cache tokens
- Create stores, orders, and more
- Validate inputs with type safety (TS & JS support)

## Installation


# ⚙️ Environment Setup
 Create a .env file with your credentials:

 ```Bash 
 PATHAO_BASE_URL=https://courier-api-sandbox.pathao.com
PATHAO_CLIENT_ID=your_client_id
PATHAO_CLIENT_SECRET=your_client_secret
PATHAO_USERNAME=your_username
PATHAO_PASSWORD=your_password
PATHAO_GRANT_TYPE=password
NODE_ENV=development

 ```


## 👨‍💻 Development Notes
- TypeScript-first

- Fully typed API payloads
 
- Works with both require() and import
 
- Environment-based sandbox/production switch
<br />
<br />
<br />

```
pathao-sdk/
├── src/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── orders.ts
│   │   ├── store.ts
│   │   ├── location.ts
│   │   └── utils.ts
│   ├── middleware/
│   │   └── tokenManager.ts
│   ├── types/
│   │   └── index.ts
│   ├── config.ts
│   └── index.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md

```