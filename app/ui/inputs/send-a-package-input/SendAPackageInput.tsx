import React, {FC} from 'react';
import {TextInput, View} from 'react-native';

interface IInputProps {
  placeholder: string;
  onChangeText?: any;
}

const SendAPackageInput: FC<IInputProps> = ({placeholder, onChangeText}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      className={
        'py-1.5 text-[#3A3A3A] my-1 text-[14px] rounded px-4 border border-gray-300'
      }
      placeholder={placeholder}
      placeholderTextColor={'#CFCFCF'}
    />
  );
};

export default SendAPackageInput;
