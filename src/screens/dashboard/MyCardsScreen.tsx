import { View, Text } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';

type Props = {};

const MyCardsScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='My Cards' />
      <InnerScreensContainer>
        <View>
          <Text>My cards</Text>
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default MyCardsScreen;
