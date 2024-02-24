import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../../../../components/header/Header.tsx';

const Notifications = ({navigation}: any) => {
  return (
    <View>
      <Header
        headerName={'Notifications'}
        onBackButtonPress={() => navigation.navigate('Layout')}
      />
      <View className={'flex-col items-center mt-[200px]'}>
        <Image
          source={require('../../../../../assets/images/icons/notification.png')}
        />
        <Text className={'text-[#3A3A3A] text-[16px] font-medium'}>
          You have no notifications
        </Text>
      </View>
    </View>
  );
};

export default Notifications;
