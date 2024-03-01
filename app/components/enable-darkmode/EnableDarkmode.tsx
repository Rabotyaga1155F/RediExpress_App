import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-switch';
import {useColorScheme} from 'nativewind';
const EnableDarkmode: FC = () => {
  const [trueToggle, setTrueToggle] = useState(false);
  const {colorScheme, toggleColorScheme} = useColorScheme();
  console.log(colorScheme);
  return (
    <View className={'mx-4 flex-row justify-between items-center '}>
      <Text className={'text-[16px] font-medium text-black'}>
        Enable dark Mode
      </Text>
      <Switch
        value={colorScheme === 'dark'}
        onValueChange={val => {
          toggleColorScheme();
        }}
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
