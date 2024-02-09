import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {bookItemInterFace} from '../types/types';
import ImagePreview from './ImagePreview.core.component';
import {typographies} from '../assets/typographies.style.asset';
import rs from '../assets/responsiveSize.style.asset';
import {useCustomNavigation} from '../packages/navigation.package';
import {screens} from '../routes/routeName';

const BookImageItem: React.FC<{item: bookItemInterFace}> = ({item}) => {
  const {_id, thumbnailUrl, title} = item;
  const navigation = useCustomNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate(screens.bookDetails, {item});
      }}
      style={{flexShrink: 1, width: rs(80)}}>
      <ImagePreview
        source={{uri: thumbnailUrl}}
        borderRadius={10}
        styles={{height: rs(120), width: rs(80), borderRadius: 10}}
      />
      <Text style={typographies.bodyXSBold} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BookImageItem;
