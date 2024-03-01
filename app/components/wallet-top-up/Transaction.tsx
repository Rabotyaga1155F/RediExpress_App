import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface ITransactionProps {
  sum: number;
  date: string;
  comment: string;
  transaction_type: number;
}

const Transaction: FC<ITransactionProps> = ({
  sum,
  comment,
  date,
  transaction_type,
}) => {
  return (
    <View className={'mx-6 border-t border-b p-2 border-gray-300'}>
      <Text
        className={
          transaction_type === 1
            ? '-mb-2 text-[#35B369] text-[16px] font-medium'
            : '-mb-2 text-[#ED3A3A] text-[16px] font-medium'
        }>
        {transaction_type === 2 ? `-N${sum}.00` : `N${sum}.00`}
      </Text>
      <Text className={'ml-auto -mb-2 text-[#A7A7A7] text-[12px]'}>{date}</Text>
      <Text className={'text-[12px] text=[#3A3A3A] font-medium'}>
        {comment}
      </Text>
    </View>
  );
};

export default Transaction;
