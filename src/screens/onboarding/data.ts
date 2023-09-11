import OnBoard from '../../assets/img/onBoard.png';

import {ImageProps} from 'react-native';

export type Slide = {
  id: string;
  image: ImageProps;
  title: string;
  redTitle: string;
  text: string;
  thirdText?: string;
};

export const Slides: Slide[] = [
  {
    id: '1',
    image: OnBoard,
    title: 'Match with riders that',
    redTitle: 'always deliver',
    text: 'With our highly-rated riders, you can be sure of every delivery request being fulfilled in a safe and timely order.',
  },
  {
    id: '2',
    image: OnBoard,
    title: 'because we care',
    redTitle: 'Best rates ',
    text: 'Transparency and commitment to deliver value - all to put your mind at ease.',
  },
  {
    id: '3',
    image: OnBoard,
    title: 'Book your deliveries',
    redTitle: 'in advance',
    text: 'Schedule a delivery and enjoy the convenience and peace of mind of our service.',
  },
  {
    id: '4',
    image: OnBoard,
    title: 'Get started with',
    redTitle: 'Messenger',
    text: 'With our vetted riders, you can trust that your goods will be in good hands.',
    thirdText: 'today',
  },
];
