import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SendAPackageInput from '../../ui/inputs/send-a-package-input/SendAPackageInput.tsx';

interface IDestinationDetailsProps {
  setDestinationAddress: React.Dispatch<React.SetStateAction<string>>;
  setDestinationCity: React.Dispatch<React.SetStateAction<string>>;
  setDestinationPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const DestinationDetails: FC<IDestinationDetailsProps> = ({
  setDestinationPhoneNumber,
  setDestinationAddress,
  setDestinationCity,
}) => {
  return (
    <View className={'mx-6 mt-8'}>
      <View className={'flex-row pb-2'}>
        <Image
          source={require('../../../assets/images/icons/origin-details-icon.png')}
        />
        <Text
          className={
            'text-[#3A3A3A]  font-medium text-[14px] ml-[8px] items-center'
          }>
          Destination Details
        </Text>
      </View>
      <SendAPackageInput
        onChangeText={setDestinationAddress}
        placeholder={'Address'}
      />
      <SendAPackageInput
        onChangeText={setDestinationCity}
        placeholder={'State,Country'}
      />
      <SendAPackageInput
        onChangeText={setDestinationPhoneNumber}
        placeholder={'Phone number'}
      />
      <SendAPackageInput placeholder={'Others'} />
    </View>
  );
};

export default DestinationDetails;
