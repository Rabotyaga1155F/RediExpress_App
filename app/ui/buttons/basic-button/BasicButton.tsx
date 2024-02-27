import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IBasicButton} from './basic-button.types.ts';

const BasicButton: FC<IBasicButton> = ({onPress, children}) => {
  return (
    <TouchableOpacity
      className={'rounded bg-[#0560FA] mt-8 mb-2 h-[46px]'}
      onPress={onPress}>
      <Text className={'text-center my-auto text-white font-bold text-[16px]'}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default BasicButton;
