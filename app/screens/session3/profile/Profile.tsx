import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';
import UserInfo from '../../../components/user-info/UserInfo.tsx';
import EnableDarkmode from '../../../components/enable-darkmode/EnableDarkmode.tsx';
import ProfileListItem from '../../../components/profile-list-item/ProfileListItem.tsx';
import LogOut from '../../../components/profile-list-item/LogOut.tsx';
import {useNavigation} from '@react-navigation/native';

const Profile: FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Text
          className={
            'text-center pt-16  border-b border-gray-300 h-[108px] text-[#A7A7A7] font-medium text-[16px]'
          }>
          Profile
        </Text>
      </View>
      <UserInfo />
      <View className={'mt-4'} />
      <EnableDarkmode />

      <View className={'mx-4'}>
        <ProfileListItem
          h1={'Edit Profile'}
          h3={'Name, phone no, address, email ...'}
          imgName={'editProfile'}
        />
        <ProfileListItem
          onPress={() => navigation.navigate('Statements' as never)}
          h1={'Statements & Reports'}
          h3={'Download transaction details, orders, deliveries'}
          imgName={'statements'}
        />
        <ProfileListItem
          onPress={() => navigation.navigate('Notifications' as never)}
          h1={'Notification Settings'}
          h3={'mute, unmute, set location & tracking setting'}
          imgName={'notification'}
        />
        <ProfileListItem
          onPress={() => navigation.navigate('AddPaymentMethod' as never)}
          h1={'Card & Bank account settings'}
          h3={'change cards, delete card details'}
          imgName={'card'}
        />
        <ProfileListItem
          h1={'Referrals'}
          h3={'check no of friends and earn'}
          imgName={'referrals'}
        />
        <ProfileListItem
          h1={'About Us'}
          h3={'know more about us, terms and conditions'}
          imgName={'aboutus'}
        />
        <LogOut text={'Log Out'} />
      </View>
    </ScrollView>
  );
};

export default Profile;
