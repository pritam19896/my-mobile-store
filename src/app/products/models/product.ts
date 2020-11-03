export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;
  launchDate: Date;
  code = 'M-002';
  rating?: number;
}
