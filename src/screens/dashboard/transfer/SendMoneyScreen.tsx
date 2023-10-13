import { View, Text } from 'react-native';
import React from 'react';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import SendMoneyContainer from '../../../components/dashboard/SendMoneyContainer';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

type Props = {};

const SendMoneyScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();

  const { paymentMethod, linkTo } = route.params;

  const [curRate, setCurRate] = useState(0);
  const [curAmount, setCurAmount] = useState('0');

  const [canBeClicked, setCanBeClicked] = useState(false);

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
      <InnerScreensHeader pageTitle='Send Amount' />
      <InnerScreensContainer>
        <SendMoneyContainer
          curRate={curRate}
          curAmount={curAmount}
          onChangeTextHandler={onChangeTextHandler}
          destination='Okon xtrapay card'
          destinationDescription='1234 5678 9101 1213'
          fromLocation='Your main balance'
        />

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <LinearGradientBtn
            onButtonPressed={() => {
              navigation.navigate('ConfirmAmount', {
                amountEntered: +curAmount,
                rate: +curRate,
                paymentMethod,
                linkTo,
              });
            }}
            btnText='Send Money'
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

export default SendMoneyScreen;
