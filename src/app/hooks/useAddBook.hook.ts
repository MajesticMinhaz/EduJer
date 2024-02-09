import {Alert} from 'react-native';
import {useRef} from 'react';
import {bookItemInterFace} from '../types/types';
import dummyData from '../dummyData/data.json';
import {useCustomNavigation} from '../packages/navigation.package';
const useAddBook = (success: (params: any) => void) => {
  let values = useRef<bookItemInterFace>({
    _id: dummyData.length + 1,
    authors: [],
    categories: [],
    publishedDate: {date: new Date().toISOString()},
    longDescription: '',
    shortDescription: '',
    thumbnailUrl: '',
    isbn: '11123',
    pageCount: 123,
    status: 'PUBLISH',
    title: '',
  });
  const navigation = useCustomNavigation();
  const onChange = (value: string, name: string) => {
    switch (name) {
      case 'authors':
        let authors = values.current;
        authors.authors = [];
        authors.authors.push(value);
        values.current = authors;
        return;
      case 'categories':
        let categories = values.current;
        categories.categories = [];
        categories.categories.push(value);
        values.current = categories;
        return;
      default:
        (values.current as any)[name] = value;
    }
  };
  const handleSubmit = () => {
    if (
      values.current.title &&
      values.current.authors &&
      values.current.categories &&
      values.current.longDescription &&
      values.current.shortDescription &&
      values.current.thumbnailUrl
    ) {
      success(values.current);
      (dummyData as any).unshift(values.current);
      navigation.goBack();
    } else {
      Alert.alert('Invalid Data', 'Please input valid data!');
    }
  };
  return {onChange, values: values.current, handleSubmit};
};

export default useAddBook;
