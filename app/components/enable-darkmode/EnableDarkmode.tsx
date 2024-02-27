import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-switch';
const EnableDarkmode: FC = () => {
  const [trueToggle, setTrueToggle] = useState(false);
  return (
    <View className={'mx-4 flex-row justify-between items-center'}>
      <Text className={'text-[16px] font-medium text-black'}>
        Enable dark Mode
      </Text>
      <Switch
        value={trueToggle}
        onValueChange={val => setTrueToggle(val)}
        disabled={false}
        activeText={''}
        inActiveText={''}
        circleSize={28}
        barHeight={30}
        backgroundActive={'#0560FA'}
        switchRightPx={3}
        switchLeftPx={3}
        backgroundInactive={'#D7D7D7'}
      />
    </View>
  );
};

export default EnableDarkmode;
