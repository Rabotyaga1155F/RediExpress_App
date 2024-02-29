import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

interface IHeaderProps {
  headerName: string;
  onBackButtonPress?: any;
}

const Header: FC<IHeaderProps> = ({headerName, onBackButtonPress}) => {
  return (
    <View className={'flex-row  border-b border-gray-300 justify-between'}>
      <TouchableOpacity onPress={onBackButtonPress}>
        <Image
          className={'ml-3 mt-[68px]'}
          source={require('../../../assets/images/icons/header-back-button.png')}
        />
      </TouchableOpacity>
      <Text
        className={
          'text-center mt-[68px] pb-[20px] text-[#A7A7A7] font-medium text-[16px]'
        }>
        {headerName}
      </Text>
      <View className={'w-[40px]'}></View>
    </View>
  );
};

export default Header;
