import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import NavigatorItem from './navigator-item/NavigatorItem.tsx';

interface INavigatorProps {
  selectedNavigator: any;
  setSelectedNavigator: any;
}

const Navigator: FC<INavigatorProps> = ({
  selectedNavigator,
  setSelectedNavigator,
}) => {
  return (
    <View className={'absolute bottom-0 w-full h-[45px]  '}>
      <View className={'flex-row justify-between mx-4'}>
        <NavigatorItem
          imgName={selectedNavigator === 'home' ? 'homeSelected' : 'home'}
          text={'Home'}
          onChange={setSelectedNavigator}
          selected={selectedNavigator === 'home'}
        />
        <NavigatorItem
          imgName={selectedNavigator == 'wallet' ? 'walletSelected' : 'wallet'}
          text={'Wallet'}
          onChange={setSelectedNavigator}
          selected={selectedNavigator === 'wallet'}
        />
        <NavigatorItem
          imgName={selectedNavigator == 'track' ? 'trackSelected' : 'track'}
          text={'Track'}
          onChange={setSelectedNavigator}
          selected={selectedNavigator === 'track'}
        />
        <NavigatorItem
          imgName={
            selectedNavigator == 'profile' ? 'profileSelected' : 'profile'
          }
          text={'Profile'}
          onChange={setSelectedNavigator}
          selected={selectedNavigator === 'profile'}
        />
      </View>
    </View>
  );
};

export default Navigator;
