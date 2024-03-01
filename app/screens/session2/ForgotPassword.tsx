import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import BasicTextInput from '../../ui/text-input-components/BasicTextInput.tsx';
import BigBlueButton from '../../ui/buttons/BigBlueButton/BigBlueButton.tsx';
import {supabase} from '../../supabase.ts';

const ForgotPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');

  const isValidForm = () => {
    return email !== '';
  };

  return (
    <View>
      <Text className={'ml-6 text-[24px] font-medium text-[#3A3A3A] mt-24'}>
        Forgot Password
      </Text>
      <Text className={'ml-6 text-[14px] font-medium mt-2 text-[A7A7A7] mb-8'}>
        Enter your email address
      </Text>
      <BasicTextInput
        name={'Email Address'}
        placeholder={'***********@gmail.com'}
        onChangeText={setEmail}
      />

      <BigBlueButton
        disable={!isValidForm()}
        disabled={!isValidForm()}
        onPress={async () => {
          if (isValidForm()) {
            let {data, error} = await supabase.auth.resetPasswordForEmail(
              email,
            );
            navigation.navigate('OtpVerification', {email: email});
          } else {
            Alert.alert('Неверно');
          }
        }}>
        Send OTP
      </BigBlueButton>
      <View className={'flex-row justify-center mt-5'}>
        <Text className={'text-[A7A7A7] text-[14px]'}>
          Remember password? Back to
        </Text>
        <TouchableOpacity
          onPress={async () => {
            navigation.navigate('LogIn');
          }}>
          <Text className={'text-[#0560FA] font-medium text-[14px]'}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
