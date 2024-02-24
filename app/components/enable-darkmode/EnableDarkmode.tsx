import React, {FC, useState} from 'react';
import {Text, View, Switch} from 'react-native';

const EnableDarkmode: FC = () => {
  const [trueToggle, setTrueToggle] = useState(false);
  return (
    <View className={'mx-4 flex-row justify-between items-center'}>
      <Text className={'text-[16px] font-medium text-black'}>
        Enable dark Mode
      </Text>
      <Switch value={trueToggle} onChange={() => setTrueToggle(!trueToggle)} />
    </View>
  );
};

export default EnableDarkmode;
