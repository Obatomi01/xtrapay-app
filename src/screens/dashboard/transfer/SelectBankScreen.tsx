import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import BankOptions from '../../../components/dashboard/transfer/BankOptions';
import FirstSetOfBanks from '../../../components/dashboard/transfer/FirstSetOfBanks';

const SearchIcon = require('../../../../assets/images/search.png');

type Props = {};

const SelectBankScreen = (props: Props) => {
  const [enteredText, setEnteredText] = useState('');
  const navigation = useNavigation<any>();

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
        <InnerScreensHeader pageTitle='Select Bank' longContents={true} />
      </View>
      <InnerScreensContainer>
        <View
          style={[
            styles.mainContainer,
            {
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            },
          ]}
        >
          <Image
            source={SearchIcon}
            style={{
              position: 'absolute',
              left: 12,

              zIndex: 2,
            }}
          />
          <TextInput
            placeholder='Search'
            style={{
              width: '100%',
              fontSize: 16,
              fontFamily: 'Poppins-Medium',

              backgroundColor: '#FFE9D7',
              borderWidth: 1,
              borderColor: '#F18403',

              paddingLeft: 48,
              paddingVertical: 8,
              borderRadius: 20,
            }}
            placeholderTextColor={'#F18403B2'}
            onChangeText={(text) => setEnteredText(text)}
          />
        </View>
        <FirstSetOfBanks
          onBankChosenHandler={(bank: string) =>
            navigation.navigate('TransferToBank', {
              bank,
            })
          }
        />
        <BankOptions
          enteredText={enteredText}
          onBankChosenHandler={(bank: string) =>
            navigation.navigate('TransferToBank', {
              bank,
            })
          }
        />
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default SelectBankScreen;
