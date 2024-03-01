import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header.tsx';
import {Text, TouchableOpacity, View} from 'react-native';
import {DeliveryType} from '../session3/profile/statements/Statements.tsx';
import {supabase} from '../../supabase.ts';
import {generateTrack} from '../../utils/random-track.ts';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';

const SendAPackageTwo = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  const userEmailWithGoogleAuth = userInfo?.userInfo?.user?.email;
  let userEmail =
    userEmailWithGoogleAuth === undefined
      ? userInfo.userInfo
      : userEmailWithGoogleAuth;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let {data, error} = await supabase
          .from('Package')
          .select('*')
          .eq('sender_email', userEmail)
          .eq('completed', false);

        if (error) {
          throw error;
        }
        setPackage(data || []);
      } catch (error) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userEmail) {
    }
  }, [userEmail]);

  const [Package, setPackage] = useState<any[]>([]);
  const [trackNumber, setTrackNumber] = useState('');
  const [originAddress, setOriginAddress] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [originPhoneNumber, setOriginPhoneNumber] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinationPhoneNumber, setDestinationPhoneNumber] = useState('');
  const [packageItems, setPackageItems] = useState('');
  const [weightItems, setWeightItems] = useState('');
  const [worthItems, setWorthItems] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (Package.length > 0) {
      const packageData = Package[0];
      setTrackNumber(packageData.track_number);
      setOriginAddress(packageData.origin_address);
      setOriginCity(packageData.origin_city);
      setOriginPhoneNumber(packageData.origin_number);
      setDestinationAddress(packageData.destination_address);
      setDestinationCity(packageData.destination_city);
      setDestinationPhoneNumber(packageData.destination_number);
      setPackageItems(packageData.package_items);
      setWorthItems(packageData.worth_items);
      setWeightItems(packageData.weight_items);
      setDeliveryType(packageData.delivery_type);
      setTotalPrice(packageData.total_price);
    }
  }, [Package]);
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
          {originAddress} , {originCity}
        </Text>
        <Text className={'text-[#A7A7A7] text-[12px] my-1'}>
          {originPhoneNumber}
        </Text>
      </View>
      <View className={'mx-6'}>
        <Text className={'text-[#3A3A3A] text-[12px] mt-2 mb-1'}>
          Destination Details
        </Text>
        <Text className={'text-[#A7A7A7] text-[12px]'}>
          {destinationAddress} , {destinationCity}
        </Text>
        <Text className={'text-[#A7A7A7] text-[12px] my-1'}>
          {destinationPhoneNumber}
        </Text>
      </View>
      <View className={'mx-6'}>
        <Text className={'text-[#3A3A3A] text-[12px] mt-2 mb-1'}>
          Other Details
        </Text>
        <View className={'flex-row justify-between'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Package Items</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>{packageItems}</Text>
        </View>
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Weight of Items</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>{weightItems}</Text>
        </View>
        <View className={'flex-row justify-between mt-2'}>
          <Text className={'text-[#A7A7A7] text-[12px]'}>Worth of Items</Text>
          <Text className={'text-[12px] text-[#EC8000]'}>{worthItems}</Text>
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
        {deliveryType === DeliveryType.instant ? (
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
          <Text className={'text-[12px] text-[#EC8000]'}>N{totalPrice}.00</Text>
        </View>

        <Text className={'text-[#2F80ED] text-[12px] mt-4'}>
          Click on delivered for successful delivery and rate rider or report
          missing item
        </Text>
        <View className={'flex-row justify-between mt-6'}>
          <TouchableOpacity
            className={
              'w-[158px] h-[48px] border border-[#0560FA] rounded-[8px] items-center flex-row justify-center'
            }>
            <Text className={'text-[#0560FA] text-[16px] font-bold py-2 px-3 '}>
              Report
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              navigation.navigate(
                'DeliverySuccesfull' as never,
                {trackNumber: trackNumber} as never,
              );
              console.log(userEmail);
              await supabase
                .from('Package')
                .update({completed: true})
                .eq('sender_email', userEmail);
            }}
            className={
              'w-[158px] h-[48px] bg-[#0560FA] rounded-[8px] items-center flex-row justify-center'
            }>
            <Text className={'text-white text-[16px] font-bold py-2 px-3 '}>
              Successful
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SendAPackageTwo;
