import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';

type Props = {};

const DataScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Data' />
      <InnerScreensContainer>
        <View>
          <Text>Buy Data</Text>
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default DataScreen;
