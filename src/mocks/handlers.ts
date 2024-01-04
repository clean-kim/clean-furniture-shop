import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/nav', async ({ request }) => {

    console.log('/na: ', request);

    return HttpResponse.json(await request.json());
  }),
  http.get('/products', async ({ request }) => {
    console.log('/products: ', request);
    // if (req.url.searchParams.size > 0) {
    //   const category = req.url.searchParams.get('category');
    //   result = result.filter(item => item.category === category);
    // }
    // return res(ctx.status(200), ctx.json(result));
  }),
];
