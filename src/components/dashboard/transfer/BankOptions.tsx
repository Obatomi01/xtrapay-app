import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

import { useState, useEffect } from 'react';

const BankIcon = require('../../../../assets/images/building.png');

type Props = {
  enteredText: string;
  onBankChosenHandler: (bank: string) => void;
};

const nigerianBanks = [
  'Access Bank',
  'Zenith Bank',
  'Guaranty Trust Bank (GTBank)',
  'First Bank of Nigeria',
  'United Bank for Africa (UBA)',
  'Stanbic IBTC Bank',
  'Ecobank Nigeria',
  'Fidelity Bank',
  'Union Bank of Nigeria',
  'Wema Bank',
  'Sterling Bank',
  'Heritage Bank',
  'Polaris Bank',
  'Keystone Bank',
  'Unity Bank',
  'Jaiz Bank',
  'FCMB (First City Monument Bank)',
  'Standard Chartered Bank',
  'Citibank Nigeria',
  'SunTrust Bank',
  'Providus Bank',
  'Coronation Merchant Bank',
  'Rand Merchant Bank (RMB)',
];

const BankOptions = (props: Props) => {
  const [banksArr, setBanksArr] = useState(nigerianBanks.sort());

  useEffect(() => {
    if (props.enteredText.length > 0) {
      onSearchForBank(props.enteredText);
    } else {
      setBanksArr(nigerianBanks.sort());
    }
  }, [props.enteredText]);

  const onSearchForBank = (text: string) => {
    const formattedText = text.toLowerCase();

    const possibleResults = nigerianBanks
      .map((bank: string) => bank.toLowerCase())
      .filter((bankL: string) => bankL.includes(formattedText));

    setBanksArr(
      possibleResults.map((bank: string) =>
        bank.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())
      )
    );
  };

  const categorizedBanks: any = {};

  banksArr.sort().forEach((bankName) => {
    // Get the first letter of the bank name and convert it to uppercase
    const firstLetter = bankName.charAt(0).toUpperCase();

    // Check if the key for the first letter exists in the categorizedBanks object
    if (!categorizedBanks[firstLetter]) {
      categorizedBanks[firstLetter] = [];
    }

    // Add the bank name to the array for the corresponding letter
    categorizedBanks[firstLetter].push(bankName);
  });

  return (
    <>
      {banksArr.length < 1 ? (
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Medium',

            textAlign: 'center',
            marginVertical: 48,
          }}
        >
          No Search Found.
        </Text>
      ) : (
        Object.keys(categorizedBanks).map((bankLetter: string, index: any) => (
          <View
            key={bankLetter}
            style={{
              marginVertical: 8,
            }}
          >
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                marginBottom: 2.4,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                }}
              >
                {bankLetter}
              </Text>
            </View>

            {categorizedBanks[bankLetter].map(
              (bank: string, bankIndex: number) => (
                <Pressable
                  key={bankIndex}
                  onPress={() => props.onBankChosenHandler(bank)}
                >
                  <View
                    style={{
                      backgroundColor: '#FDF1E8',
                      // marginVertical: 24,
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',

                        paddingVertical: 18,

                        borderBottomWidth: 1,
                        borderBottomColor: '#C4C4C4',

                        flexDirection: 'row',
                        gap: 32,
                        alignItems: 'center',
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: '#FFE9D7',
                          padding: 14,
                          borderRadius: 50,
                        }}
                      >
                        <Image source={BankIcon} />
                      </View>
                      <Text
                        style={{
                          color: '#212121',
                          fontSize: 18,
                          fontFamily: 'Poppins-Medium',

                          flex: 1,
                        }}
                      >
                        {bank}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )
            )}
          </View>
        ))
      )}
    </>
  );
};

export default BankOptions;
