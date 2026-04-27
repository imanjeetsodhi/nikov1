import faceWashImg from '../assets/images/face.PNG';
import shampooImg from '../assets/images/shampoo.PNG';
import conditionerImg from '../assets/images/conditioner.PNG';
import comboImg from '../assets/images/combo.PNG';

export const products = [
  {
    id: 1,
    name: 'Ubtan Face Wash',
    description: 'Deep cleansing with a natural glow',
    image: faceWashImg,
    links: {
      amazon: 'https://amzn.in/d/0g1hK9WC',
      flipkart: 'https://www.flipkart.com/search?q=nikov',
      meesho: 'https://www.meesho.com/s/p/6znliz?utm_source=si'
    }
  },
  {
    id: 2,
    name: 'Nourish Shampoo',
    description: 'Restores softness from root to tip',
    image: shampooImg,
    links: {
      amazon: 'https://amzn.in/d/03T5zzGO',
      flipkart: 'https://dl.flipkart.com/s/DFi6KIuuuN',
      meesho: 'https://www.meesho.com/s/p/bu7ey5?utm_source=si'
    }
  },
  {
    id: 3,
    name: 'Silk Conditioner',
    description: 'Hydrates and detangles effortlessly',
    image: conditionerImg,
    links: {
      amazon: 'https://amzn.in/d/03T5zzGO',
      flipkart: 'https://dl.flipkart.com/s/DFefxFuuuN',
      meesho: 'https://www.meesho.com/search?q=nikov'
    }
  },
  {
    id: 4,
    name: 'Complete Care Combo',
    description: 'The ultimate ritual for skin and hair',
    image: comboImg,
    links: {
      amazon: 'https://amzn.in/d/0bBfl1ga',
      flipkart: 'https://dl.flipkart.com/s/qXKtiqNNNN',
      meesho: 'https://www.meesho.com/s/p/eo0cna?utm_source=si'
    }
  }
];
