import axios from 'axios';

const getBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!envUrl) return '/api';

  // If running in browser on production (e.g. Vercel) and envUrl points to localhost, fall back to /api
  if (typeof window !== 'undefined' && envUrl.includes('localhost') && !window.location.hostname.includes('localhost')) {
    return '/api';
  }
  return envUrl;
};

/**
 * Axios instance preconfigured with withCredentials: true.
 * Ensures HTTP-Only cookies are automatically sent and received.
 */
export const api = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true, // Required for HTTP-only cookies
  timeout: 15000, // 15s timeout to comfortably handle serverless cold starts
  headers: {
    'Content-Type': 'application/json',
  },
});
