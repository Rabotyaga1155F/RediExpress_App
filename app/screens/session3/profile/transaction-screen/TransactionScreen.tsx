import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {IData} from '../statements/Statements.tsx';
import BigBlueButton from '../../../../ui/buttons/BigBlueButton/BigBlueButton.tsx';

type RootStackParamList = {
  TrackNumber: {trackNumber: string};
};

type NewDataRouteProp = RouteProp<RootStackParamList, 'TrackNumber'>;

const TransactionScreen = () => {
  const route = useRoute<NewDataRouteProp>();
  const data = route.params;
  const navigation = useNavigation();
  return (
    <View className={'items-center'}>
      <Image
        className={'mt-40'}
        source={require('../../../../../assets/images/succesful.png')}
      />
      <Text className={'mt-24 text-[#3A3A3A] font-medium text-[24px]'}>
        Transaction Successful
      </Text>
      <Text className={'text-[#3A3A3A] mt-1'}>
        Your rider is on the way to your destination
      </Text>
      <Text className={'text-[#3A3A3A] mt-1'}>
        Tracking Number{' '}
        <Text className={'text-[#0560FA]'}>{data?.trackNumber}</Text>
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Layout' as never)}
        className={
          'bg-[#0560FA] w-[342px] h-[46px] items-center rounded mt-40'
        }>
        <Text className={'text-white font-bold text-[16px] my-auto'}>
          Track my item
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Layout' as never)}
        className={
          'bg-white w-[342px] border border-[#0560FA] h-[46px] items-center rounded mt-2 '
        }>
        <Text className={'text-[#0506FA] font-bold text-[16px] my-auto'}>
          Go back to homepage
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionScreen;
