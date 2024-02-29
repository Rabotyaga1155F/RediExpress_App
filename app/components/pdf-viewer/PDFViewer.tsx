import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Pdf from 'react-native-pdf';
const PDFViewer = () => {
  const pdfFile = require('../../../assets/pdf/Policy.pdf');
  return (
    <View style={styles.container}>
      <Text>Policy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PDFViewer;
