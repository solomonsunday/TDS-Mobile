import {BASE_URL, BASE_URL_LIVE} from '@env';
const prod = false;
export const baseUrl = prod ? BASE_URL_LIVE : BASE_URL;
