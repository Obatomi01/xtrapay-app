import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import AccountBalance from '../../../components/dashboard/transfer/AccountBalance';
import InputContainer from '../../../components/form/InputContainer';
import TransferRateGuide from '../../../components/dashboard/transfer/TransferRateGuide';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

const UserCard = require('../../../../assets/images/user_card.png');
const BlurryCard = require('../../../../assets/images/blurry_card.png');

type Props = {};

const TransferToCardScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  const [activeMethod, setActiveMethod] = useState('balance');
  const [cardNumber, setCardNumber] = useState('');

  const formatCreditCardNumber = (input: any) => {
    // Remove any non-numeric characters from the input
    const numericInput = input.replace(/\D/g, '');

    // Format the input as '0000 0000 0000 0000'
    const formattedInput = numericInput
      .slice(0, 16)
      .replace(/(\d{4})/g, '$1 ')
      .trim();

    return formattedInput;
  };

  const handleTextChange = (text: any) => {
    const formattedValue = formatCreditCardNumber(text);
    setCardNumber(formattedValue);
  };

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
        <InnerScreensHeader pageTitle='Transfer to Card' longContents={true} />
      </View>
      <InnerScreensContainer noPaddingTop={true}>
        <AccountBalance />

        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 18,
            textAlign: 'center',
            marginVertical: 24,
          }}
        >
          Transfer cash using any of the following methods
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <Pressable
            onPress={() => setActiveMethod('balance')}
            style={[
              styles.optionContainer,
              {
                borderBottomColor:
                  activeMethod === 'balance' ? '#F18403' : '#C4C4C4',
                borderBottomWidth: activeMethod === 'balance' ? 3 : 1,
              },
            ]}
          >
            <Text
              style={[
                {
                  color: activeMethod === 'balance' ? '#F18403' : '#000',
                  fontFamily:
                    activeMethod === 'balance'
                      ? 'Poppins-Bold'
                      : 'Poppins-Light',
                },
                styles.optionText,
              ]}
            >
              Balance
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveMethod('card')}
            style={[
              styles.optionContainer,
              {
                borderBottomColor:
                  activeMethod === 'card' ? '#F18403' : '#C4C4C4',
                borderBottomWidth: activeMethod === 'card' ? 2 : 1,
              },
            ]}
          >
            <Text
              style={[
                styles.optionText,
                {
                  color: activeMethod === 'card' ? '#F18403' : '#000',
                  fontFamily:
                    activeMethod === 'card' ? 'Poppins-Bold' : 'Poppins-Light',
                },
              ]}
            >
              Card
            </Text>
          </Pressable>
        </View>

        {activeMethod === 'card' && (
          <View
            style={{
              alignSelf: 'center',
              marginBottom: 48,
              width: '90%',

              position: 'relative',
            }}
          >
            <View
              style={{
                backgroundColor: '#FF9E0B',

                height: 105,

                borderRadius: 12,
                position: 'relative',
              }}
            >
              <Image
                source={UserCard}
                style={{
                  position: 'relative',
                  top: -7,

                  width: '100%',

                  // flex: 1,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Image
              source={BlurryCard}
              style={{
                position: 'absolute',
                zIndex: -2,
                bottom: -34,
              }}
            />
          </View>
        )}

        <View style={styles.mainContainer}>
          <InputContainer
            title='Recipient'
            passwordInput={false}
            inputPlaceholder=''
          />
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.inputTitle}>Card Number</Text>
          <TextInput
            placeholder={'0000 0000 0000 0000'}
            style={styles.textInput}
            selectionColor='#212121'
            keyboardType='numeric'
            value={cardNumber}
            onChangeText={handleTextChange}
            maxLength={19}
          />

          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: 12,
              width: '80%',
              marginTop: 12,
            }}
          >
            You need to provide the recipients 16 digits card Number on the
            first side of the card
          </Text>
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            textInputType={'numeric'}
            title='Amount'
            passwordInput={false}
            inputPlaceholder=''
          />
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <InputContainer
            title='Description'
            passwordInput={false}
            inputPlaceholder=''
          />
        </View>

        <TransferRateGuide />

        <View
          style={[
            {
              marginTop: 32,
            },
            styles.mainContainer,
          ]}
        >
          <LinearGradientBtn
            btnText='Send Money'
            textFamily='Roboto-Regular'
            onButtonPressed={() =>
              navigation.navigate('SendMoney', {
                paymentMethod: 'Card Balance',
                linkTo: 'TransferToCard',
              })
            }
            textSize={24}
          />
        </View>
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mediumText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 32,
  },
  optionContainer: {
    width: '50%',
    borderWidth: 1,
    borderRightColor: '#C4C4C4',
    borderLeftColor: '#C4C4C4',
    borderTopColor: '#C4C4C4',

    paddingVertical: 12,
  },
  optionText: {
    textAlign: 'center',
    fontSize: 16,
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#FFC690',
    color: '#212121',
    width: '100%',
    flex: 1,

    borderWidth: 1,
    borderColor: '#F18403',
    borderRadius: 8,

    paddingHorizontal: 6.4,
    paddingVertical: 4.8,
  },
  inputTitle: {
    color: '#797878',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default TransferToCardScreen;
