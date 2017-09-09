# BrickHouse

Transfer of my crypto block-chain tutorial app using material design, etc.

## Setup

When initially setting up a project you'll need to create the environments files in `src/environments` as appropriate.

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

***Note to Self:*** If you clone the project and forget to add the environment.ts file you'll get a cryptic error that reads `Cannot read property 'length' of undefined`.  No useful info there but it means you forgot to add that file.
