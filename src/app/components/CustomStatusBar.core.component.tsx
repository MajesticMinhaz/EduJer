import React from 'react';
import {StyleSheet, View, Platform, StatusBar} from 'react-native';
import {colors} from '../assets/colors.style.asset';

const CustomStatusBar: React.FC<any> = ({
  barStyle = 'dark',
  showHeader = true,
  bgColor = colors.transparent,
  extraHeight = 0,
}) => {
  return <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />;
};
export default CustomStatusBar;

const styles = (height: any, bgColor: any, extraHeight: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      paddingBottom: height + extraHeight,
    },
  });
