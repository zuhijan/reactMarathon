import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

export const req = async (endpoint: string, query: object) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const result = await fetch(uri).then((res) => res.json());
  return result;
};

export default req;
