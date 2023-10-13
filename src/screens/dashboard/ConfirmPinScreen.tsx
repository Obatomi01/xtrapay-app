import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';

type Props = {};

const ConfirmPinScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Pin' />
      <InnerScreensContainer>
        <View></View>
      </InnerScreensContainer>
    </View>
  );
};

export default ConfirmPinScreen;
