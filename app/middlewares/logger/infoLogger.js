import { logger } from './logger';
import { getLogText } from './utils';

export const infoLogger = (req, res, next) => {
  const logText = getLogText(req);

  logger.info(`Request details: ${logText}`);
  next();
};
