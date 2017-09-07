# BrickHouse

Transfer of my crypto block-chain tutorial app using material design, etc.

## Setup

When intially setting up a project you'll need to create the environments files in `src/environments` as appropriate.

Example environment.ts
```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "XYZ",
    authDomain: "XYZ.firebaseapp.com",
    databaseURL: "https://XYZ.firebaseio.com",
    storageBucket: "XYZ.appspot.com"
  }
};
```
