import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import OtpNumberComponent from '../../components/OtpNumberComponent.tsx';
import BigBlueButton from '../../ui/buttons/BigBlueButton/BigBlueButton.tsx';
import {supabase} from '../../supabase.ts';
import {RouteProp, useRoute} from '@react-navigation/native';

type RootStackParamList = {
  NewPassword: {email: string};
};

type NewPasswordRouteProp = RouteProp<RootStackParamList, 'NewPassword'>;

const OtpVerification = ({navigation}: any) => {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [thirdNum, setThirdNum] = useState('');
  const [fourthNum, setFourthNum] = useState('');
  const [fifthNum, setFifthNum] = useState('');
  const [sixNum, setSixNum] = useState('');
  const [otp, setOtp] = useState('');

  const route = useRoute<NewPasswordRouteProp>();
  const email = route.params?.email;

  useEffect(() => {
    console.log(email);
  }, []);

  const isValidForm = () => {
    return (
      firstNum !== '' &&
      secondNum !== '' &&
      thirdNum !== '' &&
      fourthNum != '' &&
      fifthNum !== '' &&
      sixNum != ''
    );
  };

  const handleVerifyOTP = async () => {
    try {
      const otp = `${firstNum}${secondNum}${thirdNum}${fourthNum}${fifthNum}${sixNum}`;
      const {error} = await supabase.auth.verifyOtp({
        email: 'cool.poryadin2014@yandex.ru',
        token: otp,
        type: 'email',
      });
      if (error) {
        Alert.alert('Ошибка', error.message);
      } else {
        navigation.navigate('NewPassword', {email: email});
      }
    } catch (error) {
      Alert.alert('Ошибка');
    }
  };

  return (
    <View>
      <Text className={'ml-6 text-[24px] font-medium text-[#3A3A3A] mt-24'}>
        OTP Verification
      </Text>
      <Text className={'ml-6 text-[14px] font-medium mt-2 text-[A7A7A7] mb-8'}>
        Enter the 6 digit numbers sent to your email
      </Text>

      <View className={'flex-row mx-6 justify-between mt-12'}>
        <OtpNumberComponent onChangeText={setFirstNum} />
        <OtpNumberComponent onChangeText={setSecondNum} />
        <OtpNumberComponent onChangeText={setThirdNum} />
        <OtpNumberComponent onChangeText={setFourthNum} />
        <OtpNumberComponent onChangeText={setFifthNum} />
        <OtpNumberComponent onChangeText={setSixNum} />
      </View>
      <View className={'flex-row justify-center mt-5'}>
        <Text className={'text-[A7A7A7] text-[14px]'}>
          If you didn't receive code,
        </Text>
        <TouchableOpacity onPress={() => Alert.alert('Resended')}>
          <Text className={'text-[#0560FA] font-medium text-[14px]'}>
            resend
          </Text>
        </TouchableOpacity>
      </View>
      <BigBlueButton
        disable={!isValidForm()}
        disabled={!isValidForm()}
        onPress={handleVerifyOTP}>
        Send OTP
      </BigBlueButton>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewPassword', {email: email})}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerification;
