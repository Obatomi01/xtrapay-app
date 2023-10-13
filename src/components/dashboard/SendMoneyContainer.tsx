import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';

import AmountDetailContainer from '../fund/AmountDetailContainer';

const ArrowRight = require('../../../assets/images/colored_arrow_right.png');

type Props = {
  curRate: number;
  curAmount: string;
  onChangeTextHandler: (inputText: string) => void;
  destination: string;
  destinationDescription: string;
  fromLocation: string;
};

const SendMoneyContainer = (props: Props) => {
  return (
    <View>
      <View
        style={[
          styles.mainContainer,
          {
            marginTop: 24,
          },
        ]}
      >
        <Text style={styles.regularText}>{props.fromLocation}</Text>
        <View
          style={{
            backgroundColor: '#FFE9D7',
            padding: 8,

            borderRadius: 50,
          }}
        >
          <Image source={ArrowRight} />
        </View>
        <Text style={styles.regularText}>{props.destination}</Text>
      </View>

      <View
        style={[
          {
            width: '90%',
            alignSelf: 'center',

            paddingBottom: 24,
          },
          styles.horizontalLine,
        ]}
      >
        <Text
          style={[
            styles.regularText,
            {
              alignSelf: 'flex-end',
            },
          ]}
        >
          {props.destinationDescription}
        </Text>
      </View>

      <AmountDetailContainer>
        <Text style={styles.regularText}>Amount</Text>
        <TextInput
          placeholder='0.00'
          keyboardType='numeric'
          onChangeText={(text) => props.onChangeTextHandler(text)}
          style={{
            //   backgroundColor: '#000',
            width: '70%',
            textAlign: 'right',
          }}
          value={props.curAmount}
        />
      </AmountDetailContainer>

      <AmountDetailContainer>
        <Text style={styles.regularText}>Rate N</Text>
        <Text>{props.curRate}.00</Text>
      </AmountDetailContainer>

      <View style={{ marginVertical: 24, alignItems: 'center' }}>
        <Text
          style={{
            textAlign: 'center',
            width: '80%',
            alignSelf: 'center',
            fontSize: 13,
            fontFamily: 'Roboto-Regular',
          }}
        >
          Transfers between <Text style={{ color: '#FF0000' }}>0 - 9999</Text>{' '}
          is <Text style={{ color: '#FF0000' }}>free</Text> while{' '}
          <Text style={{ color: '#FF0000' }}>10000</Text> and above is{' '}
          <Text style={{ color: '#FF0000' }}>(50)</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  regularText: {
    color: '#212121',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
});

export default SendMoneyContainer;
