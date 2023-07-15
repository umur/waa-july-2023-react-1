export interface Product {
  id?: number;
  name: string;
  price: number;
  rating: number;
  reviews?: Review[];
  createdUser?: any;
}

export interface Review {
  id: number;
  text: string;
}
