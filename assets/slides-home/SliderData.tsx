import {ImageSourcePropType} from 'react-native';

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  link: string;
};

export const ImageSlider = [
  {
    title: 'Mentor Marcos',
    image: require('../finq-linkedin-marcos.png'),
    link: 'www.google.com.br'
  },
  {
    title: 'Mentor Tiago',
    image: require('../finq-linkedin-tiago.png'),
    link: 'www.google.com.br'
  },
]