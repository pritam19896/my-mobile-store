import { Product } from '../products/models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Redmi Note Pro 8',
    price: 13000.4354,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quasi iusto et esse! Dicta autem, qui voluptatibus,
                  tempore asperiores nobis voluptas beatae quae ut omnis sapiente, labore voluptates repellat nisi?`,
    image: 'assets/galaxy-s10.jpg',
    featured: true,
    launchDate: new Date(),
    code: 'M-001',
    rating: 4.5
  },
  {
    id: 2,
    name: 'iPhone X',
    price: 65000,
    description: 'Apple',
    image: 'assets/iphone-11.jpeg',
    featured: false,
    launchDate: new Date(),
    code: 'M-002',
    rating: 5
  },
  {
    id: 3,
    name: 'Pixel XL',
    price: 43000,
    description: 'Google',
    image: 'assets/redmi-note-7-pro.jpg',
    featured: false,
    launchDate: new Date(),
    code: 'M-003',
    rating: 4
  }
];
