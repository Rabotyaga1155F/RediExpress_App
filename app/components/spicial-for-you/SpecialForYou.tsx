import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {red50} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const SpecialForYou = () => {
  return (
    <View>
      <View className={'flex-row justify-between my-2 items-center'}>
        <Text className={'text-[#EC8000] font-medium text-[14px]'}>
          Special for you
        </Text>
        <Image
          source={require('../../../assets/images/icons/arrow-right-icon.png')}
        />
      </View>

      <ScrollView horizontal={true}>
        <ImageBackground
          source={require('../../../assets/images/home-h-scroll-images/FirstItem.jpg')}
          className={'w-[166px] mr-3 h-[64px]'}
          borderRadius={8}
          resizeMode="cover">
          <View className={'my-auto ml-1'}>
            <Text className={'text-white'}>Tech Meetup </Text>
            <Text className={'text-white'}>coming soon</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/images/home-h-scroll-images/SecondItem.jpg')}
          className={'w-[166px] mr-3 h-[64px]'}
          borderRadius={8}
          resizeMode="cover">
          <View
            className={
              'rounded-[16px] w-[76px] h-[38px] bg-[#ED3A3A] my-auto  mx-auto opacity-70'
            }>
            <View className={'items-center'}>
              <Text className={'text-[#EBBC2E] text-[12px]'}>Love</Text>
              <Text className={'text-[#EBBC2E] text-[12px]'}>Revolution</Text>
            </View>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/images/home-h-scroll-images/ThirdIcon.jpg')}
          className={'w-[166px] mr-3 h-[64px]'}
          borderRadius={8}
          resizeMode="cover"></ImageBackground>
        <ImageBackground
          source={require('../../../assets/images/home-h-scroll-images/FourthIcon.jpg')}
          className={'w-[166px] mr-3 h-[64px]'}
          borderRadius={8}
          resizeMode="cover"></ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SpecialForYou;
