import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface IChatListItemProps {
  name: any;
}

const ChatListItem: FC<IChatListItemProps> = ({name}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('ChatRider' as never)}
      className={
        'flex-row items-center border border-[#A7A7A7] rounded-[10px] mt-4 px-3 py-3'
      }>
      <Image
        className={'w-[60] h-[60] rounded-[60px]'}
        source={require('../../../assets/images/chatimage.png')}
      />
      <View className={'ml-2'}>
        <Text className={'text-[#3A3A3A] text-[16px] font-bold'}>{name}</Text>
        <Text className={'text-[#3A3A3A] text-[12px]'}>
          Alright, I wll be waiting
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;
