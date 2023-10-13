import { View, Text } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import SuccessMessageContainer from '../../../components/general/SuccessMessageContainer';

import { StackActions } from '@react-navigation/native';

type Props = {};

const KYCUpgradeSuccessScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <SuccessMessageContainer
      successSummary=''
      successTitle='KYC Upgraded'
      btnText='Continue'
      btnPressedHandler={() => navigation.dispatch(StackActions.popToTop())}
      showBtn={false}
    />
  );
};

export default KYCUpgradeSuccessScreen;
