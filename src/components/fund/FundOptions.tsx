import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import WithdrawFundOptions from '../dashboard/WithdrawFundOptions';

const Building = require('../../../assets/images/building.png');
const Card = require('../../../assets/images/finance.png');
const QR = require('../../../assets/images/qr-code-fill.png');
const Deposit = require('../../../assets/images/cash_deposit.png');

const ArrowRight = require('../../../assets/images/Path.png');

type Props = {};

type FundOptionProp = {
  title: string;
  description: string;
  optionLinkTo: string;
  iconImg: any;
};

const fundOptions: FundOptionProp[] = [
  {
    title: 'Naira Bank Transfer',
    description: 'Takes less than 1 minute',
    optionLinkTo: 'BankTransfer',
    iconImg: Building,
  },
  {
    title: 'Naira Card Transfer',
    description: 'Takes less than 1 minute',
    optionLinkTo: 'CardTransfer',
    iconImg: Card,
  },
  {
    title: 'Cash deposit by merchants',
    description: 'Takes less than 1 minute',
    optionLinkTo: 'MerchantDeposit',
    iconImg: Deposit,
  },
  {
    title: 'Scan my QR code',
    description: 'Instant credit',
    optionLinkTo: 'ScanScreen',
    iconImg: QR,
  },
];

const FundOptions = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
      }}
    >
      <WithdrawFundOptions options={fundOptions} />
    </View>
  );
};

export default FundOptions;
