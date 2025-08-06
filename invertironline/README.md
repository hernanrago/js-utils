# InvertirOnline Auth Module

This module handles authentication with the InvertirOnline API, including:

- Requesting new access tokens using username and password
- Caching the access and refresh tokens in memory
- Automatically refreshing the access token when expired
- Error handling for failed authentication or token refresh

## Usage

Import the `getToken` function and call it to obtain a valid access token:

    import { getToken } from './auth.js';

    async function example() {
      const token = await getToken();
      console.log('Access token:', token);
    }

By default, this module reads credentials from environment variables:

    IOL_USERNAME

    IOL_PASSWORD

Alternatively, you can pass credentials directly to `getToken`:

    const token = await getToken({ username: 'youruser', password: 'yourpass' });

## Notes

- Tokens are cached in memory during runtime.
- The module will automatically refresh the access token using the refresh token when possible.
- If token refresh fails, it will request a new token using credentials.

## License

MIT License © Hernán Rago
