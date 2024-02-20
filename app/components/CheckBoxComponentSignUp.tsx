import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponentSignUp = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View className={'mt-6 flex-row items-center flex-wrap justify-center'}>
      <CheckBox
        tintColors={{true: '#0560FA', false: '#006CEC'}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />

      <View>
        <Text className={'text-[12px] text-[#A7A7A7]'}>
          By ticking this box, you are agree to our
        </Text>
        <Text className={'text-[12px] text-[#EBBC2E] '}>
          Terms and conditions and private policy
        </Text>
      </View>
    </View>
  );
};

export default CheckBoxComponentSignUp;
