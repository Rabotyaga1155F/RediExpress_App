import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import editProfile from '../../../assets/images/icons/edit-profile-icon.png';
import statements from '../../../assets/images/icons/statements-profile-icon.png';
import notification from '../../../assets/images/icons/notification-profile-icon.png';
import card from '../../../assets/images/icons/card-profile-icon.png';
import referrals from '../../../assets/images/icons/referrals-profile-icon.png';
import aboutus from '../../../assets/images/icons/aboutus-profile-icon.png';
import navigation from '../../navigation/Navigation.tsx';

const imageMap: {[key: string]: any} = {
  editProfile: editProfile,
  statements: statements,
  notification: notification,
  card: card,
  referrals: referrals,
  aboutus: aboutus,
};

interface IProfileListItemProps {
  h1: string;
  h3?: string;
  imgName: string;
  onPress?: any;
}

const ProfileListItem: FC<IProfileListItemProps> = ({
  imgName,
  h3,
  h1,
  onPress,
}) => {
  const source = imageMap[imgName];
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={'mt-4 border h-[62px] border-gray-300 px-2 py-3 '}>
        <View className={'flex-row items-center'}>
          <Image
            source={source}
            className={' w-[19px] h-[19px] rounded-[40px]'}
          />
          <View className={'ml-3'}>
            <Text className={'text-[#3A3A3A] text-[16px] font-medium'}>
              {h1}
            </Text>
            <Text className={'text-[12px] text-[#A7A7A7]'}>{h3}</Text>
          </View>
          <Image
            source={require('../../../assets/images/icons/arrow-icon.png')}
            className={'absolute left-[330px]'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileListItem;
