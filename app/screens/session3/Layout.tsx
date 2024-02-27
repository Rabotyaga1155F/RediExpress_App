import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Navigator from '../../components/navigator/Navigator.tsx';
import Profile from './profile/Profile.tsx';
import Home from './home/Home.tsx';
import Wallet from './wallet/Wallet.tsx';
import Track from './track/Track.tsx';

const Layout = ({navigation}: any) => {
  const [selectedNavigator, setSelectedNavigator] = useState('home');
  return (
    <View className={'min-h-full relative'}>
      <View className={'pb-[45px]'}>
        {selectedNavigator === 'profile' ? (
          <Profile />
        ) : selectedNavigator === 'home' ? (
          <Home />
        ) : selectedNavigator === 'wallet' ? (
          <Wallet />
        ) : (
          selectedNavigator === 'track' && <Track />
        )}
      </View>
      <Navigator
        selectedNavigator={selectedNavigator}
        setSelectedNavigator={setSelectedNavigator}
      />
    </View>
  );
};

export default Layout;
