import React from 'react';
import Header from '../../../../components/header/Header.tsx';

const AddPaymentMethod = ({navigation}: any) => {
  return (
    <Header
      headerName={'Add Payments method'}
      onBackButtonPress={() => navigation.navigate('Layout')}
    />
  );
};

export default AddPaymentMethod;
