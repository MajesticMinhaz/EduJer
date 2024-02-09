// splash screen module design and implement
import {StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {splashStyles as styles} from './splash.style';
import ImagePreview from '../../components/ImagePreview.core.component';
import {imageLink} from '../../assets/images/link.image.asset';
import {colors} from '../../assets/colors.style.asset';
import {useCustomNavigation} from '../../packages/navigation.package';
import {screens} from '../../routes/routeName';

const Splash: React.FC = () => {
  const navigation = useCustomNavigation<any>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screens.dashboard);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <ImagePreview source={imageLink.logo} />
    </View>
  );
};

export default Splash;
