import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import BeneficiaryContainer from '../../../components/dashboard/transfer/BeneficiaryContainer';
import InputContainer from '../../../components/form/InputContainer';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';
import AccountBalance from '../../../components/dashboard/transfer/AccountBalance';
import TransferRateGuide from '../../../components/dashboard/transfer/TransferRateGuide';

const Bank = require('../../../../assets/images/building.png');
const ArrowRight = require('../../../../assets/images/Path.png');

type Props = {};

const TransferToBankScreen = ({ route }: any) => {
  const { bank } = route.params;

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
        <InnerScreensHeader pageTitle='Transfer to Bank' longContents={true} />
      </View>
      <InnerScreensContainer noPaddingTop={true}>
        <AccountBalance />

        <View style={styles.mainContainer}>
          <BeneficiaryContainer />
        </View>

        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.mediumText,
              {
                color: '#797878',
              },
            ]}
          >
            Bank Name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 12,

              backgroundColor: '#FFC690',
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#F18403',

              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
                width: '85%',
              }}
            >
              <View
                style={{
                  backgroundColor: '#FFE9D7',
                  padding: 12,
                  borderRadius: 50,
                }}
              >
                <Image source={Bank} />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Medium',

                  color: '#505050',
                  flex: 1,
                }}
              >
                {bank === '' || !bank ? 'Please select bank' : bank}
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate('SelectBank')}>
              <Image
                source={ArrowRight}
                style={{
                  width: 48,
                  height: 18,
                  resizeMode: 'contain',
                }}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.inputTitle}>Bank Account Number</Text>
          <TextInput
            style={styles.textInput}
            selectionColor='#212121'
            keyboardType='numeric'
            maxLength={10}
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

        {/* <View style={styles.mainContainer}>
          <Text
            style={[
              styles.mediumText,
              {
                color: '#797878',
                textAlign: 'center',
              },
            ]}
          >
            Transfers between <Text style={styles.coloredText}>0 - 9999 </Text>
            is <Text style={styles.coloredText}>free </Text>
            while
            <Text style={styles.coloredText}> 10000 </Text>
            and above is
            <Text style={styles.coloredText}>(N50)</Text>
          </Text>
        </View> */}
        <TransferRateGuide />

        <View style={styles.mainContainer}>
          <LinearGradientBtn
            btnText='Send Money'
            onButtonPressed={() =>
              navigation.navigate('SendMoney', {
                paymentMethod: 'Main Balance',
                linkTo: 'TransferToBank',
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
  mediumText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 24,
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#FFC690',
    color: '#212121',
    width: '100%',
    flex: 1,

    borderWidth: 1,
    borderColor: '#F18403',
    borderRadius: 8,

    paddingHorizontal: 6.4,
    paddingVertical: 4.8,
  },
  inputTitle: {
    color: '#797878',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  coloredText: {
    color: '#FF0000',
  },
});

export default TransferToBankScreen;
