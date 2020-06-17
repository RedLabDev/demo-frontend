const localhostEnvironment = 'localhost';
const prodEnvironment = 'production';

const isLocalHost = () =>
  window.location.host.includes('localhost') ||
  window.location.hostname.includes('127.0.0.1');

export const getEnv = () => {
  if (isLocalHost()) {
    return process.env.REACT_APP_ENV || localhostEnvironment;
  }
  return prodEnvironment;
};
