import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import FindInput from '../../../ui/inputs/find-input/FindInput.tsx';
import HomeUserInfo from '../../../components/user-info/HomeUserInfo.tsx';
import SpecialForYou from '../../../components/spicial-for-you/SpecialForYou.tsx';
import HomeNavigation from '../../../components/home-navigation/HomeNavigation.tsx';

const Home = () => {
  return (
    <View className={'mx-6'}>
      <FindInput placeholder={'Search services'} />
      <HomeUserInfo />
      <SpecialForYou />
      <HomeNavigation />
    </View>
  );
};

export default Home;
