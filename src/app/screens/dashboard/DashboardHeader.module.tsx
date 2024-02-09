import {Text, FlatList} from 'react-native';
import React from 'react';
import {typographies} from '../../assets/typographies.style.asset';
import {customPadding} from '../../assets/styles/global.styles';
import data from '../../dummyData/popularItem.json';
import BookImageItem from '../../components/BookImageItem.component';
const DashboardHeader: React.FC<{search: string}> = ({search}) => {
  const renderItem = ({item}: {item: any}) => {
    return <BookImageItem item={item} />;
  };
  return (
    <>
      {!search && (
        <>
          <Text
            style={[
              typographies.bodyMediumBold,
              {...customPadding(0, 0, 10, 0)},
            ]}>
            Popular Books
          </Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{gap: 15}}
            keyExtractor={(_, index) => index.toString()}
            initialNumToRender={12}
          />
        </>
      )}
      <Text
        style={[typographies.bodyMediumBold, {...customPadding(10, 0, 10, 0)}]}>
        Trending Books
      </Text>
    </>
  );
};

export default DashboardHeader;
