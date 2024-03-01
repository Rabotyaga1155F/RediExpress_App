import React, {FC, PropsWithChildren, ReactNode, useState} from 'react';
import {TextInput, View, Text, Image, TouchableOpacity} from 'react-native';

interface IBasicTextInputProps {
  name: string;
  placeholder: string;
  haveNoVisible?: boolean;
  onChangeText?: (value: string) => void;
}

const BasicTextInput: FC<IBasicTextInputProps> = ({
  name,
  placeholder,
  haveNoVisible,
  onChangeText,
}) => {
  const [textInputValue, setTextInputValue] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleToggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View className={'mx-6 mt-5'}>
      <Text className={'text-[14px] font-medium text-[#A7A7A7] mb-2'}>
        {name}
      </Text>
      <View
        className={
          'flex-row items-center border border-[#A7A7A7] rounded-[4px] px-[8px]'
        }>
        <TextInput
          value={textInputValue}
          placeholder={placeholder}
          placeholderTextColor={'#CFCFCF'}
          secureTextEntry={isHidden}
          className={'flex-1 text-[14px] text-black font-medium'}
          onChangeText={value => {
            setTextInputValue(value);
            if (onChangeText) {
              onChangeText(value);
            }
          }}></TextInput>
        {haveNoVisible && (
          <TouchableOpacity onPress={handleToggleVisibility}>
            <Image
              className={'ml-[8px] w-4 h-4'}
              source={require('../../../assets/images/icons/eye-slash.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default BasicTextInput;
