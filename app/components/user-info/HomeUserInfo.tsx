import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import {supabase} from '../../supabase.ts';
import {useNavigation} from '@react-navigation/native';

const HomeUserInfo = () => {
  const [FullName, setFullName] = useState<any[]>([]);

  const navigation = useNavigation();

  const userInfoData = useSelector((state: RootState) => state.user);
  const userInfo = userInfoData.userInfo;
  const userPhoto = userInfoData?.userInfo?.user?.photo;

  const sourceUri = userPhoto
    ? {uri: userPhoto}
    : require('../../../assets/images/no-user.jpg');

  const userEmailWithGoogleAuth = userInfoData?.userInfo?.user?.email;
  let userEmail =
    userEmailWithGoogleAuth === undefined
      ? userInfoData.userInfo
      : userEmailWithGoogleAuth;

  useEffect(() => {
    const fetch = async () => {
      let {data, error} = await supabase
        .from('User')
        .select('*')
        .eq('EmailAdress', userEmail);

      setFullName(data || []);
      console.log(data);
    };
    fetch();
  }, []);
  return (
    <View
      className={
        'flex-row justify-between items-center bg-[#0560FA] h-[90px] rounded-[8px] mt-6 pl-2 pr-3'
      }>
      <View className={'border border-white rounded-[30px]'}>
        <Image
          source={sourceUri}
          className={'w-[60px] h-[60px] rounded-[40px]'}
        />
      </View>
      <View>
        <Text className={'text-white mr-7 text-[24px] font-medium'}>
          {userInfo && userInfo.user && userInfo.user.name
            ? `${userInfo.user.name}!`
            : FullName[0]
            ? FullName[0].FullName
            : 'Loading...'}
        </Text>
        <Text className={'text-[12px] text-[#CFCFCF]'}>
          We trust you are having a great time
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications' as never)}>
        <Image
          source={require('../../../assets/images/icons/notification-icon.png')}
          className={' rounded-[40px]'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeUserInfo;
