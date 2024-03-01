import React, {useState} from 'react';
import Header from '../../../../components/header/Header.tsx';
import {Image, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import BasicButton from '../../../../ui/buttons/basic-button/BasicButton.tsx';

const AddPaymentMethod = ({navigation}: any) => {
  const [selectedMethod, setSelectedMethod] = useState('first');
  const [selectedCard, setSelectedCard] = useState('first');
  return (
    <View>
      <Header
        headerName={'Add Payments method'}
        onBackButtonPress={() => navigation.navigate('Layout')}
      />
      <View
        className={
          'flex-row h-[84] mx-6 border border-gray-300 items-center mt-12 '
        }>
        <RadioButton
          color={'#0560FA'}
          value="first"
          status={selectedMethod === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedMethod('first')}
        />
        <View>
          <Text className={'text-[#3A3A3A] text-[16px]'}>Pay with wallet</Text>
          <Text className={'text-[#A7A7A7] text-[12px]'}>
            complete the payment using your e wallet
          </Text>
        </View>
      </View>

      <View
        className={
          'flex-row h-[84] mx-6 border border-gray-300 items-center mt-4 '
        }>
        <RadioButton
          color={'#0560FA'}
          value="second"
          status={selectedMethod === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedMethod('second')}
        />
        <View>
          <Text className={'text-[#3A3A3A] text-[16px]'}>
            Credit / debit card
          </Text>
          <Text className={'text-[#A7A7A7] text-[12px]'}>
            complete the payment using your debit card
          </Text>
        </View>
      </View>

      {selectedMethod == 'second' && (
        <>
          <View
            className={
              'flex-row h-[68] mx-6 border border-gray-300 items-center mt-4 '
            }>
            <RadioButton
              color={'#0560FA'}
              value="first"
              status={selectedCard === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedCard('first')}
            />
            <Text className={'text-[#3A3A3A] text-[16px]'}>**** **** 3323</Text>
            <Image
              className={'ml-[175px]'}
              source={require('../../../../../assets/images/icons/trash-icon.png')}
            />
          </View>
          <View
            className={
              'flex-row h-[68] mx-6 border border-gray-300 items-center mt-4 '
            }>
            <RadioButton
              color={'#0560FA'}
              value="second"
              status={selectedCard === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedCard('second')}
            />
            <Text className={'text-[#3A3A3A] text-[16px]'}>**** **** 1547</Text>
            <Image
              className={'ml-[175px]'}
              source={require('../../../../../assets/images/icons/trash-icon.png')}
            />
          </View>
        </>
      )}

      <View className={'ml-6 mr-6 w-[342px] absolute top-[600px]'}>
        <BasicButton>Proceed to pay</BasicButton>
      </View>
    </View>
  );
};

export default AddPaymentMethod;
