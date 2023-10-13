import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import BeneficiaryContainer from '../../../components/dashboard/transfer/BeneficiaryContainer';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import AccountBalance from '../../../components/dashboard/transfer/AccountBalance';
import InputContainer from '../../../components/form/InputContainer';
import TransferRateGuide from '../../../components/dashboard/transfer/TransferRateGuide';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

type Props = {};

const TransferToWalletScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          height: 105,
        }}
      >
        <InnerScreensHeader
          pageTitle='Transfer to Wallet'
          longContents={true}
        />
      </View>
      <InnerScreensContainer noPaddingTop={true}>
        <AccountBalance />

        <View style={styles.mainContainer}>
          <BeneficiaryContainer />
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            inputPlaceholder=''
            title='Wallet ID/Email Address'
            passwordInput={false}
          />
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            inputPlaceholder=''
            title='Recipient'
            passwordInput={false}
          />
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            inputPlaceholder=''
            passwordInput={false}
            title='Amount'
            textInputType={'numeric'}
          />
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            inputPlaceholder=''
            title='Description'
            textInputType={'default'}
            passwordInput={false}
          />
        </View>

        <TransferRateGuide />

        <View style={styles.mainContainer}>
          <LinearGradientBtn
            btnText='Send Money'
            onButtonPressed={() =>
              navigation.navigate('SendMoney', {
                paymentMethod: 'Main Balance',
                linkTo: 'TransferToWallet',
              })
            }
            textFamily='Roboto-Regular'
            textSize={24}
          />
        </View>
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 24,
  },
});

export default TransferToWalletScreen;
