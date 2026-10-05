import axios from 'axios';

// Defaults to relative /api which leverages Next.js server proxy rewrite to localhost:5000
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Axios instance preconfigured with withCredentials: true.
 * Ensures HTTP-Only cookies are automatically sent and received.
 */
export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Required for HTTP-only cookies
  headers: {
    'Content-Type': 'application/json',
  },
});