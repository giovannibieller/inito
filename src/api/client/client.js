import axios from 'axios';
import EndPoints from '@api/endpoints';

const client = axios.create({
  baseURL: EndPoints.BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export default client;
