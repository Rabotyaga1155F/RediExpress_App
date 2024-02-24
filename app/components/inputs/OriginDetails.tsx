import React, {FC} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import SendAPackageInput from '../../ui/inputs/send-a-package-input/SendAPackageInput.tsx';

interface IOriginDetailsProps {
  setOriginAddress: React.Dispatch<React.SetStateAction<string>>;
  setOriginCity: React.Dispatch<React.SetStateAction<string>>;
  setOriginPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}
const OriginDetails: FC<IOriginDetailsProps> = ({
  setOriginAddress,
  setOriginPhoneNumber,
  setOriginCity,
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
          Origin Details
        </Text>
      </View>
      <SendAPackageInput
        onChangeText={setOriginAddress}
        placeholder={'Address'}
      />
      <SendAPackageInput
        onChangeText={setOriginCity}
        placeholder={'State,Country'}
      />
      <SendAPackageInput
        onChangeText={setOriginPhoneNumber}
        placeholder={'Phone number'}
      />
      <SendAPackageInput placeholder={'Others'} />
    </View>
  );
};

export default OriginDetails;
