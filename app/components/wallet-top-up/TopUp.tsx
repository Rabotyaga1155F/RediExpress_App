import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const TopUp = () => {
  return (
    <View className={'bg-[#CFCFCF] mt-4 items-center mx-4 rounded h-[116px]'}>
      <Text className={'text-[#3A3A3A] text-[16px] font-bold mt-1.5'}>
        Top Up
      </Text>

      <View className={'flex-row mt-2'}>
        <TouchableOpacity className={'w-[50px] h-[50px] mx-7'}>
          <View
            className={
              'bg-[#0560FA] rounded-3xl w-[50px] h-[50px] items-center'
            }>
            <Image
              className={'my-auto'}
              source={require('../../../assets/images/icons/bank-icon.png')}
            />
          </View>
          <Text className={'text-[#3A3A3A] mt-1 text-[12px] mx-auto'}>
            Bank
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className={'w-[50px] h-[50px] mx-7'}>
          <View
            className={
              'bg-[#0560FA] rounded-3xl w-[50px] h-[50px] items-center'
            }>
            <Image
              className={'my-auto'}
              source={require('../../../assets/images/icons/transfer-icon.png')}
            />
          </View>
          <Text className={'text-[#3A3A3A] mt-1 text-[12px] mx-auto'}>
            Transfer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className={'w-[50px] h-[50px] mx-7'}>
          <View
            className={
              'bg-[#0560FA] rounded-3xl w-[50px] h-[50px] items-center'
            }>
            <Image
              className={'my-auto'}
              source={require('../../../assets/images/icons/card-icon.png')}
            />
          </View>
          <Text className={'text-[#3A3A3A] mt-1 text-[12px] mx-auto'}>
            Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopUp;
