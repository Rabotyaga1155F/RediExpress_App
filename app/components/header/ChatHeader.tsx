import React, {FC} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ChatHeader: FC = () => {
  const navigation = useNavigation();
  return (
    <View className={'border-b border-gray-300 h-[108px]'}>
      <View className={'flex-row justify-between my-auto mx-6 items-center'}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/images/icons/header-back-button.png')}
          />
        </Pressable>
        <View className={'flex-row '}>
          <Image
            className={'h-[60] w-[60px] rounded-[60px]'}
            source={require('../../../assets/images/chatimage.png')}
          />
          <Text className={'text-[16px] text-[#3A3A3A] mt-2 ml-2'}>
            Chinoso James
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate('CallRider' as never)}>
          <Image
            source={require('../../../assets/images/icons/phone-icon.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatHeader;
