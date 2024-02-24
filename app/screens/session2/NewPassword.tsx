import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import BasicTextInput from '../../ui/text-input-components/BasicTextInput.tsx';
import BigBlueButton from '../../ui/buttons/BigBlueButton/BigBlueButton.tsx';
import {RouteProp, useRoute} from '@react-navigation/native';
import {supabase} from '../../supabase.ts';

type RootStackParamList = {
  NewPassword: {email: string};
};

type NewPasswordRouteProp = RouteProp<RootStackParamList, 'NewPassword'>;

const NewPassword = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const route = useRoute<NewPasswordRouteProp>();
  const email = route.params?.email;

  useEffect(() => {
    console.log(email);
  }, []);

  const isFormValid = () => {
    return password !== '' && confirmPassword !== '';
  };

  const changePassword = async () => {
    try {
      const {data, error} = await supabase.auth.updateUser({
        email: email,
        password: password,
      });
      if (error) {
        Alert.alert('Ошибка', error.message);
      } else {
        navigation.navigate('Layout');
      }
    } catch (error) {
      Alert.alert('Ошибка');
    }
  };

  return (
    <View>
      <Text className={'ml-6 text-[24px] font-medium text-[#3A3A3A] mt-24'}>
        New Password
      </Text>
      <Text className={'ml-6 text-[14px] font-medium mt-2 text-[A7A7A7] mb-8'}>
        Enter the password
      </Text>

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

      <BigBlueButton
        disabled={!isFormValid()}
        disable={!isFormValid()}
        onPress={changePassword}>
        Log in
      </BigBlueButton>
    </View>
  );
};

export default NewPassword;
