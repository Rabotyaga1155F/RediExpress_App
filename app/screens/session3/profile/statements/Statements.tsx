import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../../../components/header/Header.tsx';
import OriginDetails from '../../../../components/inputs/OriginDetails.tsx';
import DestinationDetails from '../../../../components/inputs/DestinationDetails.tsx';
import PackageDetails from '../../../../components/inputs/PackageDetails.tsx';
import DeliveryTypeComponent from '../../../../components/delivery-type-component/DeliveryTypeComponent.tsx';
import DeliveryTypeComponentSch from '../../../../components/delivery-type-component/DeliveryTypeComponentSch.tsx';
import {isNewBackTitleImplementation} from 'react-native-screens';

export enum DeliveryType {
  instant = 'instant',
  scheduled = 'scheduled',
}

export interface IData {
  originAdress: string;
  originCity: string;
  originPhoneNumber: string;
  destinationAdress: string;
  destinationCity: string;
  destinationPhoneNumber: string;
  packageItems: string;
  weightItems: string;
  itemsPrice: string;
  deliveryType: DeliveryType;
}

const Statements = ({navigation}: any) => {
  const [originAdress, setOriginAdress] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [originPhoneNumber, setOriginPhoneNumber] = useState('');
  const [destinationAdress, setDestinationAdress] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinationPhoneNumber, setDestinationPhoneNumber] = useState('');
  const [packageItems, setPackageItems] = useState('');
  const [weightItems, setWeightItems] = useState('');
  const [itemsPrice, setItemsPrice] = useState('');
  const [destinations, setDestinations] = useState([
    <DestinationDetails
      setDestinationCity={setDestinationCity}
      setDestinationPhoneNumber={setDestinationPhoneNumber}
      setDestinationAddress={setDestinationAdress}
    />,
  ]);
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryType>(
    DeliveryType.instant,
  );

  const [formData, setFormData] = useState<IData>({
    originAdress: originAdress,
    originCity: originCity,
    originPhoneNumber: originPhoneNumber,
    destinationAdress: destinationAdress,
    destinationCity: destinationCity,
    destinationPhoneNumber: destinationPhoneNumber,
    packageItems: packageItems,
    weightItems: weightItems,
    itemsPrice: itemsPrice,
    deliveryType: selectedDelivery,
  });

  const addDestination = () => {
    setDestinations([
      ...destinations,
      <DestinationDetails
        setDestinationCity={setDestinationCity}
        setDestinationPhoneNumber={setDestinationPhoneNumber}
        setDestinationAddress={setDestinationAdress}
      />,
    ]);
  };

  useEffect(() => {
    console.log(formData);
    console.log(originAdress);
    setFormData({
      originAdress,
      destinationAdress,
      destinationCity,
      destinationPhoneNumber,
      originPhoneNumber,
      originCity,
      deliveryType: selectedDelivery,
      itemsPrice,
      weightItems,
      packageItems,
    });
  }, [
    originAdress,
    originCity,
    originPhoneNumber,
    destinationPhoneNumber,
    destinationCity,
    destinationAdress,
    selectedDelivery,
    itemsPrice,
    weightItems,
    packageItems,
  ]);

  return (
    <ScrollView>
      <Header
        headerName={'Send a package'}
        onBackButtonPress={() => navigation.navigate('Layout')}
      />
      <OriginDetails
        setOriginCity={setOriginCity}
        setOriginPhoneNumber={setOriginPhoneNumber}
        setOriginAddress={setOriginAdress}
      />
      {destinations}
      <TouchableOpacity
        onPress={addDestination}
        className={'flex-row mx-6 pb-2 items-center'}>
        <Image
          source={require('../../../../../assets/images/icons/add-icon.png')}
        />
        <Text className={'text-[#A7A7A7] text-[14px] ml-[8px] items-center'}>
          Add destination
        </Text>
      </TouchableOpacity>
      <PackageDetails
        setPackageItems={setPackageItems}
        setItemsPrice={setItemsPrice}
        setWeightItems={setWeightItems}
      />
      <Text className={'text-[#3A3A3A] text-[14px] font-medium mx-6 mb-2'}>
        Select delivery type
      </Text>
      <View className={'flex-row justify-between mx-6 mb-4'}>
        <DeliveryTypeComponent
          onLongPress={() =>
            navigation.navigate('StatementsResult', {FormData: formData})
          }
          imgName={'clock'}
          text={'Instant Delivery'}
          selectedType={selectedDelivery}
          onPress={() => setSelectedDelivery(DeliveryType.instant)}
        />
        <DeliveryTypeComponentSch
          onLongPress={() =>
            navigation.navigate('StatementsResult', {FormData: formData})
          }
          imgName={'calendar'}
          text={'Scheduled delivery'}
          selectedType={selectedDelivery}
          onPress={() => setSelectedDelivery(DeliveryType.scheduled)}
        />
      </View>
    </ScrollView>
  );
};

export default Statements;
