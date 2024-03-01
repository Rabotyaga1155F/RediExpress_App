import React, {FC, useState} from 'react';
import {TextInput, View} from 'react-native';

interface OtrNumberProps {
  onChangeText?: (value: string) => void;
}

const OtpNumberComponent: FC<OtrNumberProps> = ({onChangeText}) => {
  const [textInputValue, setTextInputValue] = useState<string>('');
  return (
    <View>
      {textInputValue == '' ? (
        <TextInput
          className={
            'w-[32px] h-[32px] text-[18px] p-0 border text-center border-[#A7A7A7]'
          }
          keyboardType={'numeric'}
          onChangeText={value => {
            setTextInputValue(value);
            if (onChangeText) {
              onChangeText(value);
            }
          }}
          maxLength={1}></TextInput>
      ) : (
        <TextInput
          className={
            'w-[32px] h-[32px] text-[18px] p-0 border text-center border-blue-700'
          }
          keyboardType={'numeric'}
          onChangeText={value => {
            setTextInputValue(value);
            if (onChangeText) {
              onChangeText(value);
            }
          }}
          maxLength={1}></TextInput>
      )}
    </View>
  );
};

export default OtpNumberComponent;
