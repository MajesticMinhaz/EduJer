import {StyleSheet} from 'react-native';
import {colors} from './colors.style.asset';
const fonts = {
  onest400: 'Onest-Regular',
  onest600: 'Onest-SemiBold',
};
export const typographies = StyleSheet.create({
  bodyLarge: {
    fontFamily: fonts.onest400,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  bodyLargeBold: {
    fontFamily: fonts.onest600,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  bodyMedium: {
    fontFamily: fonts.onest400,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  bodyMediumBold: {
    fontFamily: fonts.onest600,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  bodySmall: {
    fontFamily: fonts.onest400,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  bodySmallBold: {
    fontFamily: fonts.onest600,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  bodyXS: {
    fontFamily: fonts.onest400,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  bodyXSBold: {
    fontFamily: fonts.onest600,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: colors.gray0,
    letterSpacing: -0.005,
    textAlign: 'left',
  },
  headingLarge: {
    fontFamily: fonts.onest600,
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 38,
    color: colors.gray0,
    letterSpacing: -0.02,
  },
  headingMedium: {
    fontFamily: fonts.onest600,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    color: colors.gray0,
    letterSpacing: -0.02,
  },
  buttonLarge: {
    fontFamily: fonts.onest600,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: colors.white,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  buttonMedium: {
    fontFamily: fonts.onest600,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: colors.white,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  labelLarge: {
    fontFamily: fonts.onest600,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: colors.gray0,
    letterSpacing: 0.36,
  },
});