const isLocalHost = () =>
  window.location.host.includes('localhost') ||
  window.location.hostname.includes('127.0.0.1');

export const getEnv = () => {
  if (process.env.REACT_APP_ENV) {
    return process.env.REACT_APP_ENV;
  }
  if (isLocalHost()) {
    return 'localhost';
  }
  return 'prod';
};
