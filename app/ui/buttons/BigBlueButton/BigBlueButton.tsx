import React, {FC, PropsWithChildren} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IBigBlueButton} from './big-blue-button.types.ts';

const BigBlueButton: FC<PropsWithChildren<IBigBlueButton>> = ({
  children,
  onPress,
  disable,
}) => {
  return (
    <>
      {disable ? (
        <TouchableOpacity
          onPress={onPress}
          className={'rounded bg-[#A7A7A7] mx-6 h-[46px] mt-12'}>
          <Text
            className={'text-center my-auto text-white font-bold text-[16px]'}>
            {children}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          className={'rounded bg-[#0560FA] mx-6 h-[46px] mt-12'}>
          <Text
            className={'text-center my-auto text-white font-bold text-[16px]'}>
            {children}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default BigBlueButton;
