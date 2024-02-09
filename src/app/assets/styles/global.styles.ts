import rs from '../responsiveSize.style.asset';

export const customPadding = (top = 0, right = 0, bottom = 0, left = 0) => {
  return {
    paddingTop: rs(top),
    paddingRight: rs(right),
    paddingBottom: rs(bottom),
    paddingLeft: rs(left),
  };
};
export const customMargin = (top = 0, right = 0, bottom = 0, left = 0) => {
  return {
    marginTop: rs(top),
    marginRight: rs(right),
    marginBottom: rs(bottom),
    marginLeft: rs(left),
  };
};
