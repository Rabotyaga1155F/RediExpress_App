import React, {useEffect, useState} from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {DeliveryType, IData} from './Statements.tsx';
import Header from '../../../../components/header/Header.tsx';
import {generateTrack} from '../../../../utils/random-track.ts';
import {supabase} from '../../../../supabase.ts';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store.ts';

type RootStackParamList = {
  FormData: {FormData: IData};
};

type NewDataRouteProp = RouteProp<RootStackParamList, 'FormData'>;

const StatementsResult = () => {
  const [trackNumber, setTrackNumber] = useState(generateTrack);
  const route = useRoute<NewDataRouteProp>();
  const data = route.params;
  const navigation = useNavigation();
  const userInfo = useSelector((state: RootState) => state.user);
  const userEmailWithGoogleAuth = userInfo?.userInfo?.user?.email;

  const calculateTotal = () => {
    let deliveryCharge = 2500;
    if (data.FormData.deliveryType === DeliveryType.instant) {
      deliveryCharge += 300;
    } else {
      deliveryCharge += 100;
    }
    const taxAndServiceCharges = 200;
    const totalPackageCost = deliveryCharge + taxAndServiceCharges;

    return totalPackageCost;
  };
  const [userBalance, setUserBalance] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      let {data, error} = await supabase
        .from('UserPayment')
        .select('*')
        .eq(
          'user_email',
          userEmailWithGoogleAuth === undefined
            ? userInfo.userInfo
            : userEmailWithGoogleAuth,
        );

      setUserBalance(data || []);
      console.log(data);
    };
    fetch();
  }, []);

  return (
    <View>
      <Header
        onBackButtonPress={() => navigation.goBack()}
        headerName={'Send a package'}
      />
      <View className={'mx-6'}>
        <Text className={'text-[16px] font-medium text-[#0560FA]  mt-4'}>
          Package Information
        </Text>
        <Text className={'text-[#3A3A3A] text-[12px] mt-2 mb-1'}>
          Origin Details
        </Text>
        <Text className={'text-[#A7A7A7] text-[12px]'}>
          {data.FormData.originAdress} , {data.FormData.originCity}
        </Text>
        <Text className={'text-[#A7A7A7] text-[12px] my-1'}>
          {data.FormData.originPhoneNumber}
        </Text>
      </View>
      <View className={'mx-6'}>
        <Text className={'text-[#3A3A3A] text-[12px] mt-2 mb-1'}>
          Destination Details
        </Text>
        <Text className={'text-[#A7A7A7] text-[12px]'}>
          {data.FormData.destinationAdress} , {data.FormData.destinationCity}
        </Text>
        <Text className={'text-[#A7A7A7] text-[12px] my-1'}>
          {data.FormData.destinationPhoneNumber}
        </Text>
      </View>
      <View className={'mx-6'}>
        <Text className={'text-[#3A3A3A] text-[12px] mt-2 mb-1'}>
          Other Details
        </Text>
        <View className={'flex-row justify-between'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Package Items</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            {data.FormData.packageItems}
          </Text>
        </View>
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Weight of Items</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            {data.FormData.weightItems}
          </Text>
        </View>
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Worth of Items</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            {data.FormData.itemsPrice}
          </Text>
        </View>
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Tracking Number</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>{trackNumber}</Text>
        </View>
        <View className={'border border-b-0 border-[#A7A7A7] mt-10'} />
        <Text className={'text-[16px] font-medium text-[#0560FA]  mt-4'}>
          Charges
        </Text>
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Delivery Charges</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>N2,500.00</Text>
        </View>
        {data.FormData.deliveryType === DeliveryType.instant ? (
          <View className={'flex-row justify-between mt-2'}>
            <Text className={'text-[#A7A7A7] text-[12px]'}>
              Instant delivery
            </Text>
            <Text className={'text-[12px] text-[#EC8000]'}>N300.00</Text>
          </View>
        ) : (
          <View className={'flex-row justify-between mt-2'}>
            <Text className={'text-[#A7A7A7] text-[12px]'}>
              Scheduled delivery
            </Text>
            <Text className={'text-[12px] text-[#EC8000]'}>N100.00</Text>
          </View>
        )}
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>
            Tax and Service Charges
          </Text>
          <Text className={'text-[12px] text-[#EC8000]'}>N200.00</Text>
        </View>
        <View className={'border border-b-0 border-[#A7A7A7] mt-2'} />
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Package total</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            N{calculateTotal().toFixed(2)}
          </Text>
        </View>
        <View className={'flex-row justify-between mt-6'}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className={
              'w-[158px] h-[48px] border border-[#0560FA] rounded-[8px] items-center flex-row justify-center'
            }>
            <Text className={'text-[#0560FA] text-[16px] font-bold py-2 px-3 '}>
              Edit Package
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await supabase.from('Package').insert({
                origin_address: data.FormData.originAdress,
                origin_city: data.FormData.originCity,
                origin_number: data.FormData.originPhoneNumber,
                destination_address: data.FormData.destinationAdress,
                destination_city: data.FormData.destinationCity,
                destination_number: data.FormData.destinationPhoneNumber,
                package_items: data.FormData.packageItems,
                weight_items: data.FormData.packageItems,
                worth_items: data.FormData.itemsPrice,
                track_number: trackNumber,
                total_price: calculateTotal(),
                delivery_type: data.FormData.deliveryType,
                sender_email:
                  userEmailWithGoogleAuth === undefined
                    ? userInfo.userInfo
                    : userEmailWithGoogleAuth,
              });

              const currentDate = new Date();
              await supabase.from('Payment').insert({
                sum: calculateTotal(),
                payment_date: currentDate.toISOString().split('T')[0],
                user_email:
                  userEmailWithGoogleAuth === undefined
                    ? userInfo.userInfo
                    : userEmailWithGoogleAuth,
                transaction_type: 2,
                comment: 'Delivery',
              });

              await supabase
                .from('UserPayment')
                .update({balance: userBalance[0].balance - calculateTotal()})
                .eq(
                  'user_email',
                  userEmailWithGoogleAuth === undefined
                    ? userInfo.userInfo
                    : userEmailWithGoogleAuth,
                )
                .select();

              // @ts-ignore
              navigation.navigate('TransactionScreen', {
                trackNumber: trackNumber,
              });
            }}
            className={
              'w-[158px] h-[48px] bg-[#0560FA] rounded-[8px] items-center flex-row justify-center'
            }>
            <Text className={'text-white text-[16px] font-bold py-2 px-3 '}>
              Make payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StatementsResult;
