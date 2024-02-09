import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../assets/colors.style.asset';
import CustomStatusBar from '../CustomStatusBar.core.component';

interface props {
  children: ReactElement | any;
  containerStyle?: ViewStyle;
  bg?: string;
  ph?: number;
}

const Container: React.FC<props> = ({
  children,
  containerStyle = {},
  bg = colors.white,
  ph = 0,
}) => {
  return (
    <View style={styles(bg, ph).flex}>
      <CustomStatusBar />
      <View style={[styles(bg, ph).container, containerStyle]}>{children}</View>
    </View>
  );
};
export default Container;

const styles = (bgColor: any, ph: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flex: 1,
      position: 'relative',
      paddingHorizontal: ph,
    },
    flex: {flex: 1},
  });
