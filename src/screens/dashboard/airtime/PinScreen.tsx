import { View, Text, TextInput, Keyboard } from 'react-native';
import React from 'react';

import { useState, useRef } from 'react';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';

type Props = {};

const PinScreen = (props: Props) => {
  const inputRefs = Array(4)
    .fill('')
    .map((_, index) => useRef<any>(null));

  const focusNextField = (nextField: any, index: any) => {
    if (nextField && nextField.current) {
      nextField.current.focus();
    } else if (index === 3) {
      // When the fourth field is filled, you can perform any action here, like submitting the PIN.
    }
  };

  const handlePinChange = (text: any, index: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    inputRefs[index].current.setNativeProps({ text: sanitizedText });
    if (index < 3 && sanitizedText.length === 1) {
      focusNextField(inputRefs[index + 1], index + 1);
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Pin' />
      <InnerScreensContainer>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 32,
            fontFamily: 'Roboto-Bold',
            marginVertical: 24,
          }}
        >
          Enter your PIN
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}
        >
          {Array(4)
            .fill('')
            .map((el: any, index: any) => (
              <TextInput
                key={index}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 24,
                  alignSelf: 'center',
                  borderBottomColor: '#FF1717',

                  width: 24,
                  textAlign: 'center',
                }}
                ref={inputRefs[index]}
                maxLength={1}
                keyboardType='numeric'
                onChangeText={(text) => handlePinChange(text, index)}
              />
            ))}
        </View>
      </InnerScreensContainer>
    </View>
  );
};

export default PinScreen;
