import onboarding1 from '../screens/session1/Onboarding1.tsx';
import onboarding2 from '../screens/session1/Onboarding2.tsx';
import onboarding3 from '../screens/session1/Onboarding3.tsx';
import signUp from '../screens/session2/SignUp.tsx';
import LogIn from '../screens/session2/LogIn.tsx';
import ForgotPassword from '../screens/session2/ForgotPassword.tsx';
import OTPVerification from '../screens/session2/OTPVerification.tsx';
import NewPassword from '../screens/session2/NewPassword.tsx';
import Home from '../screens/session2/Home.tsx';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Onboarding1'}
          component={onboarding1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Onboarding2'}
          component={onboarding2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Onboarding3'}
          component={onboarding3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'SignUp'}
          component={signUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'LogIn'}
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'ForgotPassword'}
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'OtpVerification'}
          component={OTPVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'NewPassword'}
          component={NewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
