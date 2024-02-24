import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import {supabase} from '../../supabase.ts';

const UserInfo = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  const userPhoto = userInfo?.userInfo?.user?.photo;

  const sourceUri = userPhoto
    ? {uri: userPhoto}
    : require('../../../assets/images/no-user.jpg');
  return (
    <View className={'mx-4 mt-4'}>
      <View className={'flex-row items-center'}>
        <Image
          source={sourceUri}
          className={' w-[60px] h-[60px] rounded-[40px]'}
        />
        <View className={'ml-3'}>
          <Text className={'text-[#3A3A3A] text-[16px] font-medium'}>
            {userInfo &&
            userInfo.userInfo &&
            userInfo.userInfo.user &&
            userInfo.userInfo.user.name
              ? userInfo.userInfo.user.name
              : 'no user'}
          </Text>
          <Text className={'text-[12px] text-[#3A3A3A]'}>
            Current balance:
            <Text className={'text-[#0560FA] font-medium'}> N10,712:00</Text>
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/icons/eye-slash.png')}
          className={'ml-[120px]'}
        />
      </View>
    </View>
  );
};

export default UserInfo;
