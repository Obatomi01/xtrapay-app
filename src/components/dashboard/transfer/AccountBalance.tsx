import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {};

const AccountBalance = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: '#FFE2C6',
        paddingVertical: 4.8,
      }}
    >
      <Text
        style={[
          styles.mediumText,
          {
            textAlign: 'center',
            color: '#797878',
          },
        ]}
      >
        Primary Account Balance:{' '}
        <Text
          style={[
            styles.mediumText,
            {
              color: '#212121',
            },
          ]}
        >
          N50000
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});

export default AccountBalance;
