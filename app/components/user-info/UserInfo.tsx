import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import {supabase} from '../../supabase.ts';

const UserInfo = () => {
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

  const [Balance, setBalance] = useState<any[]>([]);
  const [FullName, setFullName] = useState<any[]>([]);
  const [moneyState, setMoneyState] = useState<any>();
  const [showBalance, setShowBalance] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      let {data, error} = await supabase
        .from('UserPayment')
        .select('*')
        .eq('user_email', userEmail);

      setBalance(data || []);
    };
    const fetch2 = async () => {
      let {data, error} = await supabase
        .from('User')
        .select('*')
        .eq('EmailAdress', userEmail);

      setFullName(data || []);
      console.log(data);
    };
    fetch();
    fetch2();
  }, []);

  return (
    <View className={'mx-4 mt-4'}>
      <View className={'flex-row items-center'}>
        <Image
          source={sourceUri}
          className={' w-[60px] h-[60px] rounded-[40px]'}
        />
        <View className={'ml-3'}>
          <Text className={'text-[#3A3A3A] text-[16px] font-medium'}>
            {userInfo && userInfo.user && userInfo.user.name
              ? userInfo.user.name
              : FullName[0]
              ? FullName[0].FullName
              : 'Loading...'}
          </Text>
          <Text className={'text-[12px] text-[#3A3A3A]'}>
            Current balance:
            <Text className={'text-[#0560FA] font-medium'}>
              {' '}
              {showBalance
                ? Balance[0]
                  ? `N${Balance[0].balance}:00`
                  : 'Loading...'
                : '****'}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          className={'absolute left-[335px]'}
          onPress={prev => setShowBalance(prev => !prev)}>
          <Image
            source={require('../../../assets/images/icons/eye-slash.png')}
            className={''}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfo;
