import { View, Text, ImageBackground, Pressable } from 'react-native';
import React from 'react';

const UBA = require('../../../../assets/images/UBA.png');
const FirstBank = require('../../../../assets/images/first_bank.png');
const Zenith = require('../../../../assets/images/zenith.png');
const GTB = require('../../../../assets/images/gtb.png');
const Access = require('../../../../assets/images/access.png');
const FCMB = require('../../../../assets/images/fcmb.png');

type Props = {
  onBankChosenHandler: (bank: string) => void;
};

type BankDetail = {
  name: string;
  iconImg: any;
  iconName: any;
};

const banks: BankDetail[] = [
  {
    name: 'United Bank for Africa',
    iconImg: UBA,
    iconName: (
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
          fontFamily: 'Poppins-Bold',
        }}
      >
        UBA
      </Text>
    ),
  },
  {
    name: 'First Bank Of Nigeria',
    iconImg: FirstBank,
    iconName: (
      <Text
        style={{
          color: '#fff',
          fontSize: 9,
          fontFamily: 'Poppins-Medium',
        }}
      >
        First Bank
      </Text>
    ),
  },
  {
    name: 'Guaranty Trust Bank',
    iconImg: GTB,
    iconName: (
      <Text
        style={{
          color: '#fff',
          fontSize: 9,
          fontFamily: 'Poppins-Medium',
        }}
      >
        GTBank
      </Text>
    ),
  },
  {
    name: 'Access Bank',
    iconImg: Access,
    iconName: (
      <Text
        style={{
          color: '#030F7C',
          fontSize: 10,
          fontFamily: 'Poppins-Bold',
        }}
      >
        access
      </Text>
    ),
  },
  {
    name: 'Zenith Bank',
    iconImg: Zenith,
    iconName: (
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          fontFamily: 'Poppins-Black',
        }}
      >
        Z
      </Text>
    ),
  },
  {
    name: 'Fcmb',
    iconImg: FCMB,
    iconName: (
      <Text
        style={{
          color: '#fff',
          fontSize: 12,
          fontFamily: 'Poppins-Bold',
        }}
      >
        FCMB
      </Text>
    ),
  },
];

const FirstSetOfBanks = (props: Props) => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        marginVertical: 24,

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 12,
      }}
    >
      {banks.map((el: BankDetail, index: any) => (
        <Pressable
          key={el.name}
          style={{
            width: '32%',
            alignItems: 'center',
            gap: 2.4,
          }}
          onPress={() => props.onBankChosenHandler(el.name)}
        >
          <ImageBackground
            source={el.iconImg}
            style={{
              width: 48,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {el.iconName}
          </ImageBackground>
          <Text
            style={{
              textAlign: 'center',
            }}
          >
            {el.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FirstSetOfBanks;
