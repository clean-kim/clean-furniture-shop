import { http, HttpResponse } from 'msw';
import * as dummy from '@mocks/data/data';

export const handlers = [
  http.get('/nav', async () => {
    return HttpResponse.json(dummy.data.nav);
  }),
  http.get('/products', async ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    let result = dummy.data.products;
    if (category) {
      result = dummy.data.products.filter(p => p.category === category);
    }
    return HttpResponse.json(result);
  }),
];
