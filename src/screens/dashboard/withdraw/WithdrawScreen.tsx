import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';

import WithdrawOptions from '../../../components/withdraw/WithdrawOptions';

type Props = {};

const WithdrawScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Withdraw' />
      <InnerScreensContainer>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#212121',
              textAlign: 'center',
              marginVertical: 32,
              fontSize: 18,
            }}
          >
            Please use any of the following methods to withdraw cash
          </Text>
        </View>
        <WithdrawOptions />
      </InnerScreensContainer>
    </View>
  );
};

export default WithdrawScreen;
