import React from 'react';
import {Text, View} from 'react-native';
import ChatHeader from '../header/ChatHeader.tsx';
import EnterMessage from '../enter-message/EnterMessage.tsx';

const ChatRider = () => {
  return (
    <View>
      <ChatHeader />
      <View className={'mx-6'}>
        <View
          className={
            ' py-3  w-[200px] bg-[#0560FA] ml-auto rounded-[8px] mt-[22px]'
          }>
          <Text className={'text-white text-[12px] font-medium px-1.5 my-auto'}>
            Hello, Please check your phone, I just booked you to deliver my
            stuff
          </Text>
        </View>
        <View
          className={
            'py-3 w-[200px] bg-[#CFCFCF] mr-auto rounded-[8px] mt-[22px]'
          }>
          <Text
            className={'text-[#3A3A3A] text-[12px] font-medium px-1.5 my-auto'}>
            Thank you for contacting me.
          </Text>
        </View>
        <View
          className={
            'py-3 w-[200px] bg-[#CFCFCF] mr-auto rounded-[8px] mt-[22px]'
          }>
          <Text
            className={'text-[#3A3A3A] text-[12px] font-medium px-1.5 my-auto'}>
            I am already on my way to the pick up venue.
          </Text>
        </View>
        <View
          className={
            'py-3 w-[200px] bg-[#0560FA] ml-auto rounded-[8px] mt-[22px]'
          }>
          <Text className={'text-white text-[12px] font-medium px-1.5 my-auto'}>
            Alright, I wll be waiting
          </Text>
        </View>
        <EnterMessage />
      </View>
    </View>
  );
};

export default ChatRider;
