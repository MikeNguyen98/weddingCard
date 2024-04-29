import * as qs from 'qs';

export function mergeQueryParams<T extends object>(url: string, parameters: T) {
  const filteredParameters = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(parameters).filter(([_, value]) => value !== null && value !== undefined)
  );
  const keys = Object.keys(filteredParameters);
  let queryUrl: string = url;
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(filteredParameters);
  }
  return queryUrl;
}