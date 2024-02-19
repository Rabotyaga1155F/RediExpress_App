import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Onboarding3 = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/onboarding-images/onboarding3.png')}
        className={' mt-12 mx-auto justify-center'}
      />
      <Text
        className={
          'mr-12 mt-12 ml-12 text-[#0560FA] text-center font-bold text-[24px]'
        }>
        Real-time Tracking
      </Text>
      <Text className={'mt-2 text-center text-black mr-14 ml-14'}>
        Track your packages/items from the comfort of your home till final
        destination
      </Text>
      <View className={'flex-row justify-center mx-4 mt-12'}>
        <TouchableOpacity
          className={
            'w-[342px] h-[46px] rounded bg-[#0560FA] border border-[#0560FA]'
          }>
          <Text className={'font-bold text-white  text-center my-auto'}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View className={'flex-row justify-center mt-3'}>
        <Text className={'text-[#A7A7A7] text-[14px]'}>
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Text className={'text-[#0560FA] ml-[1px] text-[14px] font-medium'}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding3;
