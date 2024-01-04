type Product = {
  no: number;
  title: string;
  price: number;
  priceText: string;
  brandName: string;
  category: string;
  discountRate: number;
  discountPrice: number;
  isFavorite: boolean;
}

type CartItem = {
  product: Product;
  option: string;
  count: number;
}