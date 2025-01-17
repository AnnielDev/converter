import axios, { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';

export async function getCurrency(currency?: string): Promise<AxiosResponse> {
  return axios
    .get(
      `https://v6.exchangerate-api.com/v6/${environment.API_KEY}/latest/${
        currency ? currency : 'USD'
      }`
    )
    .then(({ data }) => data);
}

