import { http, HttpResponse } from 'msw';
import * as dummy from '@mocks/data/data';
import { Product } from '@typings/Model';

export const handlers = [
  http.get('/nav', async () => {
    return HttpResponse.json(dummy.data.nav);
  }),
  http.get('/products', async ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const productNo = url.searchParams.get('no');
    let result = dummy.data.products;
    if (category) {
      result = dummy.data.products.filter(p => p.category === category);
    }
    if (productNo) {
      result = dummy.data.products.filter(p => p.category === category);
    }
    return HttpResponse.json(result);
  }),
  http.get('/detail/:no', async ({ params }) => {
    const { no } = params;
    console.log('productNo:: ', no);
    let result = {
      brandName: '',
      category: '',
      discountPrice: '',
      discountRate: 0,
      isFavorite: false,
      no: 0,
      price: 0,
      priceText: '',
      title: '',
    } as unknown as Product;
    if (no) {
      result = dummy.data.products.find(p => p.no === Number(no)) as unknown as Product;
      console.log('result:: ', result);
    }
    return HttpResponse.json(result);
  }),
];
