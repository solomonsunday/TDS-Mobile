import {
  BASE_URL,
  BASE_URL_LIVE,
  PAYSTACK_KEY,
  PAYSTACK_KEY_TEST,
  FLUTTERWAVE_KEY,
  FLUTTERWAVE_KEY_TEST,
} from '@env';
const prod = false;
export const baseUrl = prod ? BASE_URL_LIVE : BASE_URL;

export const paystackKey = prod ? PAYSTACK_KEY : PAYSTACK_KEY_TEST;
export const flutterWaveKey = prod ? FLUTTERWAVE_KEY : FLUTTERWAVE_KEY_TEST;
