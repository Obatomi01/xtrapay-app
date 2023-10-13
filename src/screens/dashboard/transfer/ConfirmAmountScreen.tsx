import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Checkbox } from 'react-native-paper';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import AmountDetailContainer from '../../../components/fund/AmountDetailContainer';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

type Props = {};

const ConfirmAmountScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();

  const [beneficiarySaved, setBeneficiarySaved] = useState(false);

  const { amountEntered, rate, paymentMethod, linkTo } = route.params;
  const total = rate + amountEntered;
  const formattedTotal = total.toLocaleString();
  const formattedAmount = amountEntered.toLocaleString();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          height: 105,
        }}
      >
        <InnerScreensHeader pageTitle='Send Money' longContents={true} />
      </View>

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
          <Text style={styles.regularText}>Recipient</Text>
          <Text style={styles.mediumText}>Okon Obanefo hassan</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Card Number</Text>
          <Text style={styles.mediumText}>1234 5678 9101 1213</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Amount sent to Recipient card</Text>
          <Text style={styles.mediumText}>{formattedAmount}</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Processing Fee</Text>
          <Text style={styles.mediumText}>{rate}</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Payment Method</Text>
          <Text style={styles.mediumText}>{paymentMethod}</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.regularText}>Description</Text>
          <Text style={styles.mediumText}>Okon please manage this</Text>
        </AmountDetailContainer>

        <View
          style={{
            backgroundColor: '#FF0000',
            marginTop: 64,
            marginBottom: 32,
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
            width: '90%',
            alignSelf: 'center',

            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <Checkbox
            status={beneficiarySaved ? 'checked' : 'unchecked'}
            onPress={() => {
              setBeneficiarySaved(!beneficiarySaved);
            }}
            color='#FF190B'
          />
          <Text style={styles.mediumText}>Save as beneficiary</Text>
        </View>

        <View
          style={{
            marginTop: 24,
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <LinearGradientBtn
            btnText='Send Money'
            textFamily='Roboto-Regular'
            textSize={24}
            onButtonPressed={() =>
              navigation.navigate('SuccessTransfer', {
                linkTo,
                amountEntered,
              })
            }
          />
        </View>
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  regularText: {
    color: '#797878',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  mediumText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#212121',
  },
  lightText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ConfirmAmountScreen;
