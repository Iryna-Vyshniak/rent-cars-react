import axios from 'axios';

import { BASE_URL } from '../constants/constants';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
});
