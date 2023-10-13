import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import WithdrawFundOptions from '../../../components/dashboard/WithdrawFundOptions';

const Building = require('../../../../assets/images/building.png');
const Card = require('../../../../assets/images/finance.png');
const QR = require('../../../../assets/images/qr-code-fill.png');
const Wallet = require('../../../../assets/images/wallet_colored.png');

const ArrowRight = require('../../../../assets/images/Path.png');

type Props = {};

type FundOptionProp = {
  title: string;
  description: string;
  optionLinkTo: string;
  iconImg: any;
  titleParams?: any;
};

const transferOptions: FundOptionProp[] = [
  {
    title: 'To Bank Account',
    description: 'Takes less than 1 minute',
    optionLinkTo: 'TransferToBank',
    iconImg: Building,
    titleParams: {
      bank: '',
    },
  },
  {
    title: 'Scan QR Code',
    description: 'Takes less than 1 minute',
    optionLinkTo: 'TransferToBank',
    iconImg: QR,
  },
  {
    title: 'To Xtrapay Wallet',
    description: 'Takes less than 1 minute',
    optionLinkTo: 'TransferToWallet',
    iconImg: Wallet,
  },
  {
    title: 'To xtrapay Card',
    description: 'Takes less than 1 minute ',
    optionLinkTo: 'TransferToCard',
    iconImg: Card,
  },
];

const TransferScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Transfer' />
      <InnerScreensContainer>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            width: '90%',
            textAlign: 'center',
            alignSelf: 'center',
            marginVertical: 12,
          }}
        >
          Transfer cash using any of the following methods
        </Text>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <WithdrawFundOptions options={transferOptions} />
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default TransferScreen;
