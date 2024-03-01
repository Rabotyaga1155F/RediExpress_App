import React, {FC} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CallRider: FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className={'items-center mt-24'}>
        <Image
          className={'w-[84px] h-[84px] rounded-[84px]'}
          source={require('../../../assets/images/test-avatar.jpg')}
        />
        <Text className={'mt-2 text-[#0560FA] font-bold text-[19px]'}>
          Chinoso James
        </Text>
        <Text className={'font-bold text-[19px] mt-1 mb-1'}>
          +234 603 6543 7265
        </Text>
        <Text className={'text-[14px] text-[#0560FA]'}>calling...</Text>
      </View>
      <View className={'h-[332px] bg-gray-300 mx-6 fixed top-24 rounded-[8px]'}>
        <View className={'flex-row justify-between mx-14 mt-12'}>
          <Pressable>
            <Image
              source={require('../../../assets/images/icons/plus-icon.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../assets/images/icons/pause-icon.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../assets/images/icons/camera-icon.png')}
            />
          </Pressable>
        </View>
        <View className={'flex-row justify-between mx-14 mt-12'}>
          <Pressable>
            <Image
              source={require('../../../assets/images/icons/volume-icon.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../assets/images/icons/microphone-icon.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../assets/images/icons/keypad-icon.png')}
            />
          </Pressable>
        </View>
        <View
          className={
            'mx-auto my-auto  w-[71px] h-[68px]  mt-16 bg-[#ED3A3A] rounded-[61px]'
          }>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              className={'mx-auto mt-5'}
              source={require('../../../assets/images/icons/cellphone-icon.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CallRider;
