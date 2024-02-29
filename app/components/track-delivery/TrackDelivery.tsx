import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import {supabase} from '../../supabase.ts';

const TrackDelivery = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  const userEmailWithGoogleAuth = userInfo?.userInfo?.user?.email;
  let userEmail = '';

  useEffect(() => {
    userEmail =
      userEmailWithGoogleAuth === undefined
        ? userInfo.userInfo
        : userEmailWithGoogleAuth;
  }, []);

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

  const [Package, setPackage] = useState<any[]>([]);
  const [courierRequested, setCourierRequested] = useState<boolean>(false);
  const [packageReadyForDel, setPackageReadyForDel] = useState(false);
  const [packageInTransit, setPackageInTransit] = useState(false);
  const [packageDelivered, setPackageDelivered] = useState();

  useEffect(() => {
    if (Package.length > 0) {
      const packageData = Package[0];
      setCourierRequested(packageData.courier_requested);
      setPackageReadyForDel(packageData.package_ready_for_delivery);
      setPackageInTransit(packageData.package_in_transit);
      setPackageDelivered(packageData.package_delivered);
    }
  }, [Package]);
  return (
    <View className={'mt-4'}>
      <View className={'flex-row'}>
        <CheckBox tintColors={{true: '#0560FA'}} value={courierRequested} />
        <View className={'mt-2'}>
          <Text className={'text-[#A7A7A7] text-[14px]'}>
            Courier requested
          </Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            July 7 2022 08:00am
          </Text>
        </View>
      </View>
      <View className={'flex-row'}>
        <CheckBox value={packageReadyForDel} />
        <View className={'mt-2'}>
          <Text className={'text-[#A7A7A7] text-[14px]'}>
            Package ready for delivery
          </Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            July 7 2022 08:30am
          </Text>
        </View>
      </View>
      <View className={'flex-row'}>
        <CheckBox value={packageInTransit} />
        <View className={'mt-2'}>
          <Text className={'text-[#A7A7A7] text-[14px]'}>
            Package in transit
          </Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            July 7 2022 10:30am
          </Text>
        </View>
      </View>
      <View className={'flex-row'}>
        <CheckBox value={packageDelivered} />
        <View className={'mt-2'}>
          <Text className={'text-[#A7A7A7] text-[14px]'}>
            Package delivered
          </Text>
          <Text className={'text-[12px] text-[#EC8000]'}>
            July 7 2022 03:30am
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TrackDelivery;
