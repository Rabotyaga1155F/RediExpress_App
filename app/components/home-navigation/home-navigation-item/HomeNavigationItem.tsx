import React, {FC, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CustomerCare from '../../../../assets/images/home-navigation-images/CustomerCare.png';
import CustomerCareWhite from '../../../../assets/images/home-navigation-images/CustomerCareWhite.png';
import SendAPackage from '../../../../assets/images/home-navigation-images/SendAPackage.png';
import SendAPackageWhite from '../../../../assets/images/home-navigation-images/SendAPackageWhite.png';
import FundYourWallet from '../../../../assets/images/home-navigation-images/FundYourWallet.png';
import FundYourWalletWhite from '../../../../assets/images/home-navigation-images/FundYourWalletWhite.png';
import Chats from '../../../../assets/images/home-navigation-images/Chats.png';
import ChatsWhite from '../../../../assets/images/home-navigation-images/ChatsWhite.png';
import {useNavigation} from '@react-navigation/native';
import * as constants from 'constants';

interface IHomeNavigationItemProps {
  imgName: string;
  text: string;
  description: string;
  setSelectedCategory: any;
  selected: boolean;
  navigateTo?: any;
}

const imageMap: {[key: string]: any} = {
  CustomerCare: CustomerCare,
  CustomerCareWhite: CustomerCareWhite,
  SendAPackage: SendAPackage,
  SendAPackageWhite: SendAPackageWhite,
  FundYourWallet: FundYourWallet,
  FundYourWalletWhite: FundYourWalletWhite,
  Chats: Chats,
  ChatsWhite: ChatsWhite,
};

const HomeNavigationItem: FC<IHomeNavigationItemProps> = ({
  imgName,
  description,
  text,
  setSelectedCategory,
  selected,
  navigateTo,
}) => {
  const source = selected ? imageMap[`${imgName}White`] : imageMap[imgName];
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={navigateTo}
      onLongPress={() => setSelectedCategory(imgName)}>
      <View
        style={{elevation: 1}}
        className={
          selected
            ? 'w-[159px] h-[159px] bg-[#0560FA] flex-col justify-center rounded-[8px] '
            : 'w-[159px] h-[159px] bg-gray-200 flex-col justify-center rounded-[8px] '
        }>
        <Image className={'ml-4'} source={source} />
        <Text
          className={
            selected
              ? ' ml-3 text-[16px] text-white  font-medium '
              : ' ml-3 text-[16px]  font-medium text-[#0560FA]'
          }>
          {text}
        </Text>
        <Text
          className={
            selected
              ? ' ml-3 text-[9px] text-white'
              : ' ml-3 text-[9px] text-[#3A3A3A]'
          }>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeNavigationItem;
