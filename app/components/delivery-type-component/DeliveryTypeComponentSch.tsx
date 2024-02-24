import React, {FC} from 'react';
import {DeliveryType} from '../../screens/session3/profile/statements/Statements.tsx';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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

const DeliveryTypeComponentSch: FC<IDeliveryTypeProps> = ({
  selectedType,
  text,
  imgName,
  onPress,
  onLongPress,
}) => {
  const source = imageMap[imgName];
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      className={
        selectedType == DeliveryType.scheduled
          ? 'flex-col bg-[#0560FA] w-[159px] h-[75px] rounded-[8px]'
          : 'flex-col bg-white w-[159px] h-[75px] rounded-[8px]'
      }>
      <View className={'my-auto items-center'}>
        <Image source={source} />
        <Text
          className={
            selectedType == DeliveryType.scheduled
              ? 'text-white font-medium'
              : 'text-gray-700 font-medium'
          }>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryTypeComponentSch;
