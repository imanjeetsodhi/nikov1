import ubtanImg from '../assets/images/face-wash.png';
import shampooImg from '../assets/images/shampoo.png';
import conditionerImg from '../assets/images/aloe-gel.png'; // Using aloe gel as conditioner placeholder

export const products = [
  {
    id: 1,
    name: 'Ubtan Face Wash',
    description: 'Deep cleansing with a natural glow',
    image: ubtanImg,
    links: {
      amazon: 'https://www.amazon.in/s?k=nikov+face+wash',
      flipkart: 'https://www.flipkart.com/search?q=nikov',
      meesho: 'https://www.meesho.com/search?q=nikov'
    }
  },
  {
    id: 2,
    name: 'Nourish Shampoo',
    description: 'Restores softness from root to tip',
    image: shampooImg,
    links: {
      amazon: 'https://www.amazon.in/s?k=nikov+shampoo',
      flipkart: 'https://www.flipkart.com/search?q=nikov',
      meesho: 'https://www.meesho.com/search?q=nikov'
    }
  },
  {
    id: 3,
    name: 'Silk Conditioner',
    description: 'Hydrates and detangles effortlessly',
    image: conditionerImg,
    links: {
      amazon: 'https://www.amazon.in/s?k=nikov+conditioner',
      flipkart: 'https://www.flipkart.com/search?q=nikov',
      meesho: 'https://www.meesho.com/search?q=nikov'
    }
  }
];
