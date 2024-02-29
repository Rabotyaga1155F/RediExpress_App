import React, {FC, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import SendAPackage from '../../../assets/images/home-navigation-images/SendAPackage.png';
import CustomerCare from '../../../assets/images/home-navigation-images/CustomerCare.png';
import FundYourWallet from '../../../assets/images/home-navigation-images/FundYourWallet.png';
import Chats from '../../../assets/images/home-navigation-images/ChatsWhite.png';
import HomeNavigationItem from './home-navigation-item/HomeNavigationItem.tsx';
import {useNavigation} from '@react-navigation/native';

const HomeNavigation: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const navigation = useNavigation();
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  return (
    <View>
      <Text className={'text-[14px] font-medium text-[#0560FA] mt-3  mb-3'}>
        What would you like to do
      </Text>
      <View className={'flex-row flex-wrap'}>
        <View className={'mb-3'}>
          <HomeNavigationItem
            setSelectedCategory={setSelectedCategory}
            imgName={'CustomerCare'}
            text={'Customer Care'}
            selected={selectedCategory === 'CustomerCare'}
            description={
              'Our customer care service line is available from 8 -9pm week days and 9 - 5 weekends - tap to call us today'
            }
          />
        </View>
        <View className={'ml-6'}></View>
        <HomeNavigationItem
          navigateTo={() => navigation.navigate('Statements' as never)}
          setSelectedCategory={setSelectedCategory}
          imgName={'SendAPackage'}
          text={'Send a package'}
          selected={selectedCategory === 'SendAPackage'}
          description={
            'Request for a driver to pick up or deliver your package for you'
          }
        />
        <HomeNavigationItem
          setSelectedCategory={setSelectedCategory}
          imgName={'FundYourWallet'}
          text={'Fund your wallet'}
          selected={selectedCategory === 'FundYourWallet'}
          description={
            'To fund your wallet is as easy as ABC, make use of our fast technology and top-up your wallet today'
          }
        />

        <View className={'ml-6'}></View>
        <HomeNavigationItem
          navigateTo={() => navigation.navigate('ChatsScreen' as never)}
          setSelectedCategory={setSelectedCategory}
          imgName={'Chats'}
          text={'Chats'}
          selected={selectedCategory === 'Chats'}
          description={'Search for available rider within your area'}
        />
      </View>
    </View>
  );
};

export default HomeNavigation;
