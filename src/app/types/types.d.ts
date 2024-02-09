import {ViewStyle} from 'react-native';

interface iconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}
interface searchComponentProps {
  onChange: (text: string) => void;
  defaultValue?: string;
  cancelHandler?: () => void;
  border?: 'showBorder' | 'noBorder';
  style?: ViewStyle;
  success: any;
}
interface bookItemInterFace {
  _id: number;
  authors: string[];
  categories: string[];
  title?: string;
  shortDescription?: string;
  thumbnailUrl?: string;
  publishedDate: {date: string};
  status?: string;
  isbn?: string;
  pageCount?: number;
  longDescription?: string;
}

interface dashboardHookSelector {
  page: number;
  perPage: number;
  isLoading: boolean;
  refreshing: boolean;
  isGetting: boolean;
  hasMore: boolean;
  books: any[];
}
interface inputProps {
  placeholder?: string;
  onChangeText: (
    value: any,
    name?: any,
    validationRules?: boolean | any | undefined,
  ) => void;
  defaultValue?: any;
  name?: string | any | undefined;
  validationRules?: () => boolean | undefined | any;
  inputProps?: object;
  label?: string;
}
interface multilineProps {
  placeholder?: string;
  onChangeText: (
    value: any,
    name?: any,
    validationRules?: boolean | any | undefined,
  ) => void;
  defaultValue?: any;
  name?: string | any | undefined;
  validationRules?: () => boolean | undefined | any;
  inputProps?: object;
  placeholderTextColor?: string;
  label?: string;
}
interface rightLeftActionProps {
  border?: 'showBorder' | 'noBorder';
  containerStyles?: object;
  leftIcon?: ReactElement;
  leftIconHandler?: () => void | undefined;
  title?: string;
  right?: ReactElement | string;
  rightHandler?: () => void;
  rightHandlerDisable?: boolean;
  isAnimating?: boolean;
}
export {
  iconProps,
  bookItemInterFace,
  dashboardHookSelector,
  searchComponentProps,
  inputProps,
  multilineProps,
  rightLeftActionProps,
};
