import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {bookItemInterFace} from '../../types/types';
import {customPadding, customMargin} from '../../assets/styles/global.styles';
import {colors} from '../../assets/colors.style.asset';
import ImagePreview from '../../components/ImagePreview.core.component';
import rs from '../../assets/responsiveSize.style.asset';
import {typographies} from '../../assets/typographies.style.asset';
const BookDetails: React.FC<{route: {params: {item: bookItemInterFace}}}> = ({
  route: {
    params: {item},
  },
}) => {
  const {authors, thumbnailUrl, title, longDescription} = item;

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          ...customPadding(0, 10, 20, 10),
        }}>
        <View
          style={{
            backgroundColor: colors.imageBg,
            width: '100%',
            height: rs(400),
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImagePreview
            source={{uri: thumbnailUrl}}
            borderRadius={10}
            styles={{
              height: rs(180),
              width: rs(120),
              alignItems: 'center',
              borderRadius: 10,
            }}
          />
          <Text
            style={[
              typographies.bodyLargeBold,
              {textAlign: 'center', ...customMargin(8)},
            ]}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', flexShrink: 1}}>
            <Text>By: </Text>
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
        </View>
        <View
          style={{
            ...customMargin(10, 0, 10),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={typographies.bodySmallBold}>Description</Text>
        </View>
        <Text style={typographies.bodySmall}>{longDescription}</Text>
      </ScrollView>
    </View>
  );
};

export default BookDetails;
