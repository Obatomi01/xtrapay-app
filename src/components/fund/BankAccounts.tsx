import { View, Text, Image } from 'react-native';
import React from 'react';

const CopyIcon = require('../../../assets/images/copy-icon.png');

type Props = {};

type BankAccount = {
  bank: string;
  accNumber: string;
};

const banKAccounts: BankAccount[] = [
  {
    bank: 'Providus Bank',
    accNumber: '0091232899',
  },
  {
    bank: 'Wema Bank',
    accNumber: '0091232899',
  },
];

const BankAccounts = (props: Props) => {
  return (
    <>
      {banKAccounts.map((account: BankAccount, index: any) => (
        <View
          key={index}
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 6,
            padding: 18,

            flexDirection: 'row',

            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
              width: '50%',
            }}
          >
            {account.bank}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              width: '45%',
            }}
          >
            {account.accNumber}
          </Text>
          <Image source={CopyIcon} />
        </View>
      ))}
    </>
  );
};

export default BankAccounts;
