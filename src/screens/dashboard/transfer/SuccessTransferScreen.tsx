import { View, Text } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import SuccessMessageContainer from '../../../components/general/SuccessMessageContainer';

type Props = {};

const SuccessTransferScreen = ({ route }: any) => {
  const { linkTo, amountEntered } = route.params;
  const navigation = useNavigation<any>();

  return (
    <SuccessMessageContainer
      successSummary={`You have successfully transfered N${amountEntered.toLocaleString()} to Okon Obanefo Hassan`}
      successTitle='Transfer Successful'
      btnText='Fund again'
      showBtn={true}
      btnPressedHandler={() =>
        navigation.navigate(linkTo, {
          bank: '',
        })
      }
    />
  );
};

export default SuccessTransferScreen;
