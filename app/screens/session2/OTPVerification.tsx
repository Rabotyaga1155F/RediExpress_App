import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import OtpNumberComponent from '../../components/otp-number/OtpNumberComponent.tsx';
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
  const [timer, setTimer] = useState(60); // Изначально устанавливаем таймер на 60 секунд

  const route = useRoute<NewPasswordRouteProp>();
  const email = route.params?.email;

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer]);

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
        email: email,
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

  const handleResendCode = async () => {
    timer == 0 && (await supabase.auth.resetPasswordForEmail(email));
    timer == 0 && setTimer(60);
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
        <TouchableOpacity onPress={handleResendCode}>
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
      {/* Отображение таймера */}
      {timer > 0 && (
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text>Resend OTP in: {timer} seconds</Text>
        </View>
      )}
    </View>
  );
};

export default OtpVerification;
