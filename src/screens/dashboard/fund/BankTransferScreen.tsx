import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import BankTransferStep from '../../../components/fund/BankTransferStep';
import BankAccounts from '../../../components/fund/BankAccounts';

type Props = {};

const VerticalLine = require('../../../../assets/images/Line_22.png');
const CheckMark = require('../../../../assets/images/check-mark.png');
const HorizontalLine = require('../../../../assets/images/Line_24.png');

const BankTransferScreen = (props: Props) => {
  const stepIcon = (text: string) => (
    <View style={[styles.iconContainer, styles.stepIconContainer]}>
      <Text style={styles.stepIcon}>{text}</Text>
    </View>
  );

  const checkIcon = (
    <View
      style={[
        styles.iconContainer,
        {
          borderWidth: 1,
          borderColor: '#FB1F0A',
        },
      ]}
    >
      <Image source={CheckMark} />
    </View>
  );

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
          pageTitle='Fund account via Bank transfer'
          longTitle={true}
          longContents={true}
        />
      </View>

      <InnerScreensContainer>
        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.regularText,
              {
                marginVertical: 24,
                textAlign: 'center',
              },
            ]}
          >
            Go through the steps below to fund your Xtrapay account
          </Text>
        </View>

        <View style={styles.mainContainer}>
          <BankTransferStep
            iconImg={stepIcon('1')}
            step='Copy any of the account details below'
          />
          <View style={styles.verticalLineContainer}>
            <Image source={VerticalLine} />
          </View>

          <BankTransferStep
            iconImg={stepIcon('2')}
            step='Transfer the amount you want to fund, using your banks mobile  banking or USSD code'
          />
          <View style={styles.verticalLineContainer}>
            <Image source={VerticalLine} />
          </View>
          <BankTransferStep
            iconImg={checkIcon}
            step='Copy any of the account details below'
          />
        </View>

        <Image
          source={HorizontalLine}
          style={{
            alignSelf: 'center',
            marginVertical: 36,
          }}
        />

        <View style={styles.mainContainer}>
          <BankAccounts />
        </View>

        <Pressable>
          <View
            style={{
              backgroundColor: '#FFAC6B',
              width: '90%',
              alignSelf: 'center',
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Medium',
                textAlign: 'center',
              }}
            >
              Get USSD Transfer codes
            </Text>
          </View>
        </Pressable>
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  regularText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  stepIconContainer: {
    backgroundColor: '#FFAC6B',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },

  stepIcon: {
    color: '#FB1F0A',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  verticalLineContainer: {
    marginVertical: 2.4,

    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BankTransferScreen;
