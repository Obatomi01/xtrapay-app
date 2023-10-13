import { View, Text } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

type Props = {};

const MerchantDepositScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Find Merchants' />
      <InnerScreensContainer>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            flex: 0.8,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            Fund your Xtrapay wallet at any Xtrapay POS terminal around you
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <LinearGradientBtn
            btnText='Locate Agent'
            onButtonPressed={() => navigation.navigate('LocateAgent')}
            textFamily='Poppins-Regular'
            textSize={24}
          />
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default MerchantDepositScreen;
