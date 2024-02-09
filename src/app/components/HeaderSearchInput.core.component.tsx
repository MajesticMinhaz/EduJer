import React, {useRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {customMargin, customPadding} from '../assets/styles/global.styles';
import {searchComponentProps} from '../types/types';
import {colors} from '../assets/colors.style.asset';
import CrossIcon from '../assets/icons/Cross.icon.asset';
import {typographies} from '../assets/typographies.style.asset';
import {useCustomNavigation} from '../packages/navigation.package';
import {screens} from '../routes/routeName';
import AddIcon from '../assets/icons/Add.icon.asset';
const HeaderSearchInput: React.FC<searchComponentProps> = ({
  onChange,
  defaultValue = '',
  success,
}) => {
  const crossRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const navigation = useCustomNavigation<any>();
  const handleOnChange = (text: any) => {
    if (text.length > 0) {
      crossRef.current.setNativeProps({
        style: {display: 'flex'},
      });
      onChange(text);
    } else {
      crossRef.current.setNativeProps({
        style: {display: 'none'},
      });
      inputRef.current.setNativeProps({
        text: '',
      });
      onChange(text);
    }
  };
  return (
    <View style={[styles.container, {...customMargin(10, 20, 10, 20)}]}>
      <View style={[styles.searchContainer]}>
        <TextInput
          style={styles.input}
          placeholder={'Search Book'}
          numberOfLines={1}
          cursorColor={colors.gray0}
          placeholderTextColor={colors.gray4}
          onChangeText={handleOnChange}
          defaultValue={defaultValue?.toString()}
          ref={inputRef}
        />
        <TouchableOpacity onPress={() => handleOnChange('')}>
          <View
            style={
              defaultValue === ''
                ? styles.crossIconWrpNone
                : styles.crossIconWrp
            }
            ref={crossRef}>
            <CrossIcon height={24} width={24} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.save}
        onPress={() =>
          navigation.navigate(screens.addBook, {
            success,
          })
        }>
        <AddIcon fill={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderSearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    ...customMargin(5, 0, 5, 0),
    ...customPadding(0, 10, 0, 10),
    gap: 16,
    width: '82%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flexGrow: 1,
    textAlignVertical: 'center',
    ...typographies.bodyMedium,
  },
  crossIconWrp: {display: 'flex'},
  crossIconWrpNone: {display: 'none'},
  save: {
    borderWidth: 1,
    borderColor: colors.gray8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexGrow: 1,
    ...customPadding(15, 10, 15, 10),
  },
});
