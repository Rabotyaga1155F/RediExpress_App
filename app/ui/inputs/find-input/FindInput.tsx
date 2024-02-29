import React, {FC} from 'react';
import {Image, TextInput, TextInputAndroidProps, View} from 'react-native';

interface IFindInputProps {
  placeholder: string;
}

const FindInput: FC<IFindInputProps> = ({placeholder}) => {
  return (
    <View
      className={
        'flex-row mt-12 pl-2 pr-4 items-center bg-[#CFCFCF] justify-between h-[44px] rounded'
      }>
      <TextInput placeholder={placeholder} />
      <Image
        source={require('../../../../assets/images/icons/search-icon.png')}
      />
    </View>
  );
};

export default FindInput;
