import rgbToCmyk from '../../helpers/rgbToCmyk';

import aluminum from './aluminum';
import black from './black';
import brown from './brown';
import darkBlue from './darkBlue';
import fireRed from './fireRed';
import green from './green';
import grey from './grey';
import johnDeereGreen from './johnDeereGreen';
import leatherBrown from './leatherBrown';
import lightGrey from './lightGrey';
import mediumBlue from './mediumBlue';
import realOrange from './realOrange';
import recreationalWhite from './recreationalWhite';
import white from './white';
import yellow from './yellow';

export default [
  {
    name: 'Aluminum',
    rgb: aluminum,
    cmyk: rgbToCmyk(aluminum),
  },
  {
    name: 'Black',
    rgb: black,
    cmyk: rgbToCmyk(black),
  },
  {
    name: 'Brown',
    rgb: brown,
    cmyk: rgbToCmyk(brown),
  },
  {
    name: 'Dark Blue',
    rgb: darkBlue,
    cmyk: rgbToCmyk(darkBlue),
  },
  {
    name: 'Fire Red',
    rgb: fireRed,
    cmyk: rgbToCmyk(fireRed),
  },
  {
    name: 'Green',
    rgb: green,
    cmyk: rgbToCmyk(green),
  },
  {
    name: 'Grey',
    rgb: grey,
    cmyk: rgbToCmyk(grey),
  },
  {
    name: 'John Deere Green',
    rgb: johnDeereGreen,
    cmyk: rgbToCmyk(johnDeereGreen),
  },
  {
    name: 'Leather Brown',
    rgb: leatherBrown,
    cmyk: rgbToCmyk(leatherBrown),
  },
  {
    name: 'Light Grey',
    rgb: lightGrey,
    cmyk: rgbToCmyk(lightGrey),
  },
  {
    name: 'Medium Blue',
    rgb: mediumBlue,
    cmyk: rgbToCmyk(mediumBlue),
  },
  {
    name: 'Real Orange',
    rgb: realOrange,
    cmyk: rgbToCmyk(realOrange),
  },
  {
    name: 'Recreational White',
    rgb: recreationalWhite,
    cmyk: rgbToCmyk(recreationalWhite),
  },
  {
    name: 'White',
    rgb: white,
    cmyk: rgbToCmyk(white),
  },
  {
    name: 'Yellow',
    rgb: yellow,
    cmyk: rgbToCmyk(yellow),
  },
]