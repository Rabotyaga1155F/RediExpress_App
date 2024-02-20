import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import BasicTextInput from '../../ui/text-input-components/BasicTextInput.tsx';
import CheckBox from '@react-native-community/checkbox';
import BigBlueButton from '../../ui/buttons/BigBlueButton/BigBlueButton.tsx';
import {supabase} from '../../supabase.ts';
import GoogleSignIn from './auth/GoogleSignIn.tsx';

const LogIn = ({navigation}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = () => {
    return email !== '' && password !== '';
  };

  return (
    <View>
      <Text className={'ml-6 text-[24px] font-medium text-[#3A3A3A] mt-24'}>
        Welcome Back
      </Text>
      <Text className={'ml-6 text-[14px] font-medium mt-2 text-[A7A7A7] mb-8'}>
        Fill in your email and password to continue
      </Text>
      <BasicTextInput
        name={'Email Address'}
        placeholder={'***********@gmail.com'}
        onChangeText={setEmail}
      />
      <BasicTextInput
        name={'Password'}
        placeholder={'**********'}
        haveNoVisible={true}
        onChangeText={setPassword}
      />
      <View className={'flex-row justify-between ml-5 mr-6 items-center'}>
        <View className={'flex-row items-center  mt-2'}>
          <CheckBox
            tintColors={{true: '#0560FA', false: 'gray'}}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text className={'text-[12px] font-medium'}>Remember Password</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text className={'text-[#0560FA] text-[12px] mt-2 font-medium'}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <BigBlueButton
        disabled={!isFormValid()}
        disable={!isFormValid()}
        onPress={async () => {
          if (isFormValid()) {
            const {data, error} = await supabase.auth.signInWithPassword({
              email,
              password,
            });
            if (error) {
            } else {
              navigation.navigate('Home');
            }
          } else {
            Alert.alert('Неверно');
          }
        }}>
        Log in
      </BigBlueButton>
      <View className={'flex-row justify-center mt-4'}>
        <Text className={'text-[#A7A7A7] text-[14px] text-center'}>
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Text className={'text-[#0560FA] font-medium text-[14px]'}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <Text className={'text-center mt-4 text-[#A7A7A7]'}>or log in using</Text>
      <GoogleSignIn navigation={navigation} />
    </View>
  );
};

export default LogIn;
