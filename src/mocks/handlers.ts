import { http, HttpResponse } from 'msw';
import * as dummy from '@mocks/data/data';

export const handlers = [
  http.get('/nav', async () => {
    return HttpResponse.json(dummy.data.nav);
  }),
  http.get('/products', async ({ request }) => {
    console.log('category: ', request);
    return HttpResponse.json(dummy.data.products);
  }),
];
