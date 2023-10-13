import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import InputContainer from '../../../components/form/InputContainer';

type Props = {};

const MerchantTransferScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Withdraw' />
      <InnerScreensContainer>
        <View style={styles.mainContainer}>
          <InputContainer
            title='Merchant Wallet address'
            linkTo={'Qr Code'}
            linkPage={'ConfirmPin'}
            passwordInput={false}
            inputPlaceholder='Enter wallet address'
          />
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            title='Amount (N)'
            passwordInput={false}
            inputPlaceholder='Enter wallet address'
          />
        </View>
      </InnerScreensContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 12,
  },
});

export default MerchantTransferScreen;
