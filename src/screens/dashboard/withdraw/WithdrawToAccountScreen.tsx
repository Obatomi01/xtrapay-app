import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';

type Props = {};

const WithdrawToAccountScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Withdraw' />
      <InnerScreensContainer>
        <View>
          <Text>Withdraw to account</Text>
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default WithdrawToAccountScreen;
