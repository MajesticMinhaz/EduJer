import {Dimensions} from 'react-native';

const round = (value: number) => {
  const result = Math.round(Number(value));
  return result;
};
const {height} = Dimensions.get('screen');
const rs = (size: number) => {
  if (height > 800) {
    const h = size / 860;
    return round(h * height);
  } else if (height <= 800 && height > 750) {
    const h = size / 810;
    return round(h * height);
  } else if (height <= 750 && height > 700) {
    const h = size / 760;
    return round(h * height);
  } else if (height <= 700 && height > 650) {
    const h = size / 710;
    return round(h * height);
  } else if (height <= 650 && height > 600) {
    const h = size / 660;
    return round(h * height);
  } else if (height <= 600 && height > 550) {
    const h = size / 610;
    return round(h * height);
  } else {
    const h = size / 610;
    return round(h * height);
  }
};

export default rs;
