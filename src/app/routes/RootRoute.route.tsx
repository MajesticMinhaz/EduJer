import React from 'react';
import Splash from '../screens/splash/Splash.module';
import Dashboard from '../screens/dashboard/Dashboard.module';
import {customCreateStackNavigator} from '../packages/navigation.package';
import {screens} from './routeName';
import {colors} from '../assets/colors.style.asset';
import {typographies} from '../assets/typographies.style.asset';
import BookDetails from '../screens/book-details/BookDetails.module';
import AddBook from '../screens/add-book/AddBook.module';

const RootRoute = () => {
  const Stack = customCreateStackNavigator();
  const screenOptions = () => ({
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.secondary,
    animation: 'slide_from_right',
    animationDuration: 400,
    headerTitleStyle: typographies.bodyMediumBold,
  });
  return (
    <Stack.Navigator
      screenOptions={{
        ...screenOptions,
        headerBackTitleVisible: false,
      }}
      initialRouteName={screens.splash}>
      <Stack.Group>
        <Stack.Screen
          name={screens.splash}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screens.dashboard}
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screens.bookDetails}
          component={BookDetails}
          options={{title: 'Details'}}
        />
        <Stack.Screen
          name={screens.addBook}
          component={AddBook}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootRoute;
