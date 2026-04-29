import faceWashImg from '../assets/images/face.png';
import shampooImg from '../assets/images/shampoo.png';
import conditionerImg from '../assets/images/conditioner.png';
import comboImg from '../assets/images/combo.png';

export const products = [
  {
    id: 1,
    name: 'Complete Care Combo',
    description: 'The ultimate ritual for skin and hair',
    image: comboImg,
    links: {
      amazon: 'https://amzn.in/d/0bBfl1ga',
      flipkart: 'https://dl.flipkart.com/s/qXKtiqNNNN',
      meesho: 'https://www.meesho.com/s/p/eo0cna?utm_source=si'
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
      amazon: 'https://amzn.in/d/06XUQ9JV',
      flipkart: 'https://dl.flipkart.com/s/DFefxFuuuN',
      meesho: 'https://www.meesho.com/search?q=nikov'
    }
  },
  {
    id: 4,
    name: 'Ice Roller',
    description: 'Soothes, de-puffs your skin instantly',
    image: faceWashImg,
    links: {
      amazon: 'https://amzn.in/d/0g1hK9WC',
    }
  },
];
