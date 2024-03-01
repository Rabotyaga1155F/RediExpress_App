import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import SendAPackageInput from '../../ui/inputs/send-a-package-input/SendAPackageInput.tsx';

interface IPackageDetailsProps {
  setPackageItems: React.Dispatch<React.SetStateAction<string>>;
  setWeightItems: React.Dispatch<React.SetStateAction<string>>;
  setItemsPrice: React.Dispatch<React.SetStateAction<string>>;
}

const PackageDetails: FC<IPackageDetailsProps> = ({
  setPackageItems,
  setWeightItems,
  setItemsPrice,
}) => {
  return (
    <View className={'mx-6  mb-4'}>
      <Text className={'text-[#3A3A3A]  font-medium text-[14px]  items-center'}>
        Package Details
      </Text>

      <SendAPackageInput
        onChangeText={setPackageItems}
        placeholder={'package items'}
      />
      <SendAPackageInput
        onChangeText={setWeightItems}
        placeholder={'Weight of item(kg)'}
      />
      <SendAPackageInput
        onChangeText={setItemsPrice}
        placeholder={'Worth of items'}
      />
    </View>
  );
};

export default PackageDetails;
