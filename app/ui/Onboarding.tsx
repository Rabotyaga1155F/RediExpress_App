import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Onboarding = ({navigation}: any) => {
  return (
    <View>
      <Image
        source={require('../../assets/images/onboarding-images/onboarding1.png')}
        className={' mt-24 mx-auto justify-center'}
      />
      <Text
        className={
          'mr-12 ml-12 text-[#0560FA] text-center font-bold text-[24px]'
        }>
        Quick Delivery At Your Doorstep
      </Text>
      <Text className={'mt-4 text-center text-black mr-20 ml-20'}>
        Enjoy quick pick-up and delivery to your destination
      </Text>
      <View className={'flex-row justify-between mx-4 mt-12'}>
        <TouchableOpacity
          className={'w-[100px] h-[50px] rounded border border-[#0560FA]'}>
          <Text className={'font-bold text-[#0560FA]  text-center my-auto'}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            'w-[100px] h-[50px] rounded bg-[#0560FA] border border-[#0560FA]'
          }>
          <Text className={'font-bold text-white  text-center my-auto'}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
