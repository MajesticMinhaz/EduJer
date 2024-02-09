import {useEffect, useRef, useState} from 'react';
import {dashboardHookSelector} from '../types/types';
import dummyData from '../../app/dummyData/data.json';
// for handle all state management
const useDashboardHook = () => {
  const search = useRef<string>('');
  const [data, setData] = useState<dashboardHookSelector>({
    page: 1,
    perPage: 10,
    isLoading: true,
    refreshing: false,
    hasMore: false,
    isGetting: false,
    books: [],
  });
  //   for load data
  const getData = async (page: number, perPage: number) => {
    try {
      const result: any[] = await new Promise(resolve => {
        setTimeout(() => {
          resolve(
            dummyData
              .filter(function (item: any) {
                return (
                  item.title
                    .toLowerCase()
                    .includes(search.current.toLowerCase()) ||
                  item.authors
                    .join(' ')
                    .toLowerCase()
                    .includes(search.current.toLowerCase()) ||
                  item.categories
                    .join(' ')
                    .toLowerCase()
                    .includes(search.current.toLowerCase())
                );
              })
              .slice(page === 1 ? 0 : page * perPage - perPage, page * perPage),
          );
        }, 3000);
      });
      let list: any[] = [];
      if (page > 1) {
        list = (data.books || []).concat(Array.isArray(result) ? result : []);
      } else {
        list = Array.isArray(result) ? result : [];
      }
      setData(prev => ({
        ...prev,
        books: list,
        isLoading: false,
        isGetting: true,
        refreshing: false,
        page: page + 1,
        hasMore: result?.length >= data.perPage ? true : false,
      }));
    } catch (error) {}
  };
  useEffect(() => {
    if (!data.isGetting && data.isLoading) {
      getData(data.page, data.perPage);
    }
  }, []);
  const handleChange = (text: string) => {
    search.current = text;
    setData(prev => ({
      ...prev,
      isLoading: true,
      page: 1,
      hasMore: false,
    }));
    getData(1, 10);
  };
  const {books, isGetting, isLoading, hasMore, refreshing} = data;
  const onRefresh = () => {
    setData(prev => ({
      ...prev,
      refreshing: true,
      page: 1,
      hasMore: false,
    }));
    getData(1, 10);
  };
  const loadMore = () => {
    data.hasMore && getData(data.page, data.perPage);
  };
  const handleSuccess = (_item: any) => {
    const updatedData = [...data.books];
    updatedData.unshift(_item);
    setData((prev: any) => ({...prev, books: [...updatedData]}));
  };
  return {
    books,
    isGetting,
    isLoading,
    hasMore,
    refreshing,
    search: search.current,
    handleChange,
    onRefresh,
    loadMore,
    handleSuccess,
  };
};

export default useDashboardHook;
