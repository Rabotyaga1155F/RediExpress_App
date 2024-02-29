import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';

const EnterMessage = () => {
  return (
    <View className={'flex-row items-center bottom-auto mt-[270px]'}>
      <Pressable>
        <Image
          className={'-ml-1'}
          source={require('../../../assets/images/icons/emoji-icon.png')}
        />
      </Pressable>
      <View className={'flex-1 ml-2'}>
        <TextInput
          className={'bg-[#CFCFCF] rounded-[8px] pl-4 '}
          placeholder={'Enter message'}
        />
      </View>
      <Pressable>
        <Image
          className={'-mr-3'}
          source={require('../../../assets/images/icons/send-icon.png')}
        />
      </Pressable>
    </View>
  );
};

export default EnterMessage;
