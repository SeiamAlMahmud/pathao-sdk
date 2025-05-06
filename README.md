# Pathao SDK (Unofficial)

🚧 **This package is currently in active development. Do not use in production.**

## Overview

This SDK is a wrapper around the [Pathao Courier API](https://pathao.com), allowing you to:

- Authenticate and cache tokens
- Create stores, orders, and more
- Validate inputs with type safety (TS & JS support)

## Installation




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