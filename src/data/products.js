import faceWashImg from '../assets/images/face.png';
import shampooImg from '../assets/images/shampoo.png';
import conditionerImg from '../assets/images/conditioner.png';
import comboImg from '../assets/images/combo.png';

export const products = [
  {
    id: 1,
    name: 'NIKOV Nourish Shampoo & Conditioner Combo 300ml +300ml ',
    description: 'Helps reduce dandruff, controls frizz and dryness for smooth, soft and manageable hair. Sulfate free, paraben free and silicone free formula suitable for men and women, ideal for daily use and all hair types.',
    image: comboImg,
    links: {
      amazon: 'https://amzn.in/d/0bBfl1ga',
      flipkart: 'https://dl.flipkart.com/s/qXKtiqNNNN',
      meesho: 'https://www.meesho.com/s/p/eo0cna?utm_source=si'
    }
  },
  {
    id: 2,
    name: 'NIKOV Nourish Shampoo 300ml',
    description: 'A gentle daily use shampoo enriched with Aloe Vera and Coconut that helps cleanse the scalp and manage dryness. Leaves hair feeling fresh, soft and healthy looking after every wash.',
    image: shampooImg,
    links: {
      amazon: 'https://amzn.in/d/03T5zzGO',
      flipkart: 'https://dl.flipkart.com/s/DFi6KIuuuN',
      meesho: 'https://www.meesho.com/s/p/bu7ey5?utm_source=si'
    }
  },
  {
    id: 3,
    name: 'NIKOV Daily Nourish Conditioner 300ml ',
    description: 'Designed to nourish dry and frizzy hair, this conditioner helps improve smoothness and manageability. Its lightweight formula leaves hair soft, smooth and easy to style for daily care.',
    image: conditionerImg,
    links: {
      amazon: 'https://amzn.in/d/06XUQ9JV',
      flipkart: 'https://dl.flipkart.com/s/DFefxFuuuN',
    }
  },
  {
    id: 4,
    name: 'Ice Face Roller',
    description: 'Ice Roller for Face and Eye,Food-Grade Leak-Proof Silicone Cube, Reusable Face Massage,Ice Mold for Face,Face Massager,Facial Beauty Ice Roller,Skin Care Tools (Striped Pink)',
    image: faceWashImg,
    links: {
      amazon: 'https://amzn.in/d/0g1hK9WC',
    }
  },
];
