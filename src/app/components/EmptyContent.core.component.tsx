import {View, Text, ViewStyle, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors.style.asset';
import {typographies} from '../assets/typographies.style.asset';
const EmptyContent: React.FC<{
  text?: string;
  style?: ViewStyle;
  forLoading?: boolean;
  loadingColor?: string;
}> = ({
  text = '',
  style = {},
  forLoading = false,
  loadingColor = colors.primary,
}) => {
  return (
    <View
      style={[
        {alignItems: 'center', flex: 1, justifyContent: 'center'},
        style,
      ]}>
      {forLoading ? (
        <ActivityIndicator size={'large'} color={loadingColor} />
      ) : (
        <Text style={typographies.bodyMedium}>{text}</Text>
      )}
    </View>
  );
};

export default EmptyContent;
