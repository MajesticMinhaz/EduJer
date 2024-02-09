import React from 'react';
import {CustomSafeAreaProvider} from './app/packages/safeAreaContext.package';
import {CustomNavigationContainer} from './app/packages/navigation.package';
import RootRoute from './app/routes/RootRoute.route';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const MainIndex = () => {
  return (
    <CustomSafeAreaProvider>
      <CustomNavigationContainer>
        <RootRoute />
      </CustomNavigationContainer>
    </CustomSafeAreaProvider>
  );
};

export default MainIndex;
