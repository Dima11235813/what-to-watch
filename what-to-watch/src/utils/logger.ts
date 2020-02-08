import { USE_LOGGER } from './config';

//temp logger
export const logToConsole = (message: string) => {
  if (USE_LOGGER) {
    logToConsole(message)
  }
};

export const logObjToConsole = (obj: any) => {
  if (USE_LOGGER) {
    logToConsole(obj)
  }
};

export const logEnvVariables = () => {
  logToConsole(`
    ENVIORENTMENT VARIABLES:
    REACT_APP_ENV:   [${ process.env.REACT_APP_ENV }]
  `);
};