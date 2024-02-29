import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Onboarding2 = ({navigation}: any) => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/onboarding-images/onboarding2.png')}
        className={' mt-12 mx-auto justify-center'}
      />
      <Text
        className={
          'mr-12 mt-12 ml-12 text-[#0560FA] text-center font-bold text-[24px]'
        }>
        Flexible Payment
      </Text>
      <Text className={'mt-2 text-center text-black mr-20 ml-20'}>
        Different modes of payment either before and after delivery without
        stress
      </Text>
      <View className={'flex-row justify-between mx-4 mt-12'}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding3')}
          className={'w-[100px] h-[50px] rounded border border-[#0560FA]'}>
          <Text className={'font-bold text-[#0560FA]  text-center my-auto'}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding3')}
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

export default Onboarding2;
