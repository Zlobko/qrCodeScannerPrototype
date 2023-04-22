Offline Data Retrieval using QR Code and IndexedDB

This prototype aims to create a solution for retrieving data while having no internet connection. The data will be stored in an IndexedDB and updated via an API when internet is available. The data will be retrieved by scanning a QR code.

Technologies Used:

IndexedDB: A client-side database technology for storing structured data in web applications.
Service Worker: A script that runs in the background and can intercept network requests, serve cache data, and handle other offline-related tasks.
QR Code Scanner: A technology for decoding QR codes and retrieving information from them.
Features:

Offline Data Retrieval: The prototype will enable users to retrieve data even when there's no internet connection.
Up-to-date Data: The service worker will regularly update the data stored in the IndexedDB via an API, ensuring that the data is always up-to-date.
QR Code Scanning: The data will be retrieved by scanning a QR code, making the process quick and convenient.
Benefits:

Access to Data Without Internet: The prototype will allow users to access data even when they don't have an internet connection.
Improved Data Reliability: The use of a service worker and IndexedDB will ensure that the data is always up-to-date and reliable.
Convenient Data Retrieval: The QR code scanning feature will make the data retrieval process quick and convenient.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
