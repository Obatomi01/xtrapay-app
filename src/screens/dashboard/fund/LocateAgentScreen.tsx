import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';

type Props = {};

const LocateAgentScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Nearby Merchants' />
      <InnerScreensContainer>
        <Text>
          We are to put the Location Map and allow the user to allow the app
          take access of the location
        </Text>
      </InnerScreensContainer>
    </View>
  );
};

export default LocateAgentScreen;
