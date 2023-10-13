import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import AmountDetailContainer from '../../../components/fund/AmountDetailContainer';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

const AddMoneyScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();

  const { amountEntered, rate } = route.params;
  const total = rate + amountEntered;
  const formattedTotal = total.toLocaleString();
  const formattedAmount = amountEntered.toLocaleString();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Send Amount' />
      <InnerScreensContainer>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 24,
            marginVertical: 12,
          }}
        >
          N{formattedTotal}
        </Text>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Amount added to wallet</Text>
          <Text>{formattedAmount}.00</Text>
        </AmountDetailContainer>
        <AmountDetailContainer>
          <Text style={styles.regularText}>Processing Fee</Text>
          <Text>{rate}.00</Text>
        </AmountDetailContainer>

        <View
          style={{
            backgroundColor: '#FF0000',
            marginVertical: 64,
          }}
        >
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              paddingVertical: 12,
            }}
          >
            <Text style={styles.lightText}>Confirm Amount</Text>
            <Text
              style={{
                fontFamily: 'Poppins-Black',
                fontSize: 32,
                color: '#fff',
                textAlign: 'center',
              }}
            >
              N{formattedTotal}
            </Text>
            <Text style={styles.lightText}>
              By clicking add money you agree to our{' '}
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                }}
              >
                terms and condition
              </Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
          }}
        >
          <LinearGradientBtn
            btnText='Add Money'
            textSize={24}
            textFamily='Poppins-Regular'
            onButtonPressed={() => navigation.navigate('AccountFunded')}
          />
        </View>
      </InnerScreensContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  regularText: {
    color: '#212121',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  lightText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default AddMoneyScreen;
