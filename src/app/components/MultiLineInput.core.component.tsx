import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../assets/colors.style.asset';
import rs from '../assets/responsiveSize.style.asset';
import {customPadding} from '../assets/styles/global.styles';
import {typographies} from '../assets/typographies.style.asset';
import {multilineProps} from '../types/types';

const MultiLineInput: React.FC<multilineProps> = ({
  placeholder = '',
  onChangeText,
  defaultValue = '',
  name,
  validationRules = undefined,
  inputProps = {},
  placeholderTextColor = colors.gray2,
  label = '',
}) => {
  const containerRef = useRef<any>(null);
  const handleOnChange = (text: string) => {
    if (name && name?.trim() !== '') {
      onChangeText(text, name, validationRules);
    } else {
      onChangeText(text, undefined, validationRules);
    }
  };
  const handleOnFocus = () => {
    containerRef.current.setNativeProps({
      style: {...styles.activeContainer},
    });
  };
  const handleOnBlur = () => {
    containerRef.current.setNativeProps({
      style: {...styles.container},
    });
  };
  return (
    <View>
      <Text style={[typographies.bodyMediumBold, {marginBottom: 5}]}>
        {label}
      </Text>
      <View style={styles.container} ref={containerRef}>
        <TextInput
          style={[styles.input, styles.multi]}
          numberOfLines={5}
          onChangeText={handleOnChange}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          defaultValue={defaultValue?.toString()}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          multiline={true}
          {...inputProps}
        />
      </View>
    </View>
  );
};

export default MultiLineInput;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray8,
    backgroundColor: colors.gray9,
    ...customPadding(0, 16, 0, 16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeContainer: {borderColor: colors.primary, backgroundColor: colors.white},
  errorContainer: {borderColor: colors.error1},
  input: {
    ...typographies.bodyMedium,
    color: colors.gray0,
    flexGrow: 1,
    flex: 1,
  },
  multi: {textAlignVertical: 'top', maxHeight: rs(150)},
});
