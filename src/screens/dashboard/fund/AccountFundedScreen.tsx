import { View, Text, Image, StatusBar, Pressable } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';
import SuccessMessageContainer from '../../../components/general/SuccessMessageContainer';

const CheckMark = require('../../../../assets/images/Polygon_1.png');
const Background_1 = require('../../../../assets/images/account_funded_1.png');
const Background_2 = require('../../../../assets/images/account_funded_2.png');
const ArrowLeft = require('../../../../assets/images/arrow-left-black.png');

type Props = {};

const AccountFundedScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <SuccessMessageContainer
      successTitle='Account Funded'
      successSummary='Your account has been funded successfully'
      btnText='Fund again'
      btnPressedHandler={() => navigation.navigate('CardTransfer')}
      showBtn={true}
    />
  );
};

export default AccountFundedScreen;
