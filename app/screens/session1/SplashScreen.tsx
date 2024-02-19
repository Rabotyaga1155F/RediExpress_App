import React from 'react';
import {Image, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View className={'flex-1 justify-center items-center'}>
      <Image source={require('../../../assets/images/logo.png')} />
    </View>
  );
};

export default SplashScreen;
