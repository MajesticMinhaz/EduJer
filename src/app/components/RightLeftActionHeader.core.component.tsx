import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCustomNavigation} from '../packages/navigation.package';
import CrossIcon from '../assets/icons/Cross.icon.asset';
import SearchIcon from '../assets/icons/Search.icon.asset';
import {rightLeftActionProps} from '../types/types';
import {colors} from '../assets/colors.style.asset';
import rs from '../assets/responsiveSize.style.asset';
import {customPadding} from '../assets/styles/global.styles';
import {typographies} from '../assets/typographies.style.asset';
import BadgeButton from './BadgeButton.core.component';

const RightLeftActionHeader: React.FC<rightLeftActionProps> = ({
  containerStyles = {},
  leftIcon = <CrossIcon height={28} width={28} />,
  leftIconHandler,
  right = <SearchIcon height={28} width={28} />,
  rightHandler = () => {},
  title = '',
  rightHandlerDisable = true,
  isAnimating = false,
}) => {
  const navigation = useCustomNavigation();
  const onPressRightIcon = () => {
    if (leftIconHandler) {
      leftIconHandler();
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={[styles.container, containerStyles]}>
      {leftIcon && (
        <TouchableOpacity onPress={onPressRightIcon}>
          {leftIcon}
        </TouchableOpacity>
      )}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {typeof right === 'string' ? (
        <BadgeButton
          text={right}
          handler={rightHandler}
          isAnimating={isAnimating}
          rightHandlerDisable={rightHandlerDisable}
          textStyle={
            rightHandlerDisable ? styles.rightDisable : styles.rightActive
          }
        />
      ) : (
        <TouchableOpacity onPress={rightHandler} activeOpacity={0.3}>
          {right}
        </TouchableOpacity>
      )}
    </View>
  );
};
export default RightLeftActionHeader;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  showBorder: {borderBottomWidth: 1, borderBottomColor: colors.gray8},
  noBorder: {borderBottomWidth: 0},
  title: {
    ...typographies.bodyLargeBold,
    flexGrow: 1,
    flexShrink: 1,
  },
  headerTitle: {
    ...typographies.bodyLargeBold,
    flexShrink: 1,
    ...customPadding(0, 20),
  },
  rightActive: {
    ...customPadding(8, 16, 8, 16),
    ...typographies.buttonMedium,
    backgroundColor: colors.primary,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'flex-end',
  },
  rightDisable: {
    ...customPadding(8, 16, 8, 16),
    ...typographies.buttonMedium,
    backgroundColor: colors.gray9,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    color: colors.gray6,
  },
  onlyIconHeaderContainer: {
    height: rs(60),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    ...customPadding(0, 20, 0, 20),
  },
  flex: {alignItems: 'center', gap: 16, flexDirection: 'row', flexShrink: 1},
  border: {borderBottomWidth: 1, borderBottomColor: colors.gray8},
});
