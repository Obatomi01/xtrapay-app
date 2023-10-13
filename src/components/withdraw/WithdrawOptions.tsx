import { View, Text } from 'react-native';
import React from 'react';
import WithdrawFundOptions from '../dashboard/WithdrawFundOptions';

const Building = require('../../../assets/images/building.png');
const Card = require('../../../assets/images/finance.png');
const QR = require('../../../assets/images/qr-code-fill.png');

type Props = {};

type FundOptionProp = {
  title: string;
  description: string;
  optionLinkTo: string;
  iconImg: any;
};

const withdrawOptions: FundOptionProp[] = [
  {
    title: 'Transfer to merchants',
    description: 'Send money to Xtrapay agent and get cash equivalent',
    optionLinkTo: 'MerchantTransfer',
    iconImg: Building,
  },
  {
    title: 'Withdraw with Xtrapay card',
    description: 'withdraw from ATM or POS around you',
    optionLinkTo: 'WithdrawWithCard',
    iconImg: Card,
  },
  {
    title: 'Withdraw to Account',
    description: 'Withdaw to any of your account and get credited instantly',
    optionLinkTo: 'WithdrawToAccount',
    iconImg: QR,
  },
];

const WithdrawOptions = (props: Props) => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
      }}
    >
      <WithdrawFundOptions options={withdrawOptions} />
    </View>
  );
};

export default WithdrawOptions;
