import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {};

const TransferRateGuide = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.mediumText,
          {
            color: '#797878',
            textAlign: 'center',
          },
        ]}
      >
        Transfers between <Text style={styles.coloredText}>0 - 9999 </Text>
        is <Text style={styles.coloredText}>free </Text>
        while
        <Text style={styles.coloredText}> 10000 </Text>
        and above is
        <Text style={styles.coloredText}> (N50)</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 24,
  },
  coloredText: {
    color: '#FF0000',
  },
  mediumText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});

export default TransferRateGuide;
