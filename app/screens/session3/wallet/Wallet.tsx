import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../../components/header/Header.tsx';
import UserInfo from '../../../components/user-info/UserInfo.tsx';
import TopUp from '../../../components/wallet-top-up/TopUp.tsx';
import Transaction from '../../../components/wallet-top-up/Transaction.tsx';
import {supabase} from '../../../supabase.ts';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store.ts';
import {dark} from 'nativewind/dist/tailwind/native/dark';

const Wallet = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  const userEmailWithGoogleAuth = userInfo?.userInfo?.user?.email;
  let userEmail =
    userEmailWithGoogleAuth === undefined
      ? userInfo.userInfo
      : userEmailWithGoogleAuth;

  const [Payment, setPayment] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      let {data, error} = await supabase
        .from('Payment')
        .select('*')
        .eq('user_email', userEmail);

      setPayment(data || []);
    };

    fetch();
  }, []);
  return (
    <View>
      <View>
        <Text
          className={
            'text-center pt-16  border-b border-gray-300 h-[108px] text-[#A7A7A7] font-medium text-[16px]'
          }>
          Profile
        </Text>
      </View>
      <UserInfo />
      <TopUp />
      <Text className={'mx-5 text-[#3A3A3A] font-medium text-[20px] mt-4 '}>
        Transaction History
      </Text>
      <ScrollView className={'h-80'}>
        {Payment.slice()
          .reverse()
          .map(item => (
            <Transaction
              key={item.id}
              sum={item.sum}
              date={item.payment_date}
              comment={item.comment}
              transaction_type={item.transaction_type}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Wallet;
