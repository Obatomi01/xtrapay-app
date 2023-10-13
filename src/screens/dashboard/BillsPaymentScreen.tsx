import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';

type Props = {};

const BillsPaymentScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Bills Payment' />
      <InnerScreensContainer>
        <View>
          <Text>Bills payment</Text>
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default BillsPaymentScreen;
