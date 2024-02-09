import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import rs from '../assets/responsiveSize.style.asset';
import ImagePreview from './ImagePreview.core.component';
import {typographies} from '../assets/typographies.style.asset';
import {bookItemInterFace} from '../types/types';
import {useCustomNavigation} from '../packages/navigation.package';
import {screens} from '../routes/routeName';
const BookItem: React.FC<{
  item: bookItemInterFace;
  oldData?: any;
  success?: any;
  isSave?: boolean;
  data?: any;
  setData?: any;
}> = ({item}) => {
  const navigation = useCustomNavigation<any>();
  const {authors, categories, title, shortDescription, thumbnailUrl} = item;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate(screens.bookDetails, {item});
      }}
      style={{
        width: '100%',
        flexGrow: 1,
        gap: 15,
        flexDirection: 'row',
      }}>
      <ImagePreview
        source={{uri: thumbnailUrl}}
        borderRadius={10}
        styles={{
          height: rs(120),
          width: rs(80),
          alignItems: 'center',
          borderRadius: 10,
        }}
      />
      <View style={{flexGrow: 1, flexShrink: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[typographies.bodyMediumBold, {width: '80%'}]}
            numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', flexShrink: 1}}>
          <Text style={typographies.bodyXSBold}>By: </Text>
          {authors?.length > 0 &&
            authors.map((_item: string, index: number) => {
              return (
                <React.Fragment key={index}>
                  <Text style={typographies.bodyXSBold}>{_item}</Text>
                  {index !== authors.length - 1 && <Text>, </Text>}
                </React.Fragment>
              );
            })}
        </View>
        <View style={{flexDirection: 'row', flexShrink: 1}}>
          {categories?.length > 0 &&
            categories.map((_item: string, index: number) => {
              return (
                <React.Fragment key={index}>
                  <Text style={typographies.bodyXS}>{_item}</Text>
                  {index !== categories.length - 1 && <Text>, </Text>}
                </React.Fragment>
              );
            })}
        </View>
        <Text numberOfLines={2} style={[typographies.bodyXS, {flexShrink: 1}]}>
          {shortDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
