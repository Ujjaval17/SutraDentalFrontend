/**
 * API base URL from env. CRA loads:
 * - npm start → .env.development (and .env.local if present)
 * - npm run build → .env.production (and .env.local if present)
 * Use .env.local for machine-specific overrides (gitignored).
 */
const raw = process.env.REACT_APP_API_URL;
const API = raw ? String(raw).replace(/\/+$/, '') : '';

if (process.env.NODE_ENV === 'development' && !API) {
  // eslint-disable-next-line no-console
  console.warn(
    '[config] REACT_APP_API_URL is missing. Set it in .env.development or .env.local'
  );
}

export default API;
