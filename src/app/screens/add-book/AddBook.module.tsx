import {View, ScrollView, StatusBar, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import RightLeftActionHeader from '../../components/RightLeftActionHeader.core.component';
import LeftArrowIcon from '../../assets/icons/LeftArrow.icon.asset';
import {colors} from '../../assets/colors.style.asset';
import {customPadding} from '../../assets/styles/global.styles';
import Input from '../../components/Input.core.component';
import MultiLineInput from '../../components/MultiLineInput.core.component';
import useAddBook from '../../hooks/useAddBook.hook';

const AddBook: React.FC<{
  route: {params: {success: (params: any) => void}};
}> = ({
  route: {
    params: {success},
  },
}) => {
  const {handleSubmit, onChange, values} = useAddBook(success);
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.white} />
      <RightLeftActionHeader
        title="Add Book"
        right={'Save'}
        leftIcon={<LeftArrowIcon />}
        rightHandler={handleSubmit}
        rightHandlerDisable={false}
      />
      <KeyboardAvoidingView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            ...customPadding(0, 20, 0, 20),
          }}>
          <Input
            onChangeText={onChange}
            name={'title'}
            defaultValue={values.title}
            label={'Title'}
          />
          <Input
            onChangeText={onChange}
            name={'thumbnailUrl'}
            defaultValue={values.thumbnailUrl}
            label={'Image URL'}
            inputProps={{
              keyboardType: 'url',
            }}
          />
          <Input
            onChangeText={onChange}
            name={'authors'}
            defaultValue={values.authors[0]}
            label={'Author Name'}
          />
          <Input
            onChangeText={onChange}
            name={'categories'}
            defaultValue={values.categories[0]}
            label={'Category'}
          />
          <MultiLineInput
            onChangeText={onChange}
            name={'shortDescription'}
            defaultValue={values.shortDescription}
            label="Short Description"
          />
          <MultiLineInput
            onChangeText={onChange}
            name={'longDescription'}
            defaultValue={values.longDescription}
            label="Long Description"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddBook;
