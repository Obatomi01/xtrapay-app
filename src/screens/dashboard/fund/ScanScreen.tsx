import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';

type Props = {};

const ScanScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Scan to pay' />
      <InnerScreensContainer>
        <View>
          <Text>Scan to pay</Text>
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default ScanScreen;
