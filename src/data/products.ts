export interface Product {
  id: string;
  name: string;
  desc: string;
  image: string; // path image
  type?: { color: string; image: string }[];
  imageGallery?: string[];
  price: number;
  sizeOptions?: string[];
  switchSfx?: string; // path sfx;
  category: string[];
}

// filler tings for now
export const products: Product[] = [
  {
    id: '1',
    name: 'Waguri Placeholder',
    price: 69.99,
    desc: 'Kindness',
    image: '/images/waguri/product1.jpg',
    type: [
      { color: '#CBD5E0', image: '/images/waguri/product1.jpg' },
      { color: '#1A202C', image: '/images/waguri/product3.webp' },
      { color: '#febaffff', image: '/images/waguri/product2.png' },
    ],
    sizeOptions: ['S', 'M', 'L', 'XL'],
    category: ['all', 'anime'],
  },
  {
    id: '2',
    name: 'Popcat Placeholder',
    price: 14.99,
    desc: 'popopopopopopop',
    image: '/images/meow/pop.png',
    type: [
      { color: '#ffa3a3ff', image: '/images/meow/pop.png' },
      { color: '#87affeff', image: '/images/meow/cat.png' },
    ],
    sizeOptions: ['S', 'M', 'L'],
    switchSfx: '/audio/pop.mp3',
    category: ['all', 'cat'],
  },
  {
    id: '3',
    name: `Nah I'd Win Placeholder`,
    price: 67,
    desc: `Win nah I'd`,
    image: '/images/gojover/nah1.jpg',
    imageGallery: [
      '/images/gojover/nah1.jpg',
      '/images/gojover/nah2.jpg',
      '/images/gojover/nah3.webp',
      '/images/gojover/nah4.webp',
      '/images/gojover/nah5.webp',
    ],
    sizeOptions: ['S', 'L', 'XXXXXXXXL'],
    category: ['all', 'anime'],
  },
  {
    id: '4',
    name: 'Bongo Cat Placeholder',
    price: 1.99,
    desc: 'Bing Bong',
    image: '/images/meowBongo/bing.png',
    type: [
      { color: '#ffa3a3ff', image: '/images/meowBongo/bing.png' },
      { color: '#87affeff', image: '/images/meowBongo/bong.png' },
    ],
    sizeOptions: ['S', 'M', 'L'],
    switchSfx: '/audio/bonk.mp3',
    category: ['all', 'cat'],
  },
  {
    id: '5',
    name: 'Pokemon Placeholder',
    price: 404,
    desc: `Who's that Pokemon?`,
    image: '/images/omo/omo1.webp',
    type: [
      { color: '#a8ffa3ff', image: '/images/omo/omo1.webp' },
      { color: '#fe8791ff', image: '/images/omo/omo2.webp' },
      { color: '#87affeff', image: '/images/omo/omo3.webp' },
    ],
    sizeOptions: ['ˢ', 's', 'S'],
    category: ['all', 'anime'],
  },
  {
    id: '6',
    name: 'Mao Placeholder',
    price: 10.01,
    desc: `01001000 01101001 01110010 01100101 00100000 01101101 01100101 00100000 01110000 01101100 01110011`,
    image: '/images/mao/mao0.jpg',
    type: [
      { color: '#ff5e5eff', image: '/images/mao/mao0.jpg' },
      { color: 'rgba(254, 176, 128, 1)', image: '/images/mao/mao1.jpg' },
      { color: '#ffff5eff', image: '/images/mao/mao2.jpg' },
      { color: '#9cff5eff', image: '/images/mao/mao3.jpg' },
      { color: 'rgba(163, 252, 255, 1)', image: '/images/mao/mao4.jpg' },
    ],
    sizeOptions: ['ˢ', 's', 'S'],
    category: ['all', 'cat'],
  },
];
