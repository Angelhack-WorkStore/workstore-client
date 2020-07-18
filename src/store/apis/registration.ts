import {http, request} from './index';
import {RegistType} from '../modules/registration'
import {ACCESS_TOKEN,API_BASE_URL} from '../Contants';

export const registSaveAPI = async(data:RegistType) => {
  return request({
    url: API_BASE_URL + "/admin/products",
    method: 'POST',
    body: JSON.stringify(data)
  });
}