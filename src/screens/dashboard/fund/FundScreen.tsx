import { View, Text } from 'react-native';
import React from 'react';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import FundOptions from '../../../components/fund/FundOptions';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';

type Props = {};

const FundScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Xtrapay wallet funding' />

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
            Please use any of the following methods to fund your Xtrapay account
          </Text>
        </View>

        <FundOptions />
      </InnerScreensContainer>
    </View>
  );
};

export default FundScreen;
