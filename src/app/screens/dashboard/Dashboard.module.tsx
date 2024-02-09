import {ActivityIndicator, FlatList, StatusBar, View} from 'react-native';
import React from 'react';
import Container from '../../components/layouts/Container.layout';
import {customPadding} from '../../assets/styles/global.styles';
import {colors} from '../../assets/colors.style.asset';
import BookItem from '../../components/BookItem.component';
import DashboardHeader from './DashboardHeader.module';
import HeaderSearchInput from '../../components/HeaderSearchInput.core.component';
import useDashboardHook from '../../hooks/useDashboard.hook';
import rs from '../../assets/responsiveSize.style.asset';
import EmptyContent from '../../components/EmptyContent.core.component';
const Dashboard: React.FC = () => {
  const {
    books,
    isLoading,
    hasMore,
    refreshing,
    search,
    handleChange,
    onRefresh,
    loadMore,
    handleSuccess,
  } = useDashboardHook();
  const renderItem = ({item}: {item: any}) => {
    return <BookItem item={item} />;
  };
  return (
    <Container>
      <HeaderSearchInput
        onChange={handleChange}
        success={handleSuccess}
        defaultValue={search}
      />
      <FlatList
        data={books}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListHeaderComponent={<DashboardHeader search={search} />}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        initialNumToRender={12}
        onEndReached={loadMore}
        ListEmptyComponent={
          <EmptyContent text={'No books found!'} forLoading={isLoading} />
        }
        contentContainerStyle={
          books?.length > 0
            ? {gap: 10, ...customPadding(0, 20, 0, 20)}
            : {flexGrow: 1, gap: 10, ...customPadding(10, 20, 0, 20)}
        }
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        onEndReachedThreshold={0.25}
        ListFooterComponent={
          hasMore ? (
            <View style={{height: rs(30)}}>
              <ActivityIndicator color={colors.primary} />
            </View>
          ) : (
            <></>
          )
        }
      />
    </Container>
  );
};

export default Dashboard;
