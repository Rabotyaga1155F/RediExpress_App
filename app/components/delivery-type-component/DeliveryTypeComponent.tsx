import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DeliveryType} from '../../screens/session3/profile/statements/Statements.tsx';
import home from '../../../assets/images/navigator-icons/home.png';
import homeSelected from '../../../assets/images/navigator-icons/homeSelected.png';
import profile from '../../../assets/images/navigator-icons/profile.png';
import profileSelected from '../../../assets/images/navigator-icons/profileSelected.png';
import track from '../../../assets/images/navigator-icons/track.png';
import trackSelected from '../../../assets/images/navigator-icons/trackSelected.png';
import wallet from '../../../assets/images/navigator-icons/wallet.png';
import walletSelected from '../../../assets/images/navigator-icons/walletSelected.png';
import clock from '../../../assets/images/icons/clock-icon.png';
import calendar from '../../../assets/images/icons/calendar-icon.png';
interface IDeliveryTypeProps {
  selectedType: DeliveryType;
  text: string;
  imgName: string;
  onPress: any;
  onLongPress: any;
}

const imageMap: {[key: string]: any} = {
  clock: clock,
  calendar: calendar,
};

const DeliveryTypeComponent: FC<IDeliveryTypeProps> = ({
  selectedType,
  text,
  imgName,
  onPress,
  onLongPress,
}) => {
  const source = imageMap[imgName];
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      className={
        selectedType == DeliveryType.instant
          ? 'flex-col bg-[#0560FA] w-[159px] h-[75px] rounded-[8px]'
          : 'flex-col bg-white w-[159px] h-[75px] rounded-[8px]'
      }>
      <View className={'my-auto items-center'}>
        <Image source={source} />
        <Text
          className={
            selectedType == DeliveryType.instant
              ? 'text-white font-medium'
              : 'text-gray-700 font-medium'
          }>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryTypeComponent;
