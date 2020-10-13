export const getLogText = req => {
  const { method, path, body, query, params } = req;
  let logText = `method: ${method}, path: ${path}`;

  if (Object.keys(body).length) logText += `, body: ${JSON.stringify(body)}`;
  if (Object.keys(query).length) logText += `, query: ${JSON.stringify(query)}`;
  if (Object.keys(params).length) logText += `, params: ${JSON.stringify(params)}`;

  return logText;
};
