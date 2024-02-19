import onboarding1 from '../screens/session1/Onboarding1.tsx';
import onboarding2 from '../screens/session1/Onboarding2.tsx';
import onboarding3 from '../screens/session1/Onboarding3.tsx';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Onboarding1'} component={onboarding1} />
        <Stack.Screen name={'Onboarding2'} component={onboarding2} />
        <Stack.Screen name={'Onboarding3'} component={onboarding3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
