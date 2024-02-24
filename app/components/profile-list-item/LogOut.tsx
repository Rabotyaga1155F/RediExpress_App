import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

interface ILogOutProps {
  h1: string;
}

const LogOut: FC<ILogOutProps> = ({h1}) => {
  return (
    <TouchableOpacity>
      <View className={'mt-4 mb-4 border h-[62px] border-gray-300 px-2 py-3'}>
        <View className={'flex-row items-center my-auto'}>
          <Image
            source={require('../../../assets/images/icons/logout-profile-icon.png')}
          />
          <Text className={' ml-2 text-[#3A3A3A] text-[16px] font-medium '}>
            {h1}
          </Text>

          <Image
            source={require('../../../assets/images/icons/arrow-icon.png')}
            className={'absolute left-[330px]'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LogOut;
