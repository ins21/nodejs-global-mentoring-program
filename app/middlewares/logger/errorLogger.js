/* eslint-disable no-unused-vars */
import { logger } from './logger';
import { getLogText } from './utils';

export const errorLogger = (err, req, res, next) => {
  const logText = getLogText(req);

  logger.error(`Error with message: '${err.message}' happened during this request: ${logText}. ${err.stack}`);

  res.status(500).json({ message: 'Internal Server Error' });
};
