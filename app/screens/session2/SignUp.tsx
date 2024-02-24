import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BasicTextInput from '../../ui/text-input-components/BasicTextInput.tsx';
import CheckBoxComponentSignUp from '../../components/CheckBoxComponentSignUp.tsx';
import BigBlueButton from '../../ui/buttons/BigBlueButton/BigBlueButton.tsx';
import {supabase} from '../../supabase.ts';
import GoogleSignIn from './auth/GoogleSignIn.tsx';

const SignUp = ({navigation}: any) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const login = async () => {
    if (email && password) {
      let {} = await supabase.auth.signUp({
        email: email,
        password: password,
        phone: phoneNumber,
      });

      const {data, error} = await supabase
        .from('User')
        .insert([
          {
            FullName: fullName,
            PhoneNumber: phoneNumber,
            EmailAdress: email,
            Password: password,
          },
        ])
        .select();
    } else {
      Alert.alert('ошибка');
    }
  };

  const isFormValid = () => {
    return (
      fullName !== '' &&
      phoneNumber !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      toggleCheckBox
    );
  };

  return (
    <ScrollView>
      <Text className={'ml-6 text-[24px] font-medium text-[#3A3A3A] mt-8'}>
        Create an account
      </Text>
      <Text className={'ml-6 text-[14px] font-medium mt-2 text-[A7A7A7] mb-8'}>
        Complete the sign up process to get started
      </Text>
      <BasicTextInput
        placeholder={'Ivanov Ivan'}
        name={'Full name'}
        onChangeText={setFullName}
      />
      <BasicTextInput
        placeholder={'+7(999)999-99-99'}
        name={'Phone Number'}
        onChangeText={setPhoneNumber}
      />
      <BasicTextInput
        name={'Email Address'}
        placeholder={'***********@gmail.com'}
        onChangeText={setEmail}
      />
      <BasicTextInput
        placeholder={'**********'}
        name={'Password'}
        haveNoVisible={true}
        onChangeText={setPassword}
      />
      <BasicTextInput
        placeholder={'**********'}
        name={'Confirm Password'}
        haveNoVisible={true}
        onChangeText={setConfirmPassword}
      />
      <CheckBoxComponentSignUp setter={setToggleCheckBox} />
      <BigBlueButton
        disable={!isFormValid()}
        onPress={async () => {
          if (isFormValid()) {
            navigation.navigate('LogIn');
            login();
          } else {
            Alert.alert('Неверно');
          }
        }}
        disabled={!isFormValid()}>
        Sign Up
      </BigBlueButton>
      <View className={'flex-row justify-center mt-4'}>
        <Text className={'text-[#A7A7A7] text-[14px] text-center'}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text className={'text-[#0560FA] font-medium text-[14px]'}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>

      <Text className={'text-center mt-4 text-[#A7A7A7]'}>
        or sign in using
      </Text>
      <GoogleSignIn navigation={navigation} />
    </ScrollView>
  );
};

export default SignUp;
