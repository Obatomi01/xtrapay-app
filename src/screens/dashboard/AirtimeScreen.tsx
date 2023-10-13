import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';
import AirtimeNetwork from '../../components/dashboard/airtime/AirtimeNetwork';
import AirtimeNetworks from '../../components/dashboard/airtime/AirtimeNetworks';
import InputContainer from '../../components/form/InputContainer';
import LinearGradientBtn from '../../components/general/LinearGradientBtn';

type Props = {};

const AirtimeScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Airtime' />
      <InnerScreensContainer>
        <AirtimeNetworks />

        <View
          style={[
            styles.mainContainer,
            {
              marginVertical: 24,
            },
          ]}
        >
          <Text>Mobile Number</Text>
          <View>
            <TextInput
              placeholder='Enter Phone Number'
              style={{
                borderWidth: 1,
                padding: 8,
              }}
            />
          </View>
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            title='Amount(N)'
            inputPlaceholder='Enter Amount'
            passwordInput={false}
          />
        </View>

        <View
          style={[
            styles.mainContainer,
            {
              position: 'absolute',
              bottom: 125,
            },
          ]}
        >
          <LinearGradientBtn
            btnText='Send'
            onButtonPressed={() => navigation.navigate('AirtimePin')}
            textFamily='Roboto-Regular'
            textSize={24}
          />
        </View>
      </InnerScreensContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default AirtimeScreen;
