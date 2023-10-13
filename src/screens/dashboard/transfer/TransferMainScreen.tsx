import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TransferScreen from './TransferScreen';
import TransferToBankScreen from './TransferToBankScreen';
import TransferToCardScreen from './TransferToCardScreen';
import TransferToWalletScreen from './TransferToWalletScreen';
import SelectBankScreen from './SelectBankScreen';
import SendMoneyScreen from './SendMoneyScreen';
import ConfirmAmountScreen from './ConfirmAmountScreen';
import SuccessTransferScreen from './SuccessTransferScreen';

type Props = {};
const Stack = createNativeStackNavigator();

const screenOptions: any = {
  headerShown: false,
  statusBarTranslucent: true,
  animation: 'none',
};

const TransferMainScreen = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='Transfer'>
      <Stack.Screen
        component={TransferScreen}
        name='Transfer'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={TransferToCardScreen}
        name='TransferToCard'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={TransferToBankScreen}
        name='TransferToBank'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={TransferToWalletScreen}
        name='TransferToWallet'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={SelectBankScreen}
        name='SelectBank'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={SendMoneyScreen}
        name='SendMoney'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={ConfirmAmountScreen}
        name='ConfirmAmount'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={SuccessTransferScreen}
        name='SuccessTransfer'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
    </Stack.Navigator>
  );
};

export default TransferMainScreen;
