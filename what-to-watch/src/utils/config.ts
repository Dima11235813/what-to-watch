export const USE_LOGGER: boolean = (process.env.REACT_APP_USE_LOGGER || 'true').trim().toLowerCase() === 'truef';
export const APP_API_URL: string | undefined = process.env.REACT_APP_APP_API_URL 
export const DATA_API_URL: string | undefined = process.env.REACT_APP_DATA_API_URL 
