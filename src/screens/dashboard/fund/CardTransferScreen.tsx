import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';
import AmountDetailContainer from '../../../components/fund/AmountDetailContainer';
import SendMoneyContainer from '../../../components/dashboard/SendMoneyContainer';

const ArrowRight = require('../../../../assets/images/colored_arrow_right.png');

type Props = {};

const CardTransferScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();

  const [canBeClicked, setCanBeClicked] = useState(false);
  const [curRate, setCurRate] = useState(0);
  const [curAmount, setCurAmount] = useState('0');

  const onChangeTextHandler = (inputText: any) => {
    const formattedInput = Number(inputText).toString();

    const isValid = inputText > 0;
    const rateIs50 = inputText > 9999;

    setCanBeClicked(isValid);
    setCurRate(rateIs50 ? 50 : 0);

    setCurAmount(formattedInput);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Naira card Deposit' />
      <InnerScreensContainer>
        {/* <View
          style={[
            styles.mainContainer,
            {
              marginTop: 24,
            },
          ]}
        >
          <Text style={styles.regularText}>Your Debit Card</Text>
          <View
            style={{
              backgroundColor: '#FFE9D7',
              padding: 8,

              borderRadius: 50,
            }}
          >
            <Image source={ArrowRight} />
          </View>
          <Text style={styles.regularText}>Xtrapay Wallet</Text>
        </View>

        <View
          style={[
            {
              width: '90%',
              alignSelf: 'center',

              paddingBottom: 24,
            },
            styles.horizontalLine,
          ]}
        >
          <Text
            style={[
              styles.regularText,
              {
                alignSelf: 'flex-end',
              },
            ]}
          >
            N0.00
          </Text>
        </View>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Amount</Text>
          <TextInput
            placeholder='0.00'
            keyboardType='numeric'
            onChangeText={onChangeTextHandler}
            style={{
              //   backgroundColor: '#000',
              width: '70%',
              textAlign: 'right',
            }}
            value={curAmount}
          />
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Rate N</Text>
          <Text>{curRate}.00</Text>
        </AmountDetailContainer> */}

        <SendMoneyContainer
          curAmount={curAmount}
          curRate={curRate}
          onChangeTextHandler={onChangeTextHandler}
          destination='Xtrapay Wallet'
          destinationDescription='N0.00'
          fromLocation='Your Debit Card'
        />

        {/* <View style={{ marginVertical: 24, alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              width: '80%',
              alignSelf: 'center',
              fontSize: 13,
              fontFamily: 'Roboto-Regular',
            }}
          >
            Transfers between <Text style={{ color: '#FF0000' }}>0 - 9999</Text>{' '}
            is <Text style={{ color: '#FF0000' }}>free</Text> while{' '}
            <Text style={{ color: '#FF0000' }}>10000</Text> and above is{' '}
            <Text style={{ color: '#FF0000' }}>(50)</Text>
          </Text>
        </View> */}

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <LinearGradientBtn
            onButtonPressed={() => {
              navigation.navigate('AddMoney', {
                amountEntered: +curAmount,
                rate: +curRate,
              });
            }}
            btnText='Add Money'
            textFamily='Roboto-Regular'
            textSize={24}
            canBeClicked={canBeClicked}
            changeClickability={true}
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
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  regularText: {
    color: '#212121',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
});
export default CardTransferScreen;
